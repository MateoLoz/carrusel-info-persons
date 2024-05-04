const reviews = [
    {
        id: 1,
        img: "https://boardwalkrecoverycenter.com/wp-content/uploads/2022/08/istock-1185854439-3.jpg",
        name: "Jaden Baker",
        job: "student",
        description: "i'm a student of software development, i am inteligent , compromised etc etc etc. ",
    },
    {
        id: 2,
        img: "https://th.bing.com/th/id/OIP.VTkZRojyMf0SVrm-aipT8AHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
        name: "Susan Smith",
        job: "Ux designer",
        description: "i'm a profesional Ux designer , i work +3 as a front-end Ux designer in google and i do a passanties in apple ",
    },
    {
        id: 3,
        img: "https://th.bing.com/th/id/R.68aac8b1c34f265bdac1064a4250dbf0?rik=%2byfWggCugvWxag&riu=http%3a%2f%2fthoughtcatalog.com%2fwp-content%2fuploads%2f2014%2f02%2fshutterstock_160736987.jpg&ehk=EMXDVKRcXukPCfEuvwITQ32FWwMNeMXurFrJRuvK3l4%3d&risl=&pid=ImgRaw&r=0",
        name: "jhonie Mcjhonie",
        job: "QA",
        description: "i'm a profesional QA , i have strong knowledge of everething about  Businness  ",
    },
    {
        id: 4,
        img: "https://th.bing.com/th/id/OIP.XqO6cETFqVBVcTHoDrdybAHaIs?rs=1&pid=ImgDetMain",
        name: "Carla Martinez",
        job: "Back-end",
        description: "i'm a student, i worked as a python-dev intern in amazon about 2 years ",
    }

]



const img = document.getElementById('img-peopple');
const tittle = document.getElementById('person-name');
const rol = document.getElementById('person-job');
 const descp = document.getElementById('person-description');

const forw = document.getElementById('forward').addEventListener('click', forward);
const advc = document.getElementById('advance').addEventListener('click', advance);
const surp = document.getElementById('surprise').addEventListener('click', ramdom);
let currentitem = 0;

window.addEventListener('DOMContentLoaded', function(){

console.log("working!");

const item = reviews[currentitem];
img.src = item.img;
tittle.innerHTML = item.name;
rol.innerHTML = item.job;
descp.innerHTML = item.description;
document.getElementById('article').style.transition= "opacity 400ms ease";
document.getElementById('article').style.opacity = "1";
})


function forward(){
        currentitem = currentitem - 1;
    const item = reviews[currentitem];
    img.src = item.img;
    tittle.innerHTML = item.name;
    rol.innerHTML = item.job;
    descp.innerHTML = item.description; 
}

function advance(){
        currentitem = currentitem + 1;
    const item = reviews[currentitem];
    img.src = item.img;
    tittle.innerHTML = item.name;
    rol.innerHTML = item.job;
    descp.innerHTML = item.description; 
}

function ramdom(){
    currentitem = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    const item = reviews[currentitem];
    img.src = item.img;
    tittle.innerHTML = item.name;
    rol.innerHTML = item.job;
    descp.innerHTML = item.description; 
}