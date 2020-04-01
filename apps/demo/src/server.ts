import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';
// you can pass the parameter in the command line. e.g. node static_server.js 3000
const port = process.argv[2] || '8080';

// maps file extention to MIME types
// full list can be found here: https://www.freeformatter.com/mime-types-list.html
const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
  '.doc': 'application/msword',
  '.eot': 'application/vnd.ms-fontobject',
  '.ttf': 'application/x-font-ttf',
};

http.createServer(function (req, res) {
  console.log(`${req.method} ${req.url}`);

  // parse URL
  const parsedUrl = url.parse(req.url);
  const filesRoot = '/dist';

  // extract URL path
  // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
  // e.g curl --path-as-is http://localhost:9000/../fileInDanger.txt
  // by limiting the path to current directory only
  let urlpathname = parsedUrl.pathname || '/index.html';
  let pathname = process.cwd() + filesRoot + urlpathname;
  let sanitizePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');

  fs.exists(sanitizePath, function (exist) {
    if(!exist) {
      // if the file is not found, return 404
      res.statusCode = 404;
      res.end(`File ${parsedUrl.pathname} not found!`);
      return;
    }

    // if is a directory, then look for index.html
    if (fs.statSync(sanitizePath).isDirectory()) {
      sanitizePath += '/index.html';
    }

    // read file from file system
    console.log('pathname', sanitizePath);
    fs.readFile(sanitizePath, function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // based on the URL path, extract the file extention. e.g. .js, .doc, ...
        const ext = path.parse(sanitizePath).ext;
        // if the file is found, set Content-type and send data
        res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
        res.end(data);
      }
    });
  });


}).listen(parseInt(port));

console.log(`Server listening on port ${port}`);
