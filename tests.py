import os
import unittest

from app import app, db, Question

class TestCase(unittest.TestCase):
    def setup(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'test.db')
        self.app = app.test_client()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def test_question(self):
        q = Question(question="ABCDEFG",
             label="ABC",
             a="A", 
             b="B", 
             c="C", 
             d="D", 
             answer=3)

        expected = "ABCDEFG"

        assert q.question == expected
    

if __name__ == '__main__':
    unittest.main()
    
