let movies = [
  {
    name: "DONATE FOOD",
    des:
      "By participating in the Food Donation Drive, you have the opportunity to make a direct impact on the lives of individuals and families in our community. Your contribution can alleviate hunger, provide essential nutrition, and offer a sense of hope to those who need it most. Together, we can create a stronger, more caring community where no one is left behind.",

    image: "images/FOOD2.JPG"
  },
  {
    name: "DONATE MONEY",
    des:
      "At Contribute for good, we value transparency and accountability. We ensure that your donation is utilized efficiently and effectively, directing the funds to the areas where they are needed the most. We regularly provide updates on our progress and impact, so you can witness firsthand the difference your contribution is making.",
    image: "images/MONEY2.JPG"
  },
  {
    name: "DONATE CLOTHING",
    des:
      "Your clothing donation can have a profound impact on the lives of individuals and families in need. By providing clean, warm clothing, you can offer comfort, protection, and a sense of dignity. Your generosity can help individuals overcome challenging situations, find employment opportunities, and restore their self-confidence. Together, we can make a real difference in our community",
    image: "images/CLO2.JPG"
  },
  {
    name: "DONATE BOOKS",
    des:
      "The Book Donation Drive is an initiative aimed at collecting new and gently used books to provide educational resources and promote literacy in our community. We recognize that books have the ability to ignite curiosity, foster imagination, and enhance learning opportunities. By donating your books, you can help create a brighter future for individuals in need.",
    image: "images/BOOKS.jpg"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //dom elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  //attach
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  //images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //elements class
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards
