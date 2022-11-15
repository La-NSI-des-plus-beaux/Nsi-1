/* ========================= Typing animation ===============================*/

var typed = new Typed(".typing", {
    strings:["", "Son Histoire", "Le Web", "Les Languages", "Les métiers"],
    typeSpeed:100, 
    BackSpeed:60, 
    loop:true
})

/* ========================= Aside ===============================*/
const nav = document.querySelector(".nav")
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      const logo = document.getElementById("logo-top-aside")
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
            var logo_name = navList[i].querySelector("a").getAttribute("href").split("#")[1];
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                      // allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              logo.innerHTML = logo_name
              if(window.innerWidth < 1200) {
                  asideSectionTogglerBtn();
              }
          })
      }
      
      function removeBackSection(){
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
      }

      function addBackSection(num){
        allSection[num].classList.add("back-section");
      }

      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function upddateNav(element){
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".hire-me").addEventListener("click", function () 
      {
          const SectionIndex = this.getAttribute("data-section-index");
          // console.log(SectionIndex);
          showSection(this);
          upddateNav(this);
          removeBackSection();
          addBackSection(SectionIndex);
      })
      
      const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => 
        {
            asideSectionTogglerBtn()             
        })
          function asideSectionTogglerBtn(){
              aside.classList.toggle("open");
              navTogglerBtn.classList.toggle("open");
              for(let i=0; i<totalSection; i++)
              {
                  allSection[i].classList.toggle("open");
              }
          }

          function CV() {
            alert("Je n'ai pas de CV actuellement.");
          }

          