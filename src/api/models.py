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


    name = db.Column(db.String(250), unique= False, nullable= False)
    phone_number = db.Column(db.Integer, unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    pieces = db.relationship('Piece', uselist=True, backref=db.backref("user", uselist=False))
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
        }


class Piece(db.Model):
    __tablename__ = "piece"
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(256), unique=True)
    filetype = db.Column(db.Enum("image", "video", "audio", name="MediaType"), default="image")
    title = db.Column(db.String(250))
    description = db.Column(db.String(250))
    upload_date = db.Column(db.DateTime)
    beloved_by = db.Column(db.Integer)

    collection_id = db.Column(db.Integer, db.ForeignKey("collection.id"))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def serialize(self, base_url=""):
        return {
            "id": self.id,
            "filename": f"""https://{base_url}/{self.filename}""",
            "filetype": self.filetype,
            "title": self.title,
            "description": self.description,
            "upload_date": self.upload_date,
            "user": self.user.serialize() if self.user is not None else None,
        }

class Collection(db.Model):
    __tablename__ = 'collection'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    description = db.Column(db.String(250))
    beloved_by = db.Column(db.Integer)
    pieces = db.relationship('Piece', uselist=True, backref=db.backref("collection", uselist=False))

class Settings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(256), unique=True)
    value = db.Column(db.JSON)



class MediaType(db.Enum):
    IMAGE = 'image'
    VIDEO = 'video'
    AUDIO = 'audio'


