let but=document.getElementsByTagName('button')[0];
let Name=document.getElementsByTagName('h5')[0];
let Image=document.getElementsByTagName('img')[0];
let Pos = document.getElementsByClassName("position")[0];
let Location = document.getElementsByClassName("locationText")[0];

function getRandomColor() {
//   let colors='123456789abcdef';
//   let BackColor='#';
//   for(let i=0;i<6;i++){
//     BackColor+=colors[Math.floor(Math.random()*16)];
//   }
//   return BackColor;
    let color='#'+((Math.random()*0xffffff)<<0).toString(16).padStart(6,'0');
    return color;
}

let getUser = ()=>{
    fetch("https://random-data-api.com/api/v2/users?response_type=json").then((res)=>{
        let thedata=res.json();
        return thedata;
    }).then((data)=>{
        console.log(data);
        // Name.textContent="";
        // Pos.textContent="";
        Name.textContent=`${data.first_name} ${data.last_name}`;
        Pos.textContent=`${data.employment.title}`;
        Location.textContent=`${data.address.city}`
        Image.src=data.avatar;
        document.documentElement.style.setProperty(
          "--BackgroundColor",
          getRandomColor()
        );
    })
}
window.addEventListener('load',getUser);
but.addEventListener('click',getUser)