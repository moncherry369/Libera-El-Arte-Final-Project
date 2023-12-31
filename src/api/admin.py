  
import os
from flask_admin import Admin
from .models import db, User, Settings, Piece
from flask_admin.contrib.sqla import ModelView

class UserView(ModelView):
    column_list = ("name",
        "phone_number",
        "email",
        "password",
        "is_active",
        "pieces",)
    column_hide_backrefs = False

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(UserView(User, db.session))
    admin.add_view(ModelView(Settings, db.session))
    admin.add_view(ModelView(Piece, db.session))


    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))