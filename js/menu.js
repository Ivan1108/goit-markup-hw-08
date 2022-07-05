(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    menuBtnRef.addEventListener("click",()=>{
 
        mobileMenuRef.classList.toggle("is-open")
    })
    const closeBtnRef = document.querySelector("[data-menu-close]");
    closeBtnRef.addEventListener("click",()=>{
        
        mobileMenuRef.classList.remove("is-open")
    })
})();
