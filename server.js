    // cart
    let carIcon = document.querySelector("#cart-icon");
    let car = document.querySelector(".car");
    let closeCar = document.querySelector("#close-icon");
    // open cart
    carIcon.onclick = () => {
      car.classList.add("active");
    };
    //close cart
    closeCar.onclick = () => {
      cart.classList.remove("active");
    };
    
    //cart working js
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", ready);
    } else {
      ready();
    }
    
    // making function
    function ready(){
      // Remove Items From Cart
      var removeCarButtons = document.getElementsByClassName('car-remove')
      console.log(removeCarButtons)
      for (var i = 0; i < removeCarButtons.length; i++){
        var button = removeCarButtons[i]
        button.addEventListener('click', removeCarItem)
      }
    }
    
    // Remove items from cart
    function removeCarItem(event){
      var buttonClicked = event.target
      buttonClicked.parentElement.remove()
    }