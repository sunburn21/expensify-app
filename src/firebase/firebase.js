import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBH7kiOkUQkhRh1GAKCfSR2461aOTqJnk0",
  authDomain: "expensify-730ec.firebaseapp.com",
  databaseURL: "https://expensify-730ec.firebaseio.com",
  projectId: "expensify-730ec",
  storageBucket: "expensify-730ec.appspot.com",
  messagingSenderId: "604220916041"
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.val(), snapshot.key);
// });
// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(expense => {
//     expenses.push({
//       id: expense.key,
//       ...expense.val()
//     });
//   });
//   console.log(expenses);
// });
// database.ref("expenses").push({
//   description: "Rent",
//   amount: "2500",
//   note: "",
//   createdAt: 10000
// });
// database.ref("expenses").push({
//   description: "Pizza",
//   amount: "2900",
//   note: "",
//   createdAt: 20000
// });
// database.ref("expenses").push({
//   description: "Rent",
//   amount: "2100",
//   note: "",
//   createdAt: 120000
// });
// database
//   .ref()
//   .set({
//     name: "sunny",
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//       company: "Google",
//       title: "Web developer"
//     },
//     age: 21,
//     location: {
//       city: "faridabad",
//       pin: 121004
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("something went wrong");
//   });
// database.ref().on("value", snapshot => {
//   const { name, job } = snapshot.val();
//   console.log(`${name} is a ${job.title} at ${job.company}`);
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("removes isSingle");
//   })
//   .catch(() => {
//     console.log("cant remove isSingle");
//   });
// console.log("End of file");
// database.ref().update({
//   stressLevel: 9,
//   "job/company": "ISRO",
//   "location/city": "Chennai"
// });
