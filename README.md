# Promatia Government Website
This is the official website of the government of Promatia.

### [Website](https://promatia.com)

Promatia is a new country project located in Northern Australia with its own government, currency and laws.

Our aspirations are to:

- Create a pragmatic government, led by citizens for citizens.
- Allow citizens to pursue their life goals, aided by our government.
- Develop cheap, modern infrastructure, to achieve truly high living standards.
- Modernize and digitize banking, education, governance and much more.
- Create a model for an environmentally-sustainable and economically-viable nation
- Create a safe and free society, where citizens can pursue their life goals.

We are always looking for new risk-loving and passionate citizens who want to start a new life in Promatia. Citizens can help through intellect, muscle, enterprise, finance or networking.

## Stack

- **Database:** MongoDB
- **Server:** Node.js (13.3 ESM Modules)
- **Server-side App/Routing:** `koa` + `koa-router`
- **Front-end Framework:** Vue.js
- **Front-end Routing:** `vue-router`
- **Serverside Front-end Renderer:** `vue-server-renderer` + `webpack`
- **API Language:** GraphQL (custom implementation) + JSON
- **CSS Preprocessor:** `stylus`
- **Build Tool:** `webpack`

## Project Structure

The project is structured into two main subfolders: `/resources` and `/server`. The front-end app can be found inside the `/resources` area which includes:

- components
- layouts
- pages
- styling
- images

and other files

the `/server` folder contains API Models (eg: User) and schema's for the API. It also includes middleware for authentication, data for roles/permissions, routes. All the behind-the-scenes logic occurs here.


## Setting up local dev environment

- Install MongoDB
- Use node version 13.3
- `npm i -g nodemon`
- `npm i` on the folder directory to install packages
- duplicate `example.env.json` and rename it to `env.json`
- `npm run build` to build app and compile files to `/dist`
- `nodemon` to run server

## Setting up VSCode for windows
- open terminal in vscode
- `npm i -g nodemon`
- `npm i`
- copy `example.env.json` and rename it to `env.json`
- `npm install -g node-gyp` to compile bcrypt
- close vscode and open windows powershell as administrator
- `npm install --g --production windows-build-tools`
- wait for the program to install python2 and other compilers
- open vscode and its terminal again
- `npm install bcrypt`
- `npm run build` to build app and compile files
- `nodemon` to run server
