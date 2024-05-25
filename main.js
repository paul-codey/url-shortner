const shorteningBtn = document.querySelector(".shortening-box__btn");
const input = document.querySelector(".shortening-box__input");
const shortenBox = document.querySelector(".shortened-links");

const emptyInput = document.querySelector(".empty--input");

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
    renderhtml(input.value.trim());
  } else {
    input.classList.add("empty-input");
    emptyInput.classList.add("show");
  }
});

document.addEventListener("click", (e) => {
  if (e.target !== shorteningBtn) {
    input.classList.remove("empty-input");

    emptyInput.classList.remove('show');
  }

});


async function shortenUrl(longURL) {
  try {
    const url = new URL(longURL);
    console.log(url);
  } catch (e) {
    throw new Error('Invalid link')
  }

  const encoded = encodeURIComponent(longURL);

  const response = await fetch('https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: encoded }),
  });
  
  const data = await response.json();
  console.log(data);
}


shortenUrl('https://mimo.app/i/beach.png');