export default class Slider {
  constructor(data) {
    this.name = data.name
    this.container = document.getElementById(data.container);
    this.imgs = data.images;
    this.slideIndex = 1;
    this.slider();
  }

  slider() {
    this.container.appendChild(this.createSliderContainer());
    this.container.appendChild(document.createElement("br"));
    this.container.appendChild(this.createDots());
    this.bindFunctions();
    this.bindDotsFunc()
    this.showSlides(this.slideIndex)
  }

  createSliderContainer() {
    let container = document.createElement("div");
    container.setAttribute("class", `${this.name} slideshow-container`);

    this.imgs.forEach(slide => {
      container.appendChild(this.createSlide(slide));
    });

    let prevArrow = document.createElement("a");
    prevArrow.setAttribute("class", `${this.name} prev`);
    prevArrow.innerHTML = "&#10094;";
    container.appendChild(prevArrow);

    let nextArrow = document.createElement("a");
    nextArrow.setAttribute("class", `${this.name} next`);
    nextArrow.innerHTML = "&#10095;";
    container.appendChild(nextArrow);

    return container;
  }

  createDots() {
    let dotsContainer = document.createElement("div");
    dotsContainer.style.textAlign = "center";
    for (let i = 0; i < this.imgs.length; i++) {
      let dot = document.createElement("span");
      dot.setAttribute("class", `${this.name} dot`);
      dotsContainer.appendChild(dot);
    }
    return dotsContainer;
  }

  createSlide(slideData) {
    let slide = document.createElement("div");
    slide.setAttribute("class", `${this.name} mySlides fade`);
    let caption = document.createElement("div");
    caption.setAttribute("class", `${this.name} numbertext`);
    caption.innerHTML = slideData.caption;
    let img = document.createElement("img");
    img.setAttribute("src", `./img/mainSliderImg/${slideData.img}.jpg`);
    slide.appendChild(caption);
    slide.appendChild(img);
    return slide;
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n) {
    let slides = document.getElementsByClassName(`${this.name} mySlides`);
    let dots = document.getElementsByClassName(`${this.name} dot`);
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }


  bindDotsFunc(){
    let dots = document.getElementsByClassName(`${this.name} dot`);
    for (let i = 0; i < dots.length; i++) {
       dots[i].addEventListener('click',()=>this.currentSlide(i+1))
     }
  }

  bindFunctions() {
    let prev = document.getElementsByClassName(`${this.name} prev`)[0];
    let next = document.getElementsByClassName(`${this.name} next`)[0];

    prev.addEventListener("click", () => this.plusSlides(-1));
    next.addEventListener("click", () => this.plusSlides(1));
  }
}
