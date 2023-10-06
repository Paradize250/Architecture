const initMenu = (data)=> {
    console.dir(data);
    const ulPrincipal = document.createElement("ul");
    ulPrincipal.id = "ulPrincipal";
    document.querySelector("header nav").prepend(ulPrincipal);

    data.forEach(element => {
        const liSubmenu = document.createElement("li");
        let displaySubmenu =false
        liSubmenu.innerText = element.text;
        ulPrincipal.append(liSubmenu);
        liSubmenu.addEventListener("click", ()=>{
            console.dir(element.subMenu);
            if (element.displaySubmenu){
                const ulSecondary = document.createElement ("ul");
                ulSecondary.classList.add("ulSecondary");
                liSubmenu.append(ulSecondary);
                element.subMenu.forEach(elementSub => {
                    console.dir(elementSub);
                });
            }
        })
    });
};
export {initMenu};