console.log("script running....")
document.querySelector('.cross').style.dispaly='none';
document.querySelector('.hambargar').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
});
