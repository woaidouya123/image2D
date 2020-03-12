const fs = require('fs');

module.exports = function (url,componentName) {

    fs.writeFileSync(url,`{
  "name": "`+componentName+`",
  "version": "0.1.0",
  "description": "🍇 基于image2d开发的图形组件",
  "main": "dist/main.min.js",
  "scripts": {
   "start": "npm install && npm run build",
   "build": "cuf -d ./dist && rollup -c rollup.config.js && npm run build:babel && npm run build:uglify",
   "build:babel": "npx babel dist/main.es5+.js --out-file dist/main.js",
   "build:uglify": "uglifyjs dist/main.js -o dist/main.min.js"
  },
  "keywords": [
     "image2D.js",
     "`+componentName+`"
  ],
  "repository": {
      "type": "git",
      "url": "git+https://github.com/image2D/`+componentName+`.git"
  },
  "author": "[作者名字]",
  "license": "MIT",
  "bugs": {
     "url": "https://github.com/image2D/`+componentName+`issues"
  },
  "homepage": "https://github.com/image2D/`+componentName+`/README.md",
  "devDependencies": {
   "@babel/cli": "^7.0.0",
   "@babel/core": "^7.5.5",
   "@babel/preset-env": "^7.5.5",
   "cuf": "^1.0.3",
   "rollup": "^1.20.0",
   "rollup-plugin-commonjs": "^10.1.0",
   "rollup-plugin-node-resolve": "^5.2.0",
   "uglify-js": "^3.6.0"
  },
  "dependencies": {
     "image2d": "^1.6.4"
  }
}`);

};