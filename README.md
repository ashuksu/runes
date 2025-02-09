
## Site Preview
### [GitHub Pages](https://ashuksu.github.io/landingpage/public/)

---

## Usage

* `npm i` --- install node_modules

* `npm run dev` --- build project (CSS and HTML files will also be built by this command), and bundle.js and bundle.js.map files will appear in the /public/js folder.

* `npm run build` --- build project, but final (with optimization, maximum file minification), which can be uploaded to hosting.

* `npm run watch` --- automatic viewing mode for changes in project files with automatic build of changed files.

* `npm run start` --- start local server, which will run HTML page and will also track changes in files.

---

## Git

#### Flow

The main model is - [Branching model](https://nvie.com/posts/a-successful-git-branching-model)

#### Branching

* `main` - `production` environment code branch

* `develop` - the main branch where all `feature/<issue-key>` branches are uploaded, for example `feature/CODE-123`, a development branch

---

## Build

#### Source

A simple static site on Webpack 4 ( [github link](https://github.com/Harrix/static-site-webpack-habr) )

#### Minimum versions of node, npm

* `node -v` v17.4.0

* `npm -v` 8.4.1