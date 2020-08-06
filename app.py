from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, static_url_path='', static_folder='client/build')

# DB config
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# DB model
class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.Text)
    label = db.Column(db.Text)
    a = db.Column(db.Text)
    b = db.Column(db.Text)
    c = db.Column(db.Text)
    d = db.Column(db.Text)
    answer = db.Column(db.Integer)

    @property
    def serialize_question(self):
        return {
            'id': self.id,
            'question': self.question,
            'label': self.label,
            'a': self.a,
            'b': self.b,
            'c': self.c,
            'd': self.d,
        }
    
    @property
    def serialize_answer(self):
        return {
            'id': self.id,
            'answer': self.answer
        }

db.create_all()

#populate DB
q = Question(question="Why should I be hired for the Software Developer position at Udemy?",
             label="Why hire me?",
             a="I have the technical skills pertaining to Python, React, JS, MySQL and Git which align perfectly with the position requirements.", 
             b="Past work experiences helped me polish skills like writing production level code & contributing to large code bases.", 
             c="Coursework at Hopkins related to OS, DBMS and OOSE, through projects, have helped build a solid foundation.", 
             d="All of the above. :)", 
             answer=3)
db.session.add(q)
db.session.commit()

q = Question(question="Personal projects I have done.", 
             label="Personal Projects!",
             a="Bloo: Android app to efficiently schedule and route Hopkins' shuttle rides.", 
             b="Medicine Delivery: iOS app to control a patented device through bluetooth.", 
             c="Judging a book by its cover: A machine learning pipeline to predict a book's genre using cover image.(Published at IEEE TenSymp 2019)", 
             d="Just showcase, not a question. :)", 
             answer=3)
db.session.add(q)
db.session.commit()

q = Question(question="Which of the following do you think is true?",
             label="Fun fact!",
             a="A shot of espresso has less caffeine than a cup of coffee.", 
             b="A gold fish has a memory span of only three seconds.", 
             c="",
             d="",
             answer=0)
db.session.add(q)
db.session.commit()


@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/questions')
def getQuestions():
    questions = Question.query.all()
    return jsonify([question.serialize_question for question in questions]), 200

@app.route('/check_answers', methods=['POST'])
def getAnswers():
    req_data = request.get_json()['answers']
    print(req_data)
    questions = Question.query.all()

    score = 0
    for question in questions:
        ans = req_data[str(question.id)]

        if ans == question.answer:
            score += 1

    return jsonify(score), 200

if __name__ == '__main__':
    app.run()
