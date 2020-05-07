/**  * Required External Modules  */
const express = require("express");
const path = require("path");

/**  * App Variables  */
const app = express();
const port = process.env.PORT || "3000";

/**  * Routes Definitions  */
app.get("/", (req, res) => {
  //   res.status(200).send("WHATABYTE: Food For Devs");
  res.sendFile(path.join(__dirname +'/views/index.html'));
});

/**  * Server Activation  */
app.listen(port, () => {
   console.log(`Listening to requests on http://localhost:${port}`);
});

/* Reference:
 * https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/
 * https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/
 *
 * Express + html
 * https://codeforgeek.com/render-html-file-expressjs/
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

 * Quick test using curl on command line
 *  curl http://localhost:3000/
 *
 *
 * Front end view
 * https://www.creative-tim.com/product/material-dashboard-react-nodejs
 *  ar------k.K-@C->
 *
 * https://github.com/creativetimofficial/material-dashboard-react-nodejs
 * https://medium.com/udevoffice/how-to-setup-a-development-environment-using-node-js-and-docker-material-dashboard-react-d4a16220c759
 *
 * >> Samples: Free and paid
 * https://themeselection.com/nodejs-dashboard-admin-templates/
 *
 * Tutorial:
 * https://frontendmasters.com/books/
 * >> https://frontendmasters.com/books/front-end-handbook/2019/  **
 * https://speckyboy.com/free-video-series-design-photoshop/
 * https://speckyboy.com/videos-that-will-help-to-improve-your-design-skills/
 * https://blog.logrocket.com/web-analytics-with-node-js/
 * * has socket.io
 *
 * CSS:
 * https://webdesign.tutsplus.com/courses/css-animation-in-the-real-world/lessons/understanding-css-animation
 *
 * E-book
 * https://frontendmasters.com/books/front-end-handbook/2018/learning/animation.html
 * https://frontendmasters.com/books/front-end-handbook/2019/
 * https://frontendmasters.com/books/front-end-handbook/2018/learning/react.html
 * https://frontendmasters.com/books/front-end-handbook/2018/learning/node.html
 * Reactjs: https://www.reactenlightenment.com/
 * Reactjs: https://www.reactenlightenment.com/what-is-react.html
 * https://thinkmobiles.com/blog/node-js-app-examples/
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
