const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["Violet","purple","Blue","Green","Yellow","Orange","red","skyblue","indigo","Pink"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});
