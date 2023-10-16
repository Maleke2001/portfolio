window.onscroll =()=>{
    slideUp();
}

function slideUp(){
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        const nav = document.getElementById("nav").className ='sticky_button'
      }
}
 
function blinkEye(){
    const iconBox = document.getElementsByClassName('project_icon_box');
    const eyeLid = document.getElementById('eye-lid');
    const gitIconOne = document.getElementById('git_icon_one')
    
    if(eyeLid.clientHeight == 0 ){
        eyeLid.style.height ='15px' 
        gitIconOne.style.marginBottom = '5px'    
    }else{
        eyeLid.style.height = 0;
        gitIconOne.style.marginBottom = '0' 
    }
}
setInterval(blinkEye,1000)


