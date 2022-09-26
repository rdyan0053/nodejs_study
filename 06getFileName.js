const path = require('path')

var fpath = '/a/b/c/index.html'

var fullname = path.basename(fpath)
console.log(fullname);  // index.html

var filename = path.basename(fpath, 'html')
console.log(filename);  // index.

var extname = path.extname(fpath)
console.log(extname);   //.html
