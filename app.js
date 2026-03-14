let products = [];
let rounds = 25;
let totalClicks = 0;
let previousIndexes = [];

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesShown = 0;
  this.timesClicked = 0;

  products.push(this);
}

new Product("Bag", "img/bag.jpg");
new Product("Banana", "img/banana.jpg");
new Product("Bathroom", "img/bathroom.jpg");
new Product("Boots", "img/boots.jpg");
new Product("Breakfast", "img/breakfast.jpg");
new Product("Bubblegum", "img/bubblegum.jpg");
new Product("Chair", "img/chair.jpg");
new Product("Cthulhu", "img/cthulhu.jpg");
new Product("Dog-duck", "img/dog-duck.jpg");
new Product("Dragon", "img/dragon.jpg");
new Product("Pen", "img/pen.jpg");
new Product("Pet-sweep", "img/pet-sweep.jpg");
new Product("Scissors", "img/scissors.jpg");
new Product("Shark", "img/shark.jpg");
new Product("Sweep", "img/sweep.png");
new Product("Tauntaun", "img/tauntaun.jpg");
new Product("Unicorn", "img/unicorn.jpg");
new Product("Water-can", "img/water-can.jpg");
new Product("Wine-glass", "img/wine-glass.jpg");

const votesSection = document.querySelector('.votes');
const img1 = document.querySelector('.votes1 img');
const img2 = document.querySelector('.votes2 img');
const img3 = document.querySelector('.votes3 img');
const resultsBtn = document.getElementById('resultsBtn');


function getRandomIndex() {
  return Math.floor(Math.random() * products.length);
}

function showResults() {

  const resultsDiv = document.querySelector('.results');

  for (let i = 0; i < products.length; i++) {

    let p = document.createElement('p');

    p.textContent =
      `${products[i].name} had ${products[i].timesClicked} votes and was seen ${products[i].timesShown} times`;

    resultsDiv.appendChild(p);
  }
}


function renderProducts() {

  let index1 = getRandomIndex();
  while (previousIndexes.includes(index1)) {
    index1 = getRandomIndex();
  }

  let index2 = getRandomIndex();
  while (index2 === index1 || previousIndexes.includes(index2)) {
    index2 = getRandomIndex();
  }

  let index3 = getRandomIndex();
  while (
    index3 === index1 ||
    index3 === index2 ||
    previousIndexes.includes(index3)
  ) {
    index3 = getRandomIndex();
  }

  img1.src = products[index1].filepath;
  img2.src = products[index2].filepath;
  img3.src = products[index3].filepath;

  img1.dataset.index = index1;
  img2.dataset.index = index2;
  img3.dataset.index = index3;

  products[index1].timesShown++;
  products[index2].timesShown++;
  products[index3].timesShown++;

  previousIndexes = [index1, index2, index3];
}

function handleClick(event) {

  if (event.target.tagName === 'IMG') {

    let index = event.target.dataset.index;
    products[index].timesClicked++;

    totalClicks++;

    if (totalClicks < rounds) {
      renderProducts();
    } else {
      votesSection.removeEventListener('click', handleClick);
    }
  }
}

const ctx = document.getElementById('myChart');

 new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

renderProducts();

votesSection.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', showResults);

console.log(products);