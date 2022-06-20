const inputContent = document.querySelector('input');
const btn = document.querySelector('.searchbtn');
let block = document.querySelector('.authorImg');
let img = document.createElement('img');
img.id = 'avatar_url';
img.src = './assets/png-githubcat.png';
block.appendChild(img);
console.log(img);

const login = document.querySelector('.userNameGit');
const joined = document.querySelector('.joinedDateGit');
// const repo = document.querySelector('.repoTotal');

function action() {
  const url = `https://api.github.com/users/${inputContent.value}`;

  async function getUrl() {
    const response = await fetch(url);
    const json = await response.json();
    const dateData = json.created_at.slice(0, json.created_at.length - 10);

    const content = document.getElementsByClassName('changeContent');
    let arrayOfContent = Array.from(content);

    console.log(arrayOfContent);
    arrayOfContent.map((item) => {
      item.innerHTML = !json[item.id] ? 'Não informado' : json[item.id];
    });

    img.src = json.avatar_url;
    block.appendChild(img);
    console.log(json);

    login.innerHTML = `@${json.login}`;
    joined.innerHTML = `Joined ${dateData}`;
  }
  getUrl();
}

const toggleTheme = () => {
  let colorTheme = document.querySelector('html').classList.toggle('dark-mode');

  if (colorTheme) {
    let nameButton = document.querySelector('#button');
    nameButton.textContent = 'DARK';
    let imgButton = document.createElement('img');
    imgButton.src = './assets/icon-moon.svg';
    imgButton.alt = 'sun image';
    nameButton.appendChild(imgButton);
  } else {
    let nameButton = document.querySelector('#button');
    nameButton.textContent = 'LIGHT';
    let imgButton = document.createElement('img');
    imgButton.src = './assets/icon-sun.svg';
    imgButton.alt = 'moon image';
    nameButton.appendChild(imgButton);
  }
};
