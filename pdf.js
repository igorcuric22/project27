var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('html-pdf.html', 'utf8');

var options = { format: 'Letter' };

console.log(html);

pdf.create(html, {format: 'Letter', orientation: 'landscape'}).toStream(function(err, stream){
    stream.pipe(fs.createWriteStream('certificate.pdf'));
   });