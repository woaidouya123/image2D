const fs = require('fs');

module.exports = function (url,componentName) {

    fs.writeFileSync(url,`{
  "name": "`+componentName+`",
  "version": "0.1.01",
  "description": "🍇 基于image2d开发的图形组件",
  "main": "",
  "scripts": {
      
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
    
  },
  "dependencies": {
     "image2d": "^1.6.4"
  }
}`);

};