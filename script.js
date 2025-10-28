let content = document.querySelector(".card");

const ratings = document.querySelectorAll(".card__ratings button");

const submitButton = document.querySelector(".card__submit-button");

let selectedRating = null;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((rating) => {
      rating.setAttribute("aria-pressed", "false");
    });
    rating.setAttribute("aria-pressed", "true");
    selectedRating = rating;
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating == null) {
    console.log("deger seciniz");
  } else {
    content.classList.add("result");
    content.innerHTML = `<img class="card__result-img" src="images/illustration-thank-you.svg" />
      <span class="card__result-rating">You selected ${selectedRating.innerHTML} out of 5</span>
      <h2 class="card__result-title">Thank you!</h2>
      <p class="card__result-text">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </p>`;
  }
});
