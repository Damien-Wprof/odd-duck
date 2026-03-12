let products = [];

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesShown = 0;

  products.push(this);
}

let bag = new Product("bag", "img/bag.jpg");
let nana = new Product("banana", "img/banana.jpg");
let bathroom = new Product("bathroom", "img/bathroom.jpg");
let boots = new Product("boots", "img/boots.jpg");
let breakfast = new Product("breakfast", "img/breakfast.jpg");
let bubblegum = new Product("bubblegum", "img/bubblegum.jpg");
let chair = new Product("chair", "img/chair.jpg");
let cthulhu = new Product("cthulhu", "img/cthulhu.jpg");
let dogDuck = new Product("dog-duck", "img/dog-duck.jpg");
let dragon = new Product("dragon", "img/dragon.jpg");
let pen = new Product("pen", "img/pen.jpg");
let petSweep = new Product("pet-sweep", "img/pet-sweep.jpg");
let scissors = new Product("scissors", "img/scissors.jpg");
let shark = new Product("shark", "img/shark.jpg");
let sweep = new Product("sweep", "img/sweep.");
let tauntaun = new Product("tauntaun", "img/tauntaun.jpg");
let unicorn = new Product("unicorn", "img/unicorn.jpg");
let waterCan = new Product("water-can", "img/water-can.jpg");
let wineGlass = new Product("wine-glass", "img/wine-glass.jpg");

const votesSection = document.querySelector('.votes');
const img1 = document.querySelector('.votes1 img');
const img2 = document.querySelector('.votes2 img');
const img3 = document.querySelector('.votes3 img');



function getRandomIndex() {
  return Math.floor(Math.random() * products.length);
}

function renderProducts() {

  let index1 = getRandomIndex();
  let index2 = getRandomIndex();
  let index3 = getRandomIndex();

  while (index2 === index1) {
    index2 = getRandomIndex();
  }

  while (index3 === index1 || index3 === index2) {
    index3 = getRandomIndex();
  }

  img1.src = products[index1].filepath;
  img2.src = products[index2].filepath;
  img3.src = products[index3].filepath;

  products[index1].timesShown++;
  products[index2].timesShown++;
  products[index3].timesShown++;
}

renderProducts();

votesSection.addEventListener('click', handleClick);

console.log(index);