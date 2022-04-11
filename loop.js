var user = {
    username: "ajayi",
    password: "usersecret",
    status: "Available"
  };

// prompt for input
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
  
//sign-in function
  function signIn (username, password) {
    for (var i=0; i<database.length; i++) {
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
 
//call function and display
console.log(signIn("dupe", "password123"));
  
