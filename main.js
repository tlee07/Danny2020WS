$(function(){
    $(".dragbox").draggable();
    
    $(".cube").draggable();
    $("#menucube").draggable("disable");
    // $(".speech-bubble").draggable();

})

function mouseLog(){
    var x = event.pageX;
    var y = event.pageY;

    var cursor = document.querySelector(".cursor");
    // cursor.style.zIndex = "110";
    cursor.style.left = x-40 + "px";
    cursor.style.top = y-30 + "px";
    
}

// var clickControl = false;

function changeweb1color(){

    // if(clickControl == false){
    var web1side = document.querySelector("#web1side");
    var web1front = document.querySelector("#web1front");
    var web1top = document.querySelector("#web1top");
    // var web1X = web1.style.left;
    // console.log(web1X);
    web1side.style.backgroundColor = "rgb(22,95,155)";
    web1front.style.backgroundColor = "rgb(120,206,244)";
    web1top.style.backgroundColor = "rgb(45,167,249)";

    var speech1 = document.querySelector("#speech1");
    speech1.style.visibility = "visible";
    // speech1.style.left = web1X + "px";
    // clickControl = true;

    // }

    // else{
        
    //     clickControl = false;
    // }
        
}

function closeweb1color(){
    var web1side = document.querySelector("#web1side");
    var web1front = document.querySelector("#web1front");
    var web1top = document.querySelector("#web1top");
    web1side.style.backgroundColor = "";
    web1front.style.backgroundColor = "";
    web1top.style.backgroundColor = "";
        

    var speech1 = document.querySelector("#speech1");
    speech1.style.visibility = "hidden";
}

    

function closespeech1(){
    var speech1 = document.querySelector("#speech1");
    speech1.style.visibility = "hidden";

}





function changeweb2color(){
    console.log("2");
    var web2side = document.querySelector("#web2side");
    var web2front = document.querySelector("#web2front");
    var web2top = document.querySelector("#web2top");
    web2side.style.backgroundColor = "rgb(155,27,46)";
    web2front.style.backgroundColor = "rgb(255,182,196)";
    web2top.style.backgroundColor = "rgb(255,102,124)";

    var speech2 = document.querySelector("#speech2");
    speech2.style.visibility = "visible";
        
}


function closeweb2color(){
    var web2side = document.querySelector("#web2side");
    var web2front = document.querySelector("#web2front");
    var web2top = document.querySelector("#web2top");
    web2side.style.backgroundColor = "";
    web2front.style.backgroundColor = "";
    web2top.style.backgroundColor = "";
        

    var speech2 = document.querySelector("#speech2");
    speech2.style.visibility = "hidden";
}



function closespeech2(){
    var speech2 = document.querySelector("#speech2");
    speech2.style.visibility = "hidden";

}



function changeweb3color(){
    var web3side = document.querySelector("#web3side");
    var web3front = document.querySelector("#web3front");
    var web3top = document.querySelector("#web3top");
    web3side.style.backgroundColor = "rgb(0,0,0)";
    web3front.style.backgroundColor = "rgb(221,221,221)";
    web3top.style.backgroundColor = "rgb(102,102,102)";

    var speech3 = document.querySelector("#speech3");
    speech3.style.visibility = "visible";
        
}


function closeweb3color(){
    var web3side = document.querySelector("#web3side");
    var web3front = document.querySelector("#web3front");
    var web3top = document.querySelector("#web3top");
    web3side.style.backgroundColor = "";
    web3front.style.backgroundColor = "";
    web3top.style.backgroundColor = "";
        
    var speech3 = document.querySelector("#speech3");
    speech3.style.visibility = "hidden";
}



function closespeech3(){
    var speech3 = document.querySelector("#speech3");
    speech3.style.visibility = "hidden";

}


// var list={
//     About: "About"
//     : "About"
//     list1: "About"
// }

var mouseControl = false;

function openmenu(){

    // var menucontainer = document.querySelector(".menucontainer");
    var menucube = document.querySelector("#menucube");
    var menu = document.querySelector("#menu0");
    // var menulist = document.createElement("ul");
    // menulist.className="menulist";
    // var li1 = document.createElement("li");
    // var li2 = document.createElement("li");
    // var li3 = document.createElement("li");
    // var li4 = document.createElement("li");
    // li1.innerHTML = "1";
    // li2.innerHTML = "2";
    // li3.innerHTML = "3";
    // li4.innerHTML = "4";


    if(mouseControl == false){
    // menucube.style.transform = "scaleX(0.3)";
    mouseControl = true;
    menu.style.visibility = "visible";
    // menulist.appendChild(li1, li2, li3, li4);

    // menucube.style.opacity = "1";
    
    }

    else{
    // menucube.style.transform = "";  
    // menucube.style.opacity = "0.5";
    mouseControl = false;
    menu.style.visibility = "hidden";

    }

}

function openmenu1(){

    var menu1 = document.querySelector("#menu1");

    if(mouseControl == false){
    mouseControl = true;
    menu1.style.visibility = "visible";    
    }

    else{
    mouseControl = false;
    menu1.style.visibility = "hidden";
    }
}

function openmenu2(){

    var menu2 = document.querySelector("#menu2");

    if(mouseControl == false){
    mouseControl = true;
    menu2.style.visibility = "visible";    
    }
    
    else{
    mouseControl = false;
    menu2.style.visibility = "hidden";
    }
}

function openmenu3(){

    var menu3 = document.querySelector("#menu3");

    if(mouseControl == false){
    mouseControl = true;
    menu3.style.visibility = "visible";    
    }
    
    else{
    mouseControl = false;
    menu3.style.visibility = "hidden";
    }
}

function openmenu4(){

    var menu4 = document.querySelector("#menu4");

    if(mouseControl == false){
    mouseControl = true;
    menu4.style.visibility = "visible";    
    }
    
    else{
    mouseControl = false;
    menu4.style.visibility = "hidden";
    }
}



function changeweb4color(){
    var web4side = document.querySelector("#web4side");
    var web4front = document.querySelector("#web4front");
    var web4top = document.querySelector("#web4top");
    web4side.style.backgroundColor = "rgb(160,160,160)";
    web4front.style.backgroundColor = "rgb(255,255,255)";
    web4top.style.backgroundColor = "rgb(237,237,237)";

    var speech4 = document.querySelector("#speech4");
    speech4.style.visibility = "visible";
}


function closeweb4color(){
    var web4side = document.querySelector("#web4side");
    var web4front = document.querySelector("#web4front");
    var web4top = document.querySelector("#web4top");
    web4side.style.backgroundColor = "";
    web4front.style.backgroundColor = "";
    web4top.style.backgroundColor = "";
        

    var speech4 = document.querySelector("#speech4");
    speech4.style.visibility = "hidden";
}

function closespeech4(){
    var speech4 = document.querySelector("#speech4");
    speech4.style.visibility = "hidden";

}





function changegroundcolor(){
    console.log("ground");
    var groundside = document.querySelector("#groundside");
    var groundfront = document.querySelector("#groundfront");
    var groundtop = document.querySelector("#groundtop");
    groundside.style.backgroundColor = "rgb(79,123,36)";
    groundfront.style.backgroundColor = "rgb(207,219,109)";
    groundtop.style.backgroundColor = "rgb(141,194,62)";
        
}

function scrollWin() {
    // var elmnt = document.getElementById("banner1grid");
    // elmnt.scrollIntoView();
    window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
    
  }


function scrollUp() {
    // var elmnt = document.getElementById("banner1grid");
    // elmnt.scrollIntoView();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    
  }


function scrolltobanner1(){

    window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
}

function scrolltobanner3(){
    
    window.scroll({
        top: 2820,
        left: 0,
        behavior: 'smooth'
      });
}

function scrolltobanner2(){
    
    window.scroll({
        top: 1900,
        left: 0,
        behavior: 'smooth'
      });
}

function scrolltobanner4(){
    
    window.scroll({
        top: 3860,
        left: 0,
        behavior: 'smooth'
      });
}

// location.reload() = function () {
//     window.scroll({
//         top: 0,
//         // left: 0,
//         behavior: 'smooth'
//       });
// };


window.onbeforeunload = function () {
    window.scrollTo(0,0);
    // window.scrollTo({
    //     behavior: "smooth",
    //     left: 0,
    //     top: 0,
    // });
    // window.style.scroll-behavior =  "smooth";
    // window.scrollTo({
    //             top: 0,
    //             left: 0,
    //             behavior: 'smooth'
    //           });
}

// $(document).load().scrollTop(0);



