const button = document.querySelector(".sidebar-menu__button");
const sidebar = document.querySelector(".sidebar-menu");


button.addEventListener("click", function(event){
    event.preventDefault();
    if (sidebar.style.left === '-400px') {
        sidebar.style.left = '0px';
            "style", "font-size: 100px; font-style: italic; color:#ff0000;"  /*adiciona novo estilo/classe/whatever em linha*/
    } else {
        sidebar.style.left = '-400px'
    }
})

/* let conter = 1;
button.addEventListener("click", functio(event){
    event.preventDefault();

    sidebar.style.left = "-435px"
    counter++
    if (counter % 2 !== 0){
        sidebar.style.left = "0px"
    }
})

