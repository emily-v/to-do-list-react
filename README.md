## React Simple To Do List

### Project demo animation
![to-do-app-demo](https://media.giphy.com/media/FDtZgR9yZJVMOxJTCT/giphy.gif)

### Live Demo
https://emily-v.github.io/to-do-list-react/

### Setup and run instructions in IDE:

#### Make sure you have node version 8
```sh
$ nvm install 8
$ nvm use 8
$ node -v
```
#### install the npm package:
```
$ npm install
```

###### Run application through Cloud9
```
$ npm run c9
```
###### Or
```sh
$ npm run build
```

Check that a public/bundle.js file has been created by Webpack. Read the output from the console that must be similar to this:

```sh
> workspace@1.0.0 transpile-dev /home/ubuntu/workspace
> webpack --config webpack.config.js

Hash: 64f06c46f625967b3aeb
Version: webpack 3.8.1
Time: 99ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.52 kB       0  [emitted]  main
   [0] ./src/bundle.js 51 bytes {0} [built]
```
