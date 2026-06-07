// // singleton
// //  Object.create

// //  object literals

// const mySym = Symbol("key1")

// const JsUser = {name:"MOMO" , mySym: "mykey1", age: 18, location: "Hyderabad", email: "momo@gmail.com", isLoggedIn: false, lastLoginDays: ["Monday", "SAturday"] }

// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.mySym)



// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "134abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "someoneat.com",
    fullname: {
        userfullname: {
            firstname: "momo",
            lastname:"why"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname.lastname)

const obj1 = {1: "a", 3: "b"}
const obj3 = {4: "a", 5: "b"}
const obj5 = {6: "a", 7: "b"}

// const onj4 = {obj1 , obj3}
// const obj4 = Object.assign({}, obj1, obj5)

const obj4 = {...obj1, ...obj3}
// console.log(obj3)



const users = [
      {
        id: 1,
        email: "atgamil.com" 
    },
    {
        id: 1,
        email: "atgamil.com" 
    },
    {
        id: 1,
        email: "atgamil.com" 
    },
]

users[1].email
console.log(tinderUser)
console.log(Objects.keys(tinderUser));