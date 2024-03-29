# Portfolio

## About

This is my portfolio. You can explore all parts here: <br>
|Name|Link|Explanation|
|----|----|-----------|
|Frontend|https://portfolio4rf.herokuapp.com/| React part
|Backend|https://backend4portfolio.herokuapp.com/| Express part
|Google sheet| [google sheet](https://docs.google.com/spreadsheets/d/1qhoOSZR3LnkAQ1zVF3TrqZ1gnUOuUXccAMaMs9f1S7E/edit#gid=0) | The file that is the source of our data. Access right is restricted.|

## First launch

- Prerequisites. You should have installed Node 14.\*\*.\*\*+
- Clone project from git.
- From the root directory run `npm install`
- `cd frontend npm install`
- `cd.. && cd backend npm install`
- You should prepare env file and google-credentials.
- In the backend directory you should put google-credentials.json previously filled with data from example file. You can generate google-credentials automatically [here is explanation.](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) Be aware, default google service credentials DO NOT includes sheet_id field, so you should add it manually. sheet_id is your id from sheet list, data from which you use in your app.
- Then fill env file.
- Run `npm run start`.

## How it works

This app contains two parts: -frontend -backend. <br>
Each app part contains its own structure and is as independent as it possible. Backend part is wired with google sheet. Currently all data displayed on the frontend is retrieved from [this google shit](https://docs.google.com/spreadsheets/d/1qhoOSZR3LnkAQ1zVF3TrqZ1gnUOuUXccAMaMs9f1S7E/edit)

## Heroku deploy

This program should be deployed separately for heroku. This was done so that the Frontend could be connected to different API endpoints. <br>
To deploy the app to Heroku you should:

1. Change directory: `cd frontend` or `cd backend`
2. Save changes: `git add .` and `git commit . -m"your-message"`
3. Deploy changes: `git push heroku master`

If something goes wrong try start project locally: `heroku local`;

If it has no effect, explore [heroku docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs).