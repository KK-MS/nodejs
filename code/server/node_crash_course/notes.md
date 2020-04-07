Node crash course

Credits:
* Github: https://github.com/bradtraversy/node_crash_course
* Youtube: Node.js Crash Course, Traversy Media
  * https://www.youtube.com/watch?v=fBNz5xF-Kx4&list=LLPD13vIreIABSUXunmRCTlA&index=4&t=0s

Contains:
Video:
1. 12:15: Console usage
2. 12:46: Creating package, using "npm init" and provide package details
  * note 'entry point': index.js, can be app.js, main.js
  * packget need: stores package need for application.
  * when we say, 'npm install', it will install necessary package from
  this json.
  * it will create 'node_modules' folder where package are stored
  * note that package.json is update with 'dev' sections
3. install 'nodemon' as a dev dependency. 'npm install -D nodemon'
  * this is use so that when we change a code in server, we don't need to stop and restart server
4. 15:00: When we are releasing/deploying, remove the node_modules
folder
  * when we need it, we can use 'npm install'
