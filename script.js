let string="";
let button=document.querySelectorAll(".btn");
button.forEach((b)=>{
b.addEventListener("click",(e)=>{
    if(e.target.innerHTML=="="){
        string=eval(string);
        document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="AC"){
        string="";
        document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="C"){
        string=string.slice(0,-1);
         document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="%"){
        if(string){
            string = String(eval(string) / 100);
            document.querySelector("input").value = string;
        }
    }
    else if(e.target.innerHTML=="X"){
            string=string+"*";
              document.querySelector("input").value = string;
    }
    else{
console.log(e.target);
string=string + e.target.innerHTML;
document.querySelector("input").value=string;
    }
});
});
