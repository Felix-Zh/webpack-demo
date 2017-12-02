import './index.css';


function createTitle(content) {
  const title = document.createElement('h1');
  
  title.innerHTML = content;

  return title;
}

document.body.appendChild(createTitle('01 Load CSS'));
