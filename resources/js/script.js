/* ____________________________________________
             PROFILE DOM
______________________________________________*/
    var tabButtons = document.querySelectorAll(".tab-container .button-container button");
    var tabPanels = document.querySelectorAll(".tab-container .tab-panel");
    var filename= location.pathname.split('/').pop(); 

    function showPanel(panelIndex, colourCode) {
        tabButtons.forEach(function(node) {
            node.style.backgroundColor="";
            node.style.color="";
            node.style.borderBottom="1px solid #d0cece";
        });
        
        var colorSelected = (colourCode == 1)? "rgba(79,99,88,1)" : "rgba(191,90,78,1)";
        tabButtons[panelIndex].style.borderBottom="2px solid " + colorSelected;
        tabPanels.forEach(function(node) {
            node.style.display="none";
        });
        tabPanels[panelIndex].style.display="block";
    }
    
    var i = (filename == "user.html")? 1 : 0;
    showPanel(0, i);
    

/* ____________________________________________
              REMOVE FROM CART
______________________________________________*/

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    var removeCartItemButton = document.getElementsByClassName('ion-md-close-circle');

    for(var i = 0; i < removeCartItemButton.length; ++i) {
        updateCartTotal();
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem); 
    }
    
    var quantityInputs = document.getElementsByClassName('panel-qty');
    for(var i = 0; i < quantityInputs.length; ++i) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}


function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove(); 
    updateCartTotal();
}

function quantityChanged(event) {
    var input2 = event.target;
    console.log(input2.value);
    if(isNaN(input2.value) || input2.value <= 0){
        input2.value = 1;
    }
    updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('add-list')[0];
    var cartRows = cartItemContainer.getElementsByClassName('product-list-panel');
    var total = 0;
    
    for(var i = 0; i < cartRows.length; ++i) {
        var cartRow = cartRows[i];
        var priceElement = document.getElementsByClassName('panel-price')[i];
        var quantityElement = document.getElementsByClassName('panel-qty')[i];
        var price = parseFloat(priceElement.innerText.replace('₹ ', ''));
        var quantity = parseInt(quantityElement.value);
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-cart-amount')[0].innerText = '₹ ' + total;
}