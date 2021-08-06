AOS.init();


let ubicacionPrincipal = window.pageXOffset;





window.addEventListener("scroll",function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        this.document.getElementsByTagName("nav")[0].style.top="0px"
    }else{
        this.document.getElementsByTagName("nav")[0].style.top="-100"
    }
    ubicacionPrincipal=desplazamientoActual;
})

//menu


let enlacesHeader = document.querySelectorAll('.enlaces-header')[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click",function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color="#fff"
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color="#000"
        semaforo=true;
    }
    enlacesHeader.classList.toggle("menudos")
})