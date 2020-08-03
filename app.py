from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, static_url_path='', static_folder='client/build')

# DB config
basedir = os.path.abspath(os.path.dirname(__file__))
app.config.SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
app.config.SQLALCHEMY_TRACK_MODIFICATIONS = False
db = SQLAlchemy(app)

# DB model
class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.Text)
    a = db.Column(db.Text)
    b = db.Column(db.Text)
    c = db.Column(db.Text)
    d = db.Column(db.Text)
    answer = db.Column(db.String(1))

    @property
    def serialize(self):
        return {
            'id': self.id,
            'question': self.question,
            'a': self.a,
            'b': self.b,
            'c': self.c,
            'd': self.d,
            'answer': self.answer
        }

    @property
    def serialize_list(self):
        return [item.serialize for item in self.many2many]

db.create_all()

#populate DB
q = Question(question="What is your name?", a="AA", b="BB", c="CC", d="d", answer="a")
db.session.add(q)
db.session.commit()


@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/questions')
def getQuestions():
    questions = Question.query.all()
    print(questions)
    return jsonify([question.serialize for question in questions]), 200

if __name__ == '__main__':
    app.run()
