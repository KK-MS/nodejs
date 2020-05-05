/**  * Required External Modules  */
const express = require("express");
const path = require("path");

/**  * App Variables  */
const app = express();
const port = process.env.PORT || "3000";

/**  * Routes Definitions  */
app.get("/", (req, res) => {
   res.status(200).send("WHATABYTE: Food For Devs");
});

/**  * Server Activation  */
app.listen(port, () => {
   console.log(`Listening to requests on http://localhost:${port}`);
});

/* Reference:
 * https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/
 * https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/
 */

/* Commands:
 * Run: yarn dev
 * Package: pkg .
 * Log:
total 130905
-rw-r--r-- 1 k.mayannavar 1049089        0 May  5 16:59 a
-rw-r--r-- 1 k.mayannavar 1049089 46312467 May  5 16:55 express_pkg_test-linux
-rw-r--r-- 1 k.mayannavar 1049089 44441747 May  5 16:55 express_pkg_test-macos
-rwxr-xr-x 1 k.mayannavar 1049089 43188288 May  5 16:55 express_pkg_test-win.exe*
drwxr-xr-x 1 k.mayannavar 1049089        0 May  5 16:47 node_modules/
-rw-r--r-- 1 k.mayannavar 1049089      395 May  5 16:47 package.json
drwxr-xr-x 1 k.mayannavar 1049089        0 May  5 16:58 src/
-rw-r--r-- 1 k.mayannavar 1049089    50035 May  5 16:47 yarn.lock
 */
/*
 *  Direct http package
 */
/*
 // code retained for reference
var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.write('Hi active everybody with electron in package.json.\n');
res.write('Start.script is change to nodemon, now server need not to be restarted.\n');
res.end('But we need electron to be start.script?');
});
server.listen(3000);
*/
