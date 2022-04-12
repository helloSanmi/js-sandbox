//user variable
var user = {
    username: "ajayi",
    password: "usersecret",
    status: "Available"
  };

// prompt for user credentials
//   let userInput = prompt("Enter Username: ")
//   let passInput = prompt("Enter Password: ")
//   let statusUpdate = prompt("What is your status today: ")

//database array
var database = [
    {
        username: "ajayi",
        password: "usersecret",
        status: "Available"
    },
    {
        username: "femi",
        password: "passcode",
        status: "Online"
    },
    {
        username: "dauda",
        password: "secret1",
        status: "Online"
    },
    {
        username: "tunde",
        password: "fem123",
        status: "Offline"
    },
    {
        username: "dupe",
        password: "password123",
        status: "Available"
    },
    // {
    //     username: userInput,
    //     password: passInput,
    //     status: statusUpdate

    // }
    
  ];
  
//check the username and password
  function signIn (username, password) {
      let result;
    for (var i in database) {
        if (username === database[i].username 
                && password === database[i].password){
            result = "Username: "+ database[i].username 
                        + "\n" + 
                    "Status: " + database[i].status;
            break;
        }
        else {
            result = "Sorry, wrong username and password";
        }
    }
    return result;
  }
 
//test function
console.log(signIn("dupe", "password123"));
  
