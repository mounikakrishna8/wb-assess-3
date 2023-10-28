import axios from 'axios';

document.getElementById('get-random-fossil').addEventListener('click', getRandomFossil);

async function getRandomFossil(){
    const random = await axios.get('/random-fossil.json');
    let elem = document.createElement("img");
    elem.setAttribute("src", random.data.img);
    document.getElementById('random-fossil-image').appendChild(elem);

    let p = document.getElementById('random-fossil-name');
    let text= document.createTextNode(random.data.name);
    p.appendChild(text);
 
}
