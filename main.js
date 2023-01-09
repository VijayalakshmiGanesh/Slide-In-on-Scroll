let images= document.querySelectorAll("img")

function SlideInHandler(e){
    images.forEach(image => {
        //find mid-image postion
        let DisplayImage = (window.scrollY + window.innerHeight) - image.height/2;
        let endImagePosition = image.offsetTop+image.height;

        let showImage = image.offsetTop < DisplayImage;
        let notScrolledPast = window.scrollY < endImagePosition

        if(showImage && notScrolledPast)
            image.classList.add("active");
        else
            image.classList.remove("active");
    });
}
window.addEventListener("scroll", SlideInHandler)


