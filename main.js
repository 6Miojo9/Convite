const triangulo = document.getElementById("triangulo");
const caixa = document.getElementById("caixa");
const borda = document.getElementById("borda");
const content = document.getElementById("content");

const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const altura = scrollY/triangulo.offsetHeight*150;
  
  if (altura > 50) {
    footer.style.zIndex = "4";
    content.style.zIndex = "3";
  } else {
    footer.style.zIndex = "1";
    content.style.zIndex = "0";
  }

  if (altura < 100) {
    triangulo.style.clipPath =  `polygon(-100% ${altura}%, 50% 50%, 200% ${altura}%)`;
    caixa.style.clipPath =  `polygon(-50% ${altura}%, 150% ${altura}%, 50% ${altura+20}%)`;
    borda.style.clipPath =  `polygon(-50% ${altura}%, 0% 100%, 100% 100%, 150% ${altura}%, 50% ${altura+20}%)`;
    if (altura > 80) {
      content.style.width = `${altura}%`;
    } else {
      content.style.width = "80%";
    }
  } else {
    triangulo.style.clipPath =  `polygon(-100% 100%, 50% 50%, 200% 100%)`;
    caixa.style.clipPath =  `polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)`;
    borda.style.clipPath =  `polygon(-50% 100%, 100% 100%, 100% 100%, 150% 100%, 50% 100%)`;
    content.style.width = "100%";
  }
});
const video = document.getElementById('meuVideo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      video.play();
    }
  });
},{
  threshold: 0.5
});

observer.observe(video);