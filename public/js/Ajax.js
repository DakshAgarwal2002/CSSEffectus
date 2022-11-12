console.log("hi");
let default_btn = document.getElementById("default-btn");
default_btn.addEventListener('click',defaultbuttonclickhandler)
let first_btn = document.getElementById("first-btn");
first_btn.addEventListener('click',buttonclickhandler1)
let second_btn = document.getElementById("second-btn");
second_btn.addEventListener('click',buttonclickhandler2)
let third_btn = document.getElementById("third-btn");
third_btn.addEventListener('click',buttonclickhandler3)
let fourth_btn = document.getElementById("fourth-btn");
fourth_btn.addEventListener('click',buttonclickhandler4)
let fifth_btn = document.getElementById("fifth-btn");
fifth_btn.addEventListener('click',buttonclickhandler5)
let sixth_btn = document.getElementById("sixth-btn");
sixth_btn.addEventListener('click',buttonclickhandler6)

function defaultbuttonclickhandler()
{
    const defaultxhr=new XMLHttpRequest();
    defaultxhr.open('GET','public/textfiles/AllEffects.txt',false);
    defaultxhr.onload=function(){
        document.getElementById('Container_Class').innerHTML=this.responseText
    }
    defaultxhr.send();
    RunElement1();
    RunElement2();
    RunElement3();
    RunElement4();
    RunElement5();
    RunElement6();
    RunElement7();
    RunElement8();
    RunElement9();
    RunElement10();
    RunElement11();
    RunElement12();
    RunElement13();
    RunElement14();
    RunElement15();
    RunElement16();
    RunElement17();
    RunElement18();
    RunElement19();
    RunElement20();
    RunElement21();
    RunElement22();
    RunElement23();
    RunElement24();
    RunElement25();
    RunElement26();
    RunElement27();
    RunElement28();
    RunElement29();
    RunElement30();
    RunElement31();
    RunElement32();
    RunElement33();
    RunElement34();
    RunElement35();
    RunElement36();
    RunElement37();
    RunElement38();
    RunElement39();
    RunElement40();
    RunElement41();
    RunElement42();
    RunElement43();
    RunElement44();
    RunElement45();
}
function buttonclickhandler1()
{
    const defaultxhr=new XMLHttpRequest();
    defaultxhr.open('GET','public/textfiles/TextEffect.txt',false);
    defaultxhr.onload=function(){
        document.getElementById('Container_Class').innerHTML=this.responseText
    }
    defaultxhr.send();
    // xhr2.send();
    RunElement1();
    RunElement12();
    RunElement13();
    RunElement16();
    RunElement21();
    RunElement36();
    RunElement43();
}

function buttonclickhandler2()
{
    const defaultxhr=new XMLHttpRequest();
    defaultxhr.open('GET','public/textfiles/HoverEffect.txt',false);
    defaultxhr.onload=function(){
        document.getElementById('Container_Class').innerHTML=this.responseText
    }
    defaultxhr.send();
    // xhr2.send();
    RunElement7();
    RunElement11();
    RunElement15();
    RunElement17();
    RunElement23();
    RunElement25();
    RunElement28();
    RunElement38();
}
function buttonclickhandler3()
{
    const defaultxhr=new XMLHttpRequest();
    defaultxhr.open('GET','public/textfiles/LoaderEffect.txt',false);
    defaultxhr.onload=function(){
        document.getElementById('Container_Class').innerHTML=this.responseText
    }
    defaultxhr.send();
    // const ButtonElement1=document.getElementById("ButtonElement1");
    RunElement4();
    RunElement5();
    RunElement9();
    RunElement19();
    RunElement26();
    RunElement27();
    RunElement32();
    RunElement33();
    RunElement39();
    RunElement40();
    RunElement42();
}

function buttonclickhandler4()
{
    const defaultxhr=new XMLHttpRequest();
    defaultxhr.open('GET','public/textfiles/BackgroundEffect.txt',false);
    defaultxhr.onload=function(){
        document.getElementById('Container_Class').innerHTML=this.responseText
    }
    defaultxhr.send();
    // xhr2.send();
    RunElement3();
    RunElement18();
    RunElement20();
    RunElement22();
    RunElement23();
    RunElement24();
    RunElement29();
    RunElement30();
    RunElement44();
}

function buttonclickhandler5()
{
    const defaultxhr=new XMLHttpRequest();
    defaultxhr.open('GET','public/textfiles/Others.txt',false);
    defaultxhr.onload=function(){
        document.getElementById('Container_Class').innerHTML=this.responseText
    }
    defaultxhr.send();
    // xhr2.send();
    RunElement2();
    RunElement6();
    RunElement8();
    RunElement28();
    RunElement31();
    RunElement34();
    RunElement35();
    RunElement41();
    RunElement45();
}

function buttonclickhandler6()
{
    const defaultxhr=new XMLHttpRequest();
    defaultxhr.open('GET','public/textfiles/GradientEffect.txt',false);
    defaultxhr.onload=function(){
        document.getElementById('Container_Class').innerHTML=this.responseText
    }
    defaultxhr.send();
    // xhr2.send();
    RunElement10();
    RunElement11();
    RunElement14();
    RunElement37();
    RunElement43();
}