var superOffer = document.querySelector(".savingContainer");

document.addEventListener("click", function(event){
    if(event.target.closest("#superOffers") ){
        superOffer.style.display ="initial";
        console.log("in favor of opening the box");
    }

    else{
        superOffer.style.display ="none";
    console.log("in favor of not opening the box");
    }
    

})