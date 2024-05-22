const shorteningBtn = document.querySelector(".shortening-box__btn");
const input = document.querySelector(".shortening-box__input");
const shortenBox = document.querySelector(".shortened-links");

function renderhtml(input) {
  const html = `
  <div class="link flex">
    <p class="inputed-link">${input}</p>

    <p class="converted-link">
        <a
        href="https://location-time-and-weather-checker.vercel.app/"
         >https.//ercel.app /</a
        >
    </p>

    <button class="btn copy-btn">Copy</button>
 </div>
  `;

  shortenBox.insertAdjacentHTML("beforeend", html);
}

shorteningBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    renderhtml(input.value);
  } else {
    input.classList.add("empty-input");
    document.querySelector(".empty--input").classList.add("show");
  }
});

document.addEventListener("click", (e) => {
  if (e.target !== shorteningBtn) input.classList.remove("empty-input");
});
