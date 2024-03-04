//instantiate github class and ui
const github = new Github;
const ui = new UI; 
//SEARCH INPUT
const searchUser = document.getElementById('searchUser')

//search input event listener
searchUser.addEventListener('keyup', (e) =>{// i used arrow functions here(es6 method)

  //i have to get the text that is being typed in the input
  const userText = e.target.value;

  //setting a consition if input text is not equal to nothing 
  if(userText !== ''){
    //make htttp call on the get user function i created in the githu script 
    github.getUser(userText)
    .then((data) =>{ 
      if(data.profile.message === 'Not Found') {
        //Show Alert 
        ui.showAlert('User not found', 'alert alert-danger');  
      }else{
        //show profile
        //part of the data object that will be returned     
        ui.showProfile(data.profile);//data.profile is what we are gettin back from te github as aresponse
        ui.showRepos(data.repos);
      }
    })
  }else{ 
    //clear profile  
    ui.clearProfile();
  }

});


console.log("asynchronous.");
setTimeout(() =>
console.log("asynchronous javascript!"), 3000);
console.log("asynchronous again!");


