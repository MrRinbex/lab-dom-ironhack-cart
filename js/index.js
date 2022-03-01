// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const sub = product.querySelector('.subtotal span');
  let resultat = price.textContent * quantity.value
  sub.textContent = resultat  
  return resultat
  // j'ai resté des heurs car le test ne fonctionne, apres une nouvelle "npm i" sa fonctionne!!
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.querySelectorAll('.product');
  products.forEach((item)=>{
    return updateSubtotal(item)
  })
  // ITERATION 3
  //... your code goes here
  let sum = 0;
  let displayTotalPrice = document.querySelector('#total-value span');
  // let subtotal = document.querySelector('.subtotal span');
  for(let x of products){
    sum += updateSubtotal(x)
  }
  displayTotalPrice.textContent = sum
  return sum

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const product = document.querySelector('.product')
  const btnRemove = document.querySelectorAll('.btn-remove')
  function removeProduct () {
    return product.remove()
  }
   // const removeButton = btnRemove.addEventListener('click', removeProduct)
}

// ITERATION 5

function createProduct() {
  //1 find target DOM
  //2 function from input text and number to Product Name and Unit Price
  //3 addEvent click for setup a new product with the function

  const btnCreate = document.getElementById('create');
  const inputText = document.querySelector('.create-product input'); 
  const inputNum = document.querySelector('.create-product input'); 
  // target to push for
  const prodcutName = document.querySelector('.price span');
  const unitPrice = document.querySelector('.name span'); 
// create the list
  const newProduct = document.createElement('tr');
  newProduct.className('product')
  newProduct.innerHTML =
   `<tr class="product">
  <td class="name">
    <span>${prodcutName}</span>
  </td>
  <td class="price">$<span>${unitPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`

  // i stop here and i push my work to go the itteration lab
 


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
