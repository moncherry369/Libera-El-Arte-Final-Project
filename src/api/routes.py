"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Settings
from api.utils import generate_sitemap, APIException
import logging
import boto3
from botocore.exceptions import ClientError

api = Blueprint('api', __name__)


#       !!--USER--!!
@api.route('/login', methods=['POST'])
def handle_login():
    print("body:", request.json)

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({
            "msg": "No account was found. Please check the email used or create an account."
        }), 401
    
    if password != user.password:
        return jsonify({"msg": "Incorrect password. Please try again."}), 401

    access_token = create_access_token(identity=email)
    
    payload = {
        "token": access_token,
        'msg': 'Login Successful.',
    }
    return jsonify(payload), 200

# !!--SIGN-UP--!!
@api.route('/signup', methods=['POST'])
def handle_signup():
    print("body:", request.json)

    body = request.json # get the request body content
    email = body.get('email', None)
    name = body.get('name', None)
    password = body.get('password', None)
    
    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to enter an email',400
    if not name:
        return 'You need to enter an name',400
    if not password:
        return 'You need to enter a password', 400

    check_user = User.query.filter_by(email=email).first()

    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }), 409

    user = User(email=email, password=password, is_active=True)

    try:
        db.session.add(user)
        db.session.commit()
        access_token = create_access_token(identity=user.email)
        refresh_token = create_refresh_token(identity=user.email)
        return jsonify({
            'msg': 'User created successfully.',
            'access_token': access_token,
            'refresh_token': refresh_token
         }), 201

    except Exception as e:
        return jsonify({'msg': 'An error occurred while creating the user.'}), 500

# AWS S3 CONNECTION
def upload_file_to_s3(file_bytes, object_name):
    aws_info = Setting.query.filter_by(key="aws/secrets").first()
    s3_client = boto3.resource(
        's3',
        aws_access_key_id=aws_info.value["s3AccessKey"],
        aws_secret_access_key=aws_info.value["s3SecretKey"]
    )
    bucket = s3_client.Bucket(aws_info.value["s3BucketName"])
    try:
        bucket.upload_fileobj(file_bytes, object_name)
    except ClientError as e:
        logging.error(e)
        return False
    return True
  
@api.route('/assets', methods=['POST'])
def upload_file():
    # Check if there is a file.
    if 'file' not in request.files:
        return jsonify(msg='No file found'), 400
    request_file = request.files['file']

    # Check if the filename is valid.
    filename = secure_filename(request_file.filename)
    if filename == '':
        return jsonify(msg='Invalid filename'), 400

    # Attempt to upload the file to S3.
    if upload_file_to_s3(request_file, filename):
        dbfile = Piece(
            filename=filename,
            filetype="IMAGE"
        )
        db.session.add(dbfile)
        db.session.commit()
    return '', 204
  
@api.route('/assets/<string:filename>', methods=['GET'])
def get_file_URL(filename: str):
    aws_info = Setting.query.filter_by(key="aws/secrets").first()
    file_info = Media.query.filter_by(filename=filename).first()
    return jsonify(
        url=f"""https://{aws_info.value["distDomainName"]}/{filename}""",
        media_type=file_info.filetype.value,
    )