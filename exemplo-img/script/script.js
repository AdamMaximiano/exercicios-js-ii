const links = document.querySelector(".gallery__nav");


console.log(links)
console.log(links.children)

for (let i = 0; i < links.children.length; i++) {

    console.log(links.children[i]);

    links.children[i].addEventListener("click", function(){
        const img = this.dataset.image;
        console.log(img);
        document.querySelector(".gallery__image").src = img;
    })
}


// for (let i = 0; i < links.children.length; i++) {
//     const fio = links.children[i];

//     fio.addEventListener("click", function(){
//         //pegar o caminho da img no atributo data-image

//     })
