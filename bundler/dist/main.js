var webpack_modules ={
  "./src/message.js": (module) => {
    module.export = "Hi there David 🧑"
  }
}
function webpack_require(moduleId){
  return "Hi there David 🧑"
}

const message = "Hi there David 🧑"
console.log(messsage); 