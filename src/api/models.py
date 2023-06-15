from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


beloved_pieces = db.Table(
    "beloved_pieces",
   
    db.Column("user_id", db.ForeignKey("user.id")),
    db.Column("piece", db.ForeignKey("piece.id")),
)


beloved_collections = db.Table(
    "beloved_collections",
   
    db.Column("user_id", db.ForeignKey("user.id")),
    db.Column("collection", db.ForeignKey("collection.id")),
)

user_collections = db.Table(
    "user_collections",

    db.Column("user_id", db.ForeignKey("user.id")),
    db.Column("collection", db.ForeignKey("collection.id"))
)

collection_pieces = db.Table(
"collection_pieces",

db.Column("collection_id", db.ForeignKey("collection.id")),
db.Column("piece_id", db.ForeignKey("piece.id"))
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    # Profile Picture

    name = db.Column(db.String(250), unique= False, nullable= False)
    phone_number = db.Column(db.Integer, unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    beloved_pieces = db.relationship('Piece',secondary="beloved_pieces")
    beloved_collections = db.relationship('Collection',secondary="beloved_collections")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "phone_number": self.phone_number,
            # do not serialize the password, its a security breach
        }


class Piece(db.Model):
    __tablename__ = "piece"
    id = db.Column(db.Integer, primary_key=True)
    # user_id = db.Column(db.Integer,ForeignKey('user.id'))
    title = db.Column(db.String(250))
    description = db.Column(db.String(250))
    upload_date = db.Column(db.DateTime)
    beloved_by = db.Column(db.Integer)
    # piece = db.relationship('Piece',secondary="beloved_pieces")

class Collection(db.Model):
    __tablename__ = 'collection'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    description = db.Column(db.String(250))
    beloved_by = db.Column(db.Integer)
    collection = db.relationship('Piece',secondary="collection_pieces")

class Settings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(256), unique=True)
    value = db.Column(db.JSON)



class MediaType(db.Enum):
    IMAGE = 'image'
    VIDEO = 'video'
    AUDIO = 'audio'


class Media(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(256), unique=True)
    filetype = db.Column(db.Enum("image", "video", "audio", name="MediaType"), default="image")

