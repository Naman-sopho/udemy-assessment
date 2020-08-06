## Udemy Coding Challenge Quiz

Developed a full stack web application as an answer to the challenge specified [here](https://github.com/udemy/coding-challenge).  
The deployed app can be found on Heroku [here](https://udemy-assessment-naman.herokuapp.com)

#### Architectural Decisions
- **React**: Used create-react-app as a base template and developed the app upon it.
- **Flask**: Used a flask based backend to implement simple endpoints.
- **SQLAlchemy**: For the questions database.

#### Libraries Used
- Material-UI: A React UI framework which has several components for easier development.
- Axios: For sending requests to the backend.

#### API Endpoints
- `questions`: Supports `GET` requests. Sends all the questions as a JSON object.
- `check_answers`: Supports `POST` requests. Expects a `answers` json object which has `question id` as key and the option number selected by the user as value.

#### DB Table Structure
- `Question` table: This has 7 columns, `question` the question text, `label` text to be displayed as label for the question, `answer` option number of the correct option and four columns one for text of each of the options.

#### Things would have done differently(why I made some of the above decisions)
- **Redux**: The use of redux would have been justified when there is a reasonable amount of data changing over time and thus redux
helps in maintaining a single source of truth.
- **Django for backend**: Spinning up a simple backend is easier with Flask, whereas for production Django would definitely preferred due to its
features like built in protection against XSS and SQL injection attack vectors and out-of-the box ORM which support PostgreSQL, MySQL etc.
- **PostgreSQL for database**: SQLlite is much easier to use since it does not require running a separate server(which would further require paid services like AWS.)
- **Minor details**: 
    - Including the DB config and models to separate files to reduce clutter in the main `app.py` file. Since there are only two endpoints the file relatively small.
    - ~~Not sending answers with the questions through the same endpoint.~~ On second thought this seemed like a major flaw so ended up modifying the implementation
    so now the answers are checked on the backend and the score is sent as a response.
