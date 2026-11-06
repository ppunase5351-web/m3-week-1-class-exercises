# Food Blog (Express + Pug, include and components)

## Run

    npm install
    npm start

Open http://localhost:3000

## Views

    views/layout.pug              <head>, Vue CDN, fonts, stylesheet
    views/index.pug               page: extends layout, uses the includes and components below
    views/includes/sidebars.pug   include: left and right background panels
    views/includes/header.pug     include: <header> with the Vue headcomp component
    views/includes/footer.pug     include: <footer>
    views/components/blogpost.pug component (mixin +blogPost): one comment
    views/components/infobox.pug  component (mixin +infoBox): author info pop-up
    views/error.pug               error page
