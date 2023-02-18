let myLinks=document.querySelector(".links");

console.log(myLinks);

let myUl=document.querySelector(".links ul");

myLinks.addEventListener("click",function(){

    if(myUl.hasAttribute("style"))
    {
        myUl.removeAttribute("style");
    }
    else{
        myUl.setAttribute("style","display: block");
    }
})

document.body.addEventListener("click",function(e){

    // console.log(e.target.className!="icon");
    if(e.target.className!="icon"){
        if(myUl.hasAttribute("style"))
        {
            myUl.removeAttribute("style");
        }
    }
})
