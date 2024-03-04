// bringing the data into the ui
class UI {
    constructor(){
      this.profile = document.getElementById('profile');
 }
 //this displays profile in ui
 showProfile(user){
    //buildiing a  the user profile wit a templte string and insert it into the profile
    this.profile.innerHTML = `
    <div class = "card card-body mb-3">
     <div class = "row">
      <div class = "col-md-3">
        <img class="img-fluid mb-2" src= "${user.avatar_url}">
        <a href = "${user.html_url}" target="_blank" class ="btn btn-primary btn-block" mb-4> View Profile</a>
      </div>
      <div class = "col-md-9">
        <span class = "badge badge-primary">Public Repos: ${user.public_repos}</span>
        <span class = "badge badge-secondary">Public Gists: ${user.gists}</span>
        <span class = "badge badge-success">Followers: ${user.followers}</span>
        <span class = "badge badge-primary">Following: ${user.following}</span>
        <br></br>
        <ul class= "list-group"
        <li class = "list-group-item">Company: ${user.company}</li>
        <li class = "list-group-item">Website/Blog: ${user.blog}</li>
        <li class = "list-group-item">Location: ${user.location}</li>
        <li class = "list-group-item">Member since: ${user.created}</li>
        </ul>
      </div>
    
     </div>
    </div>
    <h3 class = "page-heading mb-3">Latest Repos</h3>
    <div id = "repos"></div>
    `;
}
//Show user repos
showRepos(repos){   
  let output = '';
  //looping through the repos array
  repos.forEach(function(repo) {//so we can acess each repo
    output+= `
    <div class ="card card-body mb-2">
      <div class= "row">
        <div class = "col-md-6">
         <a href= "${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class = "col-md-6">  
        <span class = "badge badge-primary">Stars: ${repo.stargazes_count}</span>
        <span class = "badge badge-secondary">Watchers: ${repo.watchers_count}</span>
        <span class = "badge badge-success">Followers: ${repo.forms_count}</span>
        </div>
      </div>
    </div>
    `
  });
  //OUTPUT repositories
  document.getElementById('repos').innerHTML = output;




}
 
//this shows alert messages 
showAlert(message , className){
  //clear any remaining alert 
  this.clearAlert();
  //create a div
  const div = document.createElement('div');
  //add class
  div.className = className;
  //add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector('.searchContainer');
  //Get search box
   const search = document.querySelector('.search');
   //insert alerrt
   container.insertBefore(div, search)

//clear alert the after few seconds
setTimeout(() =>{
  this.clearAlert();
}, 3000)

}
clearAlert(){
  const currentAlert = document.querySelector('.alert ')
  if(currentAlert){
    currentAlert.remove();
  }
}



//this clears profile
  clearProfile(){
    this.profile.innerHTML = ' ';
  }
}