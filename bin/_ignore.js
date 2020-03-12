const fs = require('fs');

module.exports = function (url1, url2) {

    let ignoreFile = `.git
.DS_Store
.project
node_modules`;

    fs.writeFileSync(url1, ignoreFile+`
test
demo`);
    fs.writeFileSync(url2, ignoreFile);

};