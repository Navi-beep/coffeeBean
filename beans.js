async function getCoffee() {
    const res = await fetch("https://api.sampleapis.com/coffee/hot");
    const beans = await res.json();
    //console.log(beans);
  
    const random = beans[Math.floor(Math.random() * beans.length)];
    console.log(random);
  
    document.getElementById("image").innerHTML = image.src = random.image;
  
    document.getElementById("title").innerHTML = random.title;
  
    document.getElementById("body").innerHTML = random.description;
  
    document.getElementById("list1").innerHTML = random.ingredients;
  }
  
  function BeanButton() {
    let button = document.getElementById("button");
    button.addEventListener("click", getCoffee);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    getCoffee();
    BeanButton();
  });
  
  getCoffee();
  