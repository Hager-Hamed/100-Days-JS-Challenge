function increaseQuantity(btn){
  const quantity = btn.closest('.counter').querySelector('.quantity');
  if(quantity.innerHTML < 10){
    quantity.innerHTML = +quantity.innerHTML + 1;
  }
}

function decreaseQuantity(btn){
  const quantity = btn.closest('.counter').querySelector('.quantity');
  if(quantity.innerHTML > 1){
    quantity.innerHTML = +quantity.innerHTML - 1;
  }
}