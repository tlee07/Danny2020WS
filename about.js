
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

var jobs = [ "CODER", "DOODLER", "RISD UNDERGRAD", "TAIWANESE BOY", "NERDY KID", "DESIGNER"]
// var random = jobs[Math.floor(Math.random() * jobs.length)];

var count = 0;
function changejob(){
    var jobtitle = document.querySelector("#occupation");
    jobtitle.innerHTML = jobs[count];
    jobtitle.style.textDecoration = "underline";
    count ++;

    if(count == jobs.length){
        count = 0;
    }

}

var passions = [ "VOLLEYBALL.", "NAPS.", "LANGUAGES.", "FAM & FRIENDS.", "TRAVELLING.", "FOOOOOOD.", "BUBBLE TEA."]
var countpassion = 0;
function changepassion(){
    var jobtitle = document.querySelector("#passion");
    jobtitle.innerHTML = passions[countpassion];
    jobtitle.style.textDecoration = "underline";
    countpassion ++;

    if(countpassion == passions.length){
        countpassion = 0;
    }

}

function goBack() {
    window.history.back();
  }