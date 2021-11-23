// =============== Show Menu =================
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);

    const  nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("showMenu");
      });
    }
  };
  
  showMenu("navToggle", "navMenu");
  
  // =========== Remove Menu Mobile ===============
  
  const navLink = document.querySelectorAll(".navLink");
  
  function linkAction() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("showMenu");
  }
  
  navLink.forEach((n) => n.addEventListener("click", linkAction));