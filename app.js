const navlink=document.querySelectorAll('.navigate li');

const about=document.querySelector('#about');
const hobbies=document.querySelector('#hobbie');
const skills=document.querySelector('#skills');

const arr=[about,hobbies,skills];

window.addEventListener('scroll',()=>{
    let current='';
    arr.forEach(section=>{
        const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(scrollY >=sectionTop- 500){
            current=section.getAttribute('id');
        }
    });
    navlink.forEach(li=>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    });
});