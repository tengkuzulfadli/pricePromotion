function checkQuantity() {
  let i = document.getElementById('quantity').value;
  i = Number(i); //Convert string to number data type
  const priceEach = [0, 6.45, 12.00];

  if (!i) {
    console.log("Please enter a valid pizza quantity");

  } else if (isNaN(i)) {
    console.log("Error!!");

  } else if (i < 1) {
    console.log("Minimum pizza order is 1.");

  } else if(i == 1){
    const price = priceEach[0];
    document.getElementById('message').innerHTML = 'Number of pizza : ' + price;
  } else if (i == 2) {
    const price1 = priceEach[1];
    document.getElementById('message').innerHTML = 'Number of pizza : ' + price1;
  } else if (i == 3) {
    const price2 = priceEach[2];
    document.getElementById('message').innerHTML = 'Number of pizza : ' + price2;
  } else {
    const price3 = Math.floor(i/3) * 14 + priceEach[i%3]; //
    document.getElementById('message').innerHTML = 'Number of pizza : ' + price3;
  }

  return false;
}
