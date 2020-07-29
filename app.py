from flask import Flask
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='client/build')

@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()
