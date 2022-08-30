function myFunction() {
    var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function myDrop() {
    var x = document.getElementById("drop");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function myDropLeft() {
    var x = document.getElementById("dropLeft");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


const moon = document.getElementById("moon")

moon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        moon.src = "images/Moon-1.png";
    } else {
        moon.src = "images/Sun-1.png";
    }
}


// Open new chat from home
function openForm() {
    document.getElementById("Newchat").style.display = "block";
    document.getElementById("leftSid").style.display = "none";
}

function closeForm() {
    document.getElementById("leftSid").style.display = "block";
    document.getElementById("Newchat").style.display = "none";
}


// Open group from new chat
function openGroup() {
    document.getElementById("group").style.display = "block";
    document.getElementById("Newchat").style.display = "none";
}

function closeGroup() {
    document.getElementById("Newchat").style.display = "block";
    document.getElementById("group").style.display = "none";
}


// Open Group from list item
function openGrp() {
    document.getElementById("group").style.display = "block";
    document.getElementById("leftSid").style.display = "none";
}

function closeGroup() {
    document.getElementById("leftSid").style.display = "block";
    document.getElementById("group").style.display = "none";
}


// Open Settings from list item
function openSettings() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("leftSid").style.display = "none";
}

function closeSettings() {
    document.getElementById("leftSid").style.display = "block";
    document.getElementById("settings").style.display = "none";
}


// Open profile from settings
function openProfile() {
    document.getElementById("profile").style.display = "block";
    document.getElementById("settings").style.display = "none";
}

function closeProfile() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("profile").style.display = "none";
}