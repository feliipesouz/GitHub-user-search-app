const inputContent = document.querySelector('input');
const btn = document.querySelector('.searchbtn');
let block = document.querySelector('.authorImg');
let img = document.createElement('img');
const user = document.querySelector('.userGit');//Dúvida
const login = document.querySelector('.userNameGit');
const joined = document.querySelector('.joinedDateGit');
const repo = document.querySelector('.repoTotal');
const follower = document.querySelector('.followerTotal')
const followings = document.querySelector('.followingTotal');
const locations = document.querySelector(".locations");
const twit = document.querySelector(".twit");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");
const gitBio = document.querySelector(".githubBio");

function action() {
  const url = `https://api.github.com/users/${inputContent.value}`;
  
  async function getUrl(){
    const response = await fetch(url);
    const json = await response.json();
    const dateData = json.created_at.slice(0, json.created_at.length - 10);
    
    img.src = json.avatar_url;
    block.appendChild(img)
    console.log(json)
    
    user.innerHTML = json.name;
    login.innerHTML = `@${json.login}`;
    joined.innerHTML = `Joined ${dateData}`
    repo.innerHTML = json.public_repos;
    follower.innerHTML = json.followers;
    followings.innerHTML = json.following;

    locations.innerHTML = json.location == null ? 'Undefined' : json.location;
    twit.innerHTML = json.twitter_username;
    websites.innerHTML = json.blog;
    companies.innerHTML = json.company;
    gitBio.innerHTML = json.bio;

  };
  getUrl();
};