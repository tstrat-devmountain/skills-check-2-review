# Dev Mountain SIMULATION 1
https://github.com/DevMountain/simulation-1

## Setup

`Fork and Clone from Git`

Next, copy .env.example into your personal .env file

Fill out `CONNECTION_STRING` with your own database.  If using postgres from heroku do not forget to add `?ssl=true` to the end.

Fill in `SERVER_PORT` with 4050 or another port of your choosing.  
* NOTE - if you use any other port you will need to edit the proxy in package.json.

Next, run the following commands on two terminal views
```
    npm i
    npm start

    nodemon
```
    
When you visit localhost:3000 (or where-ever react is launching from) you should see "It's Alive" in the top middle of the page

Nodemon should show the app is listening on the port you specified.

