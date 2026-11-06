# Food Blog (Express + Jade)

Built from the Express Generator demo (`myapp`): same app.js, bin/www, routes and Jade views.

## Run

    npm install
    npm start

Open http://localhost:3000

## Structure

    app.js                    Express setup (view engine: jade)
    bin/www                   Starts the HTTP server (port 3000 or $PORT)
    routes/index.js           GET /  -> renders views/index.jade
    routes/users.js           GET /users (generator default)
    views/layout.jade         <head>, Vue CDN, fonts, stylesheet
    views/index.jade          Food Blog page (Vue markup unchanged)
    views/error.jade          Error page
    public/stylesheets/       style.css (original styles.css)
    public/javascripts/       vue.js (original Vue components and posts data)
    public/images/            chili.jpg, profile.png
