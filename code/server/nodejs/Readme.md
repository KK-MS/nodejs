# Node.js

## Installation
* Windows 10:
  * https://nodejs.org/en/download/
  * https://nodejs.org/en/download/package-manager/
  * https://phoenixnap.com/kb/install-node-js-npm-on-windows
  * https://www.shaileshjha.com/how-to-install-nodejs-and-npm-on-windows-10/
* Github: https://github.com/nodejs/node
``
## Tutorial
* Node.js documentation
  * v12.16.2: https://nodejs.org/dist/latest-v12.x/docs/api/

* Tutorialspoint:
  * https://www.tutorialspoint.com/nodejs/index.htm
  * https://www.tutorialspoint.com/nodejs/nodejs_npm.htm
* w3schools:
  * https://www.w3schools.com/nodejs/default.asp
  * Usage of npm: https://www.w3schools.com/nodejs/nodejs_npm.asp
* Youtube:
  * Node.js Crash Course: https://www.youtube.com/watch?v=fBNz5xF-Kx4&list=LLPD13vIreIABSUXunmRCTlA&index=4&t=0s
    * Github: https://github.com/bradtraversy/node_crash_course.git
* call a Python function from Node.js 
  * https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js
  * https://medium.com/swlh/run-python-script-from-node-js-and-send-data-to-browser-15677fcf199f
  ```console
  spawn('python', ['script1.py']);
  ```
  It is the same command if you wanted to write it in a shell to run the script1.py
  ```console
  python 'script1.py'
  ```
  more: check how python return use print to console and captured in node.js using stdout apis.
* Express JS
  * https://www.youtube.com/watch?v=L72fhGm1tfE
## Verify the installation of nodejs and npm

```console
$ node -v
v12.16.1
```
```console
$ npm -v
6.13.4
```

## Examples
*  Simple knowledgebase app with Node.js, Express and MongoDB
  * https://github.com/bradtraversy/nodekb
* Building a simple REST API with NodeJS and Express.
  * https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9
* shopping cart 
  * https://githubg.com/gtsopour/nodejs-shopping-cart

### Console
```console
C:\Users\k.mayannavar>node
Welcome to Node.js v12.16.1.
Type ".help" for more information.
> 1 + 1
2
> const i = 10
undefined
> i
10
> console.log(i)
10
undefined
> function test(){return "test" + 10}
undefined
> test()
'test10'
> exit
Uncaught ReferenceError: exit is not defined
>
(To exit, press ^C again or ^D or type .exit)
>
```

### VS Code
* https://code.visualstudio.com/docs/nodejs/nodejs-debugging

