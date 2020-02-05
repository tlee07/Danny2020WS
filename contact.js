
var mouseControl = false;
function openmenu(){
    console.log("1");
    
    var menu0 = document.querySelector("#menu0");

    if(mouseControl == false){
    mouseControl = true;
    menu0.style.visibility = "visible";    
    }

    else{
    mouseControl = false;
    menu0.style.visibility = "hidden";
    }
}

function goBack() {
    // <a href="./index.html></a>
    window.history.back();
  }




var contactlist = [ "LINKEDIN.", "PHONE.", "INSTAGRAM.",  "EMAIL."]
var linklist = [ '<a href="https://www.linkedin.com/in/danny-lee-ting-hsun-lee/" target="_blank"> &#8627; CONNECT W/ HIM </a>',
                "(SORRY NOT TELLING YOU :P)", 
                '<a href="https://www.instagram.com/danno.dd/?hl=enINSTAGRAM" target="_blank"> &#8627; CHECK IT OUT </a>', 
                '<a href="mailto:tlee07@risd.edu?Subject=Hello Danny" target="_top"> &#8627; SAY HELLO!</a>']
// var random = jobs[Math.floor(Math.random() * jobs.length)];

var count = 0;
function changecontacts(){
    var contacts = document.querySelector("#contacts");
    contacts.innerHTML = contactlist[count];
    // contacts.style.textDecoration = "underline";

    var links = document.querySelector("#links");
    links.innerHTML = linklist[count];
    links.style.textDecoration = "underline";
    count ++;

    if(count == contactlist.length ){
        count = 0;
    }
}

// var start = true;

// function stopautoplay(){
//     console.log(start);
//     start = false;
//     console.log(start);
// }


function autoplay(){
    
    var contacts = document.querySelector("#contacts");


   interval = setInterval("changecontacts()", 2000);

}

function pause(){
    clearInterval(interval);
 }


