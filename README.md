## Getting started
When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from meaningcloud API, based on the contents of the article.

## Project Instructions
The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Installation
git clone <repo>
`cd` into your new folder and run:
- `npm install`

Install loaders and plugins.
## Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
Sign up for an API key at meaningcloud.com

Configure environment variables using dotenv package
Install the dotenv package
npm install dotenv

## Step 1: Signup for an API key
First, you will need to go (https://developer.aylien.com/signup). Signing up will get you an API key. 

Create a new .env file in the root of your project
Fill the .env file with your API key :
API_KEY=**************************

## Start the project 
npm run build-prod
npm run build-dev
npm run start



