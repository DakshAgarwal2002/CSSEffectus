console.log("hi");
let first_btn = document.getElementById("first-btn");
first_btn.addEventListener('click',buttonclickhandler1)
let second_btn = document.getElementById("second-btn");
second_btn.addEventListener('click',buttonclickhandler2)
function buttonclickhandler1()
{
    const xhr1=new XMLHttpRequest();
    xhr1.open('GET','public/textfiles/ShiningText.txt',false);
    xhr1.onload=function(){
        document.getElementById('Container_Class').innerHTML=this.responseText
        // console.log();
    }
    // const xhr2=new XMLHttpRequest();
    // xhr2.open('GET','css/ShiningText.css',false);
    // xhr2.onload=function(){
    //     document.getElementById('textareaCSS1').innerHTML=this.responseText
    //     // console.log();
    // }
    xhr1.send();
    // xhr2.send();
    const RunElement1=()=>
        {
            let textareaHTML1=document.getElementById("textareaHTML1").value;
            let textareaCSS1=document.getElementById("textareaCSS1").value;
            document.getElementById('styling1').innerHTML = textareaCSS1;
            document.getElementById('output-1').innerHTML = textareaHTML1;
        }
        // ButtonElement1.addEventListener("click",RunElement1);
        RunElement1();
}

function buttonclickhandler2()
{
    const xhr1=new XMLHttpRequest();
    xhr1.open('GET','CreativeMenu.txt',false);
    xhr1.onload=function(){
        document.getElementById('Container_Class').innerHTML=this.responseText
    }
    xhr1.send();
    const RunElement1=()=>
        {
            let textareaHTML2=document.getElementById("textareaHTML2").value;
            let textareaCSS2=document.getElementById("textareaCSS2").value;
            document.getElementById('styling2').innerHTML = textareaCSS2;
            document.getElementById('output2').innerHTML = textareaHTML2;
        }
        // ButtonElement1.addEventListener("click",RunElement1);
        RunElement1();
}