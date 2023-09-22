const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        '📖MSc. Computer Science Ongoing',
        '🎓BSc. Information and Communication Eng.',
        '🎓MSc. Food Technology',
        '🎓BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        ['✅Web Development'],
        ['✅Data Analysis'],
        ['✅Data Visualization'],
        ['✅Programming'],
        ['✅DataBases'],
        ['✅Developing API'],
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }
  

let container = document.createElement('div');
container.style.textAlign = 'center';
document.body.style.fontFamily = 'Montserrat';

container.style.justifyContent = 'center';
let header = document.createElement('h1');
let span = document.createElement('span');
let subHeader = document.createElement('h2');
let dateTime = document.createElement('h3');
let secondContainer;
let details;
let summary;
let paragraph;
let secondParagraph;
let unorderedList;
let secondLi;
let thirdLi;
let fourthLi;
let fifthLi;
let sixthLi;
let seventhLi;
let eigthLi;
let newPara;



header.textContent = asabenehChallenges2020.challengeTitle;
span.textContent = '2023';
span.style.fontSize = '5rem';
span.style.marginLeft = '.5rem';
span.style.fontWeight = 'bolder';
const hexaColors = () =>{
  let str = '0123456789abcdef';
  let hex = '#';
  let index;
  for(let i = 0; i < 6; i++){
     index = Math.floor(Math.random() * str.length);
     hex += str[index];
  }
  return hex;
}
setInterval(()=>{
  span.style.color = hexaColors();
},1000)



subHeader.textContent = asabenehChallenges2020.challengeSubtitle;

subHeader.style.fontWeight = 'lighter';
subHeader.style.textDecorationLine = 'underline';


const dateAndTIme = () =>{
  let now = new Date();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  let month = now.getMonth();
  let monthName = months[month];
  let day = now.getDate();
  let year = now.getFullYear();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let modifiedHour = hour < 10 ? '0' + hour : hour;
  let modifiedMinute = minute < 10 ? '0' + minute : minute;
  let modifiedSecond = second < 10 ? '0' + second : second;

  return `${monthName} ${day}, ${year} ${modifiedHour}:${modifiedMinute}:${modifiedSecond}`
}
setInterval(()=>{
  dateTime.textContent = dateAndTIme();
},1000);
dateTime.style.textAlign = 'center';
dateTime.style.fontSize = '1.1rem';
dateTime.style.fontWeight = 'lighter';
dateTime.style.width = '17rem';
dateTime.style.paddingTop = '.9rem';
dateTime.style.paddingBottom = '.9rem';
dateTime.style.margin = 'auto auto 1rem auto';
setInterval(()=>{
  dateTime.style.backgroundColor = hexaColors();
},1000)




container.appendChild(header);
header.appendChild(span);
container.appendChild(subHeader);
document.body.appendChild(container);
container.appendChild(dateTime);


for(let i = 0; i < 8 ; i++){
  secondContainer = document.createElement('div');
  secondContainer.className = 'title';
  secondContainer.style.display = 'flex';
  secondContainer.style.width = '60%';
  secondContainer.style.maxWidth = '700px';
  secondContainer.style.margin = 'auto';
  secondContainer.style.padding = '1rem';
  paragraph = document.createElement('p');
  paragraph.style.margin = 'auto auto auto 0';
  paragraph.className = 'para';
  paragraph.style.padding = '.5rem';
  details = document.createElement('details');
  details.style.padding = '.5rem';
  details.style.margin = 'auto 0 auto 0';

  summary = document.createElement('summary');
  summary.className = 'sum';
  unorderedList = document.createElement('ul');
  unorderedList.style.textAlign = 'left';
  secondParagraph = document.createElement('li');
  secondParagraph.className = 'first';
  secondParagraph.style.listStyleType = 'none';
  secondLi = document.createElement('li')
  secondLi.className = 'second';
  secondLi.style.listStyleType = 'none';
  thirdLi = document.createElement('li')
  thirdLi.className = 'third';
  thirdLi.style.listStyleType = 'none';
  fourthLi = document.createElement('li')
  fourthLi.className = 'fourth';
  fourthLi.style.listStyleType = 'none';
  fifthLi = document.createElement('li')
  fifthLi.className = 'fifth';
  fifthLi.style.listStyleType = 'none';
  sixthLi = document.createElement('li')
  sixthLi.className = 'sixth';
  sixthLi.style.listStyleType = 'none';
  seventhLi = document.createElement('li')
  seventhLi.className = 'seventh';
  seventhLi.style.listStyleType = 'none';
  eigthLi = document.createElement('li')
  eigthLi.className = 'eigth';
  eigthLi.style.listStyleType = 'none';
  newPara = document.createElement('p');
  newPara.className = 'newPara'
  newPara.style.margin = 'auto 0 auto auto';
  newPara.style.padding = '.5rem';

  container.appendChild(secondContainer);
  secondContainer.appendChild(paragraph);
  secondContainer.appendChild(details);
  details.appendChild(summary);
  details.appendChild(unorderedList);
  unorderedList.appendChild(secondParagraph);
  unorderedList.appendChild(secondLi);
  unorderedList.appendChild(thirdLi);
  unorderedList.appendChild(fourthLi);
  unorderedList.appendChild(fifthLi);
  unorderedList.appendChild(sixthLi);
  unorderedList.appendChild(seventhLi);
  unorderedList.appendChild(eigthLi);
  secondContainer.appendChild(newPara);
}
let info = document.createElement('div');
container.appendChild(info);

let infoName = document.createElement('h1');
info.appendChild(infoName);
infoName.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
infoName.style.fontSize = '1.8rem';
infoName.style.margin = '2rem auto 1rem auto'

let socials = document.createElement('div');
container.appendChild(socials);

let linkOne = document.createElement('a');
let linkTwo = document.createElement('a');
let linkThree = document.createElement('a');
linkOne.href = asabenehChallenges2020.author.socialLinks[0].url;
linkOne.target = 'blank';
linkTwo.href = asabenehChallenges2020.author.socialLinks[1].url;
linkTwo.target = 'blank';
linkThree.href = asabenehChallenges2020.author.socialLinks[2].url;
linkThree.target = 'blank';


socials.appendChild(linkOne);
socials.appendChild(linkTwo);
socials.appendChild(linkThree);

let bio = document.createElement('p');
bio.style.width = '61%';
bio.style.margin = '2.5rem auto 2.5rem auto';
bio.textContent = asabenehChallenges2020.author.bio;
bio.style.fontWeight = '100'
container.appendChild(bio);



const LinkedIn = document.createElement('i');
LinkedIn.classList.add('fab', 'fa-linkedin');
LinkedIn.style.fontSize = '2.5rem';
LinkedIn.style.marginLeft = '15px';


const twitter = document.createElement('i');
twitter.classList.add('fab', 'fa-twitter-square');
twitter.style.fontSize = '2.5rem';
twitter.style.marginLeft = '15px';



const gitHub = document.createElement('i');
gitHub.classList.add('fab', 'fa-github-square');
gitHub.style.fontSize = '2.5rem';
gitHub.style.marginLeft = '15px';




linkOne.appendChild(LinkedIn);
linkTwo.appendChild(twitter);
linkThree.appendChild(gitHub);




let tsqTwo = document.createElement('div');
tsqTwo.style.display = 'flex';
tsqTwo.style.justifyContent = 'center';



container.appendChild(tsqTwo);
let unordered;
let lists;
for(let i = 0; i < 3; i++){
  unordered = document.createElement('ul');
  unordered.style.textAlign = 'left';
  unordered.style.margin = '1rem'
  tsqTwo.appendChild(unordered);
  
  for(let j = 0; j < 8; j++){
  lists = document.createElement('li');
  lists.style.listStyleType = 'none';
  lists.className = 'bios';
  lists.style.margin = 'auto auto .5rem auto';
  unordered.appendChild(lists);
}
}

let bios = document.querySelectorAll('.bios');
bios[0].textContent = 'Titles';
bios[0].style.fontWeight = 'bold';
bios[0].style.fontSize = '1.1rem';
bios[0].style.margin = 'auto auto .5rem auto';
bios[1].textContent = asabenehChallenges2020.author.titles[0].join('');
bios[2].textContent = asabenehChallenges2020.author.titles[1].join('');
bios[3].textContent = asabenehChallenges2020.author.titles[2].join('');
bios[4].textContent = asabenehChallenges2020.author.titles[3].join('');
bios[5].textContent = asabenehChallenges2020.author.titles[4].join('');


bios[8].textContent = 'Skills';
bios[8].style.fontWeight = 'bold';
bios[8].style.fontSize = '1.1rem';
bios[8].style.margin = 'auto auto .5rem auto';
bios[9].textContent = asabenehChallenges2020.author.skills[0];
bios[10].textContent = asabenehChallenges2020.author.skills[1];
bios[11].textContent = asabenehChallenges2020.author.skills[2];
bios[12].textContent = asabenehChallenges2020.author.skills[3];
bios[13].textContent = asabenehChallenges2020.author.skills[4];
bios[14].textContent = asabenehChallenges2020.author.skills[5];

bios[16].textContent = 'Qualifications';
bios[16].style.fontWeight = 'bold';
bios[16].style.fontSize = '1.1rem';
bios[16].style.margin = 'auto auto .5rem auto';
bios[17].textContent = asabenehChallenges2020.author.qualifications[0];
bios[18].textContent = asabenehChallenges2020.author.qualifications[1];
bios[19].textContent = asabenehChallenges2020.author.qualifications[2];
bios[20].textContent = asabenehChallenges2020.author.qualifications[3];

let lastDiv = document.createElement('div');
let lasth3 = document.createElement('h3');
lasth3.textContent = 'Keywords';
lasth3.style.textAlign = 'left';
lasth3.style.margin = 'auto auto 0 auto';
lastDiv.appendChild(lasth3);
lastDiv.style.width = '63%';
lastDiv.style.margin = 'auto';
container.appendChild(lastDiv);
let keyword;

asabenehChallenges2020.keywords.forEach((words) =>{
  keyword = document.createElement('h3');
  keyword.style.fontSize = '.7rem';
  keyword.style.fontFamily = "'Montserrat', sans-serif";
  keyword.style.fontStyle = "italic";
  keyword.style.padding = '.5rem';
  keyword.textContent = '#' + words;
  keyword.style.display = 'inline-block';
  keyword.style.margin = '.5rem .8rem auto auto'
  keyword.style.backgroundColor = hexaColors();
  keyword.style.borderRadius = '1rem';
  lastDiv.appendChild(keyword);
})







let lastPara = document.querySelectorAll('.newPara');
lastPara[0].textContent = asabenehChallenges2020.challenges[0].status;
lastPara[1].textContent = asabenehChallenges2020.challenges[1].status;
lastPara[2].textContent = asabenehChallenges2020.challenges[2].status;
lastPara[3].textContent = asabenehChallenges2020.challenges[3].status;
lastPara[4].textContent = asabenehChallenges2020.challenges[4].status;
lastPara[5].textContent = asabenehChallenges2020.challenges[5].status;
lastPara[6].textContent = asabenehChallenges2020.challenges[6].status;
lastPara[7].textContent = asabenehChallenges2020.challenges[7].status;

let contain = document.querySelectorAll('.title');
contain[0].style.backgroundColor = '#50C878';
contain[0].style.marginTop = '.1rem';
contain[1].style.backgroundColor = 'yellow';
contain[1].style.marginTop = '.1rem';
contain[2].style.backgroundColor = '#FF5733';
contain[2].style.marginTop = '.1rem';
contain[3].style.backgroundColor = '#FF5733';
contain[3].style.marginTop = '.1rem';
contain[4].style.backgroundColor = '#FF5733';
contain[4].style.marginTop = '.1rem';
contain[5].style.backgroundColor = '#FF5733';
contain[5].style.marginTop = '.1rem';
contain[6].style.backgroundColor = '#FF5733';
contain[6].style.marginTop = '.1rem';
contain[7].style.backgroundColor = '#FF5733';
contain[7].style.marginTop = '.1rem';

let para = document.querySelectorAll('.para');
para[0].textContent = asabenehChallenges2020.challenges[0].name;
para[0].style.textDecorationLine = 'underline';
para[1].textContent = asabenehChallenges2020.challenges[1].name;
para[1].style.textDecorationLine = 'underline';
para[2].textContent = asabenehChallenges2020.challenges[2].name;
para[3].textContent = asabenehChallenges2020.challenges[3].name;
para[4].textContent = asabenehChallenges2020.challenges[4].name;
para[5].textContent = asabenehChallenges2020.challenges[5].name;
para[6].textContent = asabenehChallenges2020.challenges[6].name;
para[7].textContent = asabenehChallenges2020.challenges[7].name;

let sum = document.querySelectorAll('.sum');
sum[0].textContent = 'Python';
sum[1].textContent = 'JavaScript';
sum[2].textContent = 'HTML & CSS';
sum[3].textContent = 'React';
sum[4].textContent = 'ReactNative';
sum[5].textContent = 'FullStack';
sum[6].textContent = 'Data Analysis';
sum[7].textContent = 'Machine Learning';

let first = document.querySelectorAll('.first');
first[0].textContent = asabenehChallenges2020.challenges[0].topics[0];
first[1].textContent = asabenehChallenges2020.challenges[1].topics[0];
first[2].textContent = asabenehChallenges2020.challenges[2].topics[0];
first[3].textContent = asabenehChallenges2020.challenges[3].topics[0];
first[4].textContent = asabenehChallenges2020.challenges[4].topics[0];
first[5].textContent = asabenehChallenges2020.challenges[5].topics[0];
first[6].textContent = asabenehChallenges2020.challenges[6].topics[0];
first[7].textContent = asabenehChallenges2020.challenges[7].topics[0];


let second = document.querySelectorAll('.second');
second[0].textContent = asabenehChallenges2020.challenges[0].topics[1];
second[1].textContent = asabenehChallenges2020.challenges[1].topics[1];
second[2].textContent = asabenehChallenges2020.challenges[2].topics[1];
second[4].textContent = asabenehChallenges2020.challenges[4].topics[1];
second[3].textContent = asabenehChallenges2020.challenges[3].topics[1];
second[5].textContent = asabenehChallenges2020.challenges[5].topics[1];
second[6].textContent = asabenehChallenges2020.challenges[6].topics[1];
second[7].textContent = asabenehChallenges2020.challenges[7].topics[1];


let third = document.querySelectorAll('.third');
third[0].textContent = asabenehChallenges2020.challenges[0].topics[2];
third[1].textContent = asabenehChallenges2020.challenges[1].topics[2];
third[2].textContent = asabenehChallenges2020.challenges[2].topics[2];
third[3].textContent = asabenehChallenges2020.challenges[3].topics[2];
third[5].textContent = asabenehChallenges2020.challenges[5].topics[2];
third[6].textContent = asabenehChallenges2020.challenges[6].topics[2];
third[7].textContent = asabenehChallenges2020.challenges[7].topics[2];

let fourth = document.querySelectorAll('.fourth');
fourth[0].textContent = asabenehChallenges2020.challenges[0].topics[3];
fourth[1].textContent = asabenehChallenges2020.challenges[1].topics[3];
fourth[2].textContent = asabenehChallenges2020.challenges[2].topics[3];
fourth[3].textContent = asabenehChallenges2020.challenges[3].topics[3];
fourth[5].textContent = asabenehChallenges2020.challenges[5].topics[3];
fourth[6].textContent = asabenehChallenges2020.challenges[6].topics[3];
fourth[7].textContent = asabenehChallenges2020.challenges[7].topics[3];

let fifth = document.querySelectorAll('.fifth');
fifth[0].textContent = asabenehChallenges2020.challenges[0].topics[4];
fifth[1].textContent = asabenehChallenges2020.challenges[1].topics[4];
fifth[3].textContent = asabenehChallenges2020.challenges[3].topics[4];
fifth[5].textContent = asabenehChallenges2020.challenges[5].topics[4];
fifth[6].textContent = asabenehChallenges2020.challenges[6].topics[4];
fifth[7].textContent = asabenehChallenges2020.challenges[7].topics[4];

let sixth = document.querySelectorAll('.sixth');
sixth[0].textContent = asabenehChallenges2020.challenges[0].topics[5];
sixth[3].textContent = asabenehChallenges2020.challenges[3].topics[5];
sixth[7].textContent = asabenehChallenges2020.challenges[7].topics[5];

let seventh = document.querySelectorAll('.seventh');
seventh[0].textContent = asabenehChallenges2020.challenges[0].topics[6];
seventh[7].textContent = asabenehChallenges2020.challenges[7].topics[6];

let eigth = document.querySelectorAll('.eigth');
eigth[7].textContent = asabenehChallenges2020.challenges[7].topics[7];





