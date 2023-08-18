


// observer 
const observer = new IntersectionObserver(element =>{
    element.forEach(elmt =>{
        if(elmt.isIntersecting){
            const data = elmt.target.getAttribute("data-src");
            elmt.target.setAttribute("src", data);
            observer.unobserve(elmt.target);
            elmt.target.removeAttribute("data-src");
        }
    });
});

// observer chaque image 
const images = document.querySelectorAll("img");
images.forEach(img =>{
    observer.observe(img)
});


// Bmenu 
const nav = document.querySelector("nav");
const link = document.createElement("a");
link.classList.add("Menu");

window.addEventListener("resize", (e) =>{
    if(window.innerWidth < 1025){
        if(!nav.contains(link)){
            nav.appendChild(link);
        }
    }else{
        link.remove();
    }
});

window.addEventListener("load", (e) =>{
    if(window.innerWidth < 1025){
        if(!nav.contains(link)){
            nav.appendChild(link);
        }
    }else{
        link.remove();
    }
});

link.addEventListener("click", (e) =>{
    e.preventDefault();
    const ul = document.querySelector("ul");
    ul.classList.toggle("block");
    nav.classList.add("block");
    link.id = "absolute";
    link.classList.toogle("open");
});

// To top 
const div = document.querySelector("#fleche");
window.addEventListener("scroll", () =>{
    positionS = window.scrollY
    if(window.innerHeight < 500){
        div.setAttribute("class", "none")
    }else{
        div.setAttribute("class", "bloc")
    }
});

const fleche = document.querySelector("#img");
fleche.addEventListener("click", () =>{
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
})