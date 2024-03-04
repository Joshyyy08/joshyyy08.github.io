class Github{
  constructor (){
    //register github key
    // to get client id and client secret
    //i want to get a certain numbe rof repositoriesand not all the users repos
    this.repos_count = 10;
    //sorting the repositories to get the latest ones first
    this.repos_sort = 'Created: asc'
  }
  //i am making two request in this fuction, one is tget the user id and the other to get the user repository
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

    //awaits promise response
    const profile = await profileResponse.json();
    const repos = await reposResponse.json(); 

    //object to be returned 
    return {
      profile,
      repos
    }
  }
}


