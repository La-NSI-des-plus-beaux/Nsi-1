/* ========================= Typing animation ===============================*/

var typed = new Typed(".typing", {
    strings: ["La Programmation", "Son Histoire", "Le Web", "Les Langages", "Les métiers", "La programmation"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/* ========================= Aside ===============================*/
const nav = document.querySelector(".nav")
navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
const logo = document.getElementById("logo-top-aside")
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        var logo_name = navList[i].querySelector("a").getAttribute("href").split("#")[1];
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        logo.innerHTML = logo_name
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

const start_button = document.querySelector(".start_button")
start_button.addEventListener("click", function () {
    var logo_name = "Histoire";
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
            addBackSection(j);
            // allSection[j].classList.add("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");
    }
    var element = document.getElementById("histoire_link");
    element.classList.add("active");
    showSection(this);
    logo.innerHTML = logo_name
    if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
    }


})

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function upddateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}


const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn()
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}



// Webhook Discord

function sendMessage() {
    var nom = document.getElementById('nom-id').value
    var email = document.getElementById('email-id').value
    var objet = document.getElementById('objet-id').value
    var message = document.getElementById('message-id').value

    var myEmbed = {
        author: {
            name: nom + " (" + email + ")",
        },
        title: objet,
        description: message
    }

    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1042499996567736440/YQmyUiTaANn8T_LqAO2DaC3mcd0zfks18xDjgWTIkuBqdcBTqSF4wnf87xHz0MVkgPwa");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        embeds: [myEmbed]
    }
    request.send(JSON.stringify(params));
    document.getElementById('nom-id').value = ""
    document.getElementById('email-id').value = ""
    document.getElementById('objet-id').value = ""
    document.getElementById('message-id').value = ""
    alert("Message envoyé !")

}