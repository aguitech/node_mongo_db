# node_mongo_db

nodemon: command not found

You can resolve this problem by adding nodemon to your package.json:

npm install nodemon --save-dev

The problem happens when nodemon does not exist in /node_modules/.bin.

Added --save-dev since it's required during development only.

Esto agrega

"devDependencies": {
    "nodemon": "^2.0.6"
  }
  
  en package.json
  
  y ya podemos correrlo con nodemon app
  app se refiere a app.js
  
  
  
  
