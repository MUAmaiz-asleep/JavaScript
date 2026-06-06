// singleton
//  Object.create

//  object literals

const mySym = Symbol("key1")

const JsUser = {name:"MOMO" , mySym: "mykey1", age: 18, location: "Hyderabad", email: "momo@gmail.com", isLoggedIn: false, lastLoginDays: ["Monday", "SAturday"] }

console.log(JsUser)
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.mySym)

JsUser.email = "momo@gmail.com"
Object.freeze(JsUser)
JsUser.email = "momo@gmail.com"
console.log(JsUser[mySym])