var elRotateBtns = document.querySelectorAll(".item__button");

elRotateBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        btn.parentElement.classList.toggle("item__wrapper--active");
    })
})