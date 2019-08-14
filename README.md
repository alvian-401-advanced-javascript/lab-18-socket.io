
## Lab 18: Socket.io

### Author: Alvian Joseph

### Links and Resources
* [repo]()

### Documentation
* [jsdoc](./docs/)

### Modules

`./src/app.js`

`./arc/logger.js`

`./server.js`

`./lib/load-save-conver.js`

-----

#### `./src/app.js`
#### Methods
* `alterFile(file)`
* This function takes a filepath as it's only parameter and uses functions `loadFile`, `saveFile`, and `convertBuffer` to capitalize the letters in the file. It emits `file-save` or `file-error` messages to the Socket.io server depending upon the results of its operation.

-----

#### `./src/logger.js`
#### Exported Values and Methods
This module provides Socket.io event listeners and handling functions that log to the console.
* `handleFileSave(payload)` -> logs to the console when the server emits a `file-save` message.
* `handleFileError(payload)` -> logs to the console when the server emits a `file-error` message.


### Setup
### `.env`
* HOST 
* PORT 

### Running the app
* Run the following commands in order on separate command line instances:
  * `node ./server.js` - to start the Socket.io server
  * `node ./src/logger.js` - to start the Socket.io client logger
  * `node app.js <fileName>` - where `<fileName>` is the path to a readable file. 

### Tests
* How do you run tests?
  * `npm run test`

### UML
[uml]()