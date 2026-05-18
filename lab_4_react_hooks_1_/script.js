const systemInfo = {
  browser: navigator.userAgent,
  platform: navigator.platform,
};

localStorage.setItem(
  "systemInfo",
  JSON.stringify(systemInfo)
);

const savedInfo = JSON.parse(
  localStorage.getItem("systemInfo")
);

document.getElementById("systemInfo").innerHTML = `
<strong>Browser:</strong> ${savedInfo.browser}
<br>
<strong>Platform:</strong> ${savedInfo.platform}
`;

async function loadReviews() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/7/comments"
    );

    const data = await response.json();

    const reviewsContainer =
      document.getElementById("reviews");

    reviewsContainer.innerHTML = "";

    const ukrainianReviews = [
      "Андрій показав себе відповідальним та уважним до деталей розробником.",
      "Продемонстрував хороші знання веброзробки та вміння працювати в команді.",
      "Швидко адаптується до нових технологій та виконує задачі вчасно.",
      "Дисциплінований спеціаліст із хорошими технічними навичками.",
      "Має хороше розуміння HTML, CSS та JavaScript."
    ];

    const names = [
      "Олександр Коваль",
      "Марія Бондар",
      "Ігор Савчук",
      "Вікторія Мельник",
      "Андрій Петренко"
    ];

    data.slice(0, 5).forEach((review, index) => {
      reviewsContainer.innerHTML += `
        <div class="review">
          <h3>${names[index]}</h3>
          <p>${ukrainianReviews[index]}</p>
        </div>
      `;
    });

  } catch (error) {
    console.error(error);
  }
}

loadReviews();

const modal = document.getElementById("modal");

const closeModal =
  document.getElementById("closeModal");

setTimeout(() => {
  modal.classList.remove("hidden");
}, 1000);

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

const body = document.getElementById("body");

const themeBtn =
  document.getElementById("themeBtn");

const hour = new Date().getHours();

if (hour >= 7 && hour < 21) {
  body.classList.remove("dark-theme");
} else {
  body.classList.add("dark-theme");
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});