# Application run

## Introduction
  * The application require two terminals to run, one for the front-end and another for the nginx proxy
  * The proxy is required to permit the front to access the backend data without CORS errors
  * It is required to have installed docker and nodejs in order to run the application

## Running the front-end
  * `cd game-catalog`
  * `npm run web`
  * Although a window might open, is not recomended to use therefor will be glitches

## Running the proxy
  * `cd game-catalog`
  * `npm run proxy`

## Accessing the application
  * Just access the link `http://localhost:8080` and you are heady to go