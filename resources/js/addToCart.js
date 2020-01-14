var addToCartButtons = document.getElementsByClassName('glyphicon-plus-sign');
for(var i = 0; i < addToCartButtons.length; ++i) {
    var addToCartButton = addToCartButtons[i];
    addToCartButton.addEventListener('click', addToCart);
}

function addToCart(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var shopItemName = shopItem.getElementsByClassName('product-name')[0].innerText;
    var shopItemPrice = shopItem.getElementsByClassName('pull-right')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('thumbnail')[0].src;
    console.log(shopItemName, shopItemPrice, imageSrc);
    addItemToCart(shopItemName, shopItemPrice, imageSrc);
}

function addItemToCart(shopItemName, shopItemPrice, imageSrc) {
    
}