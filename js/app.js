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


// Open Group from list item
function openStarred() {
    document.getElementById("starred").style.display = "block";
    document.getElementById("leftSid").style.display = "none";
}

function closeStarred() {
    document.getElementById("leftSid").style.display = "block";
    document.getElementById("starred").style.display = "none";
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


// Open notifications from settings
function openNotifications() {
    document.getElementById("notifications").style.display = "block";
    document.getElementById("settings").style.display = "none";
}

function closeNotifications() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("notifications").style.display = "none";
}


// Open privacy from settings
function openPrivacy() {
    document.getElementById("privacy").style.display = "block";
    document.getElementById("settings").style.display = "none";
}

function closePrivacy() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("privacy").style.display = "none";
}


// Open Last seen from privacy
function openLast() {
    document.getElementById("last-seen").style.display = "block";
    document.getElementById("privacy").style.display = "none";
}

function closeLast() {
    document.getElementById("privacy").style.display = "block";
    document.getElementById("last-seen").style.display = "none";
}

// Open Profile photo from privacy
function openPhoto() {
    document.getElementById("p-photo").style.display = "block";
    document.getElementById("privacy").style.display = "none";
}

function closePhoto() {
    document.getElementById("privacy").style.display = "block";
    document.getElementById("p-photo").style.display = "none";
}


// Open About from privacy
function openAbout() {
    document.getElementById("about").style.display = "block";
    document.getElementById("privacy").style.display = "none";
}

function closeAbout() {
    document.getElementById("privacy").style.display = "block";
    document.getElementById("about").style.display = "none";
}


// Open D-message from privacy
function openDmessage() {
    document.getElementById("D-message").style.display = "block";
    document.getElementById("privacy").style.display = "none";
}

function closeDmessage() {
    document.getElementById("privacy").style.display = "block";
    document.getElementById("D-message").style.display = "none";
}


// Open groups from privacy
function openGroups() {
    document.getElementById("groups").style.display = "block";
    document.getElementById("privacy").style.display = "none";
}

function closeGroups() {
    document.getElementById("privacy").style.display = "block";
    document.getElementById("groups").style.display = "none";
}


// Open blocked from privacy
function openBlock() {
    document.getElementById("blocks").style.display = "block";
    document.getElementById("privacy").style.display = "none";
}

function closeBlock() {
    document.getElementById("privacy").style.display = "block";
    document.getElementById("blocks").style.display = "none";
}


// Open Security from settings
function openSecurity() {
    document.getElementById("security").style.display = "block";
    document.getElementById("settings").style.display = "none";
}

function closeSecurity() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("security").style.display = "none";
}


// Open Chat Wallpaper from settings
function openWallpaper() {
    document.getElementById("wallpaper").style.display = "block";
    document.getElementById("settings").style.display = "none";
}

function closeWallpaper() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("wallpaper").style.display = "none";
}


// Open Request Account Info from settings
function openRequest() {
    document.getElementById("request").style.display = "block";
    document.getElementById("settings").style.display = "none";
}

function closeRequest() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("request").style.display = "none";
}


// Open Help from settings
function openHelp() {
    document.getElementById("help").style.display = "block";
    document.getElementById("settings").style.display = "none";
}

function closeHelp() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("help").style.display = "none";
}