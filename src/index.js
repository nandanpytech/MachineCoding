import "./styles.css";

const container = document.querySelector(".container");

let page = 1;

function getData() {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        data.forEach((e, index) => {
          const el = document.createElement("div");
          el.innerHTML += `
        <li>${e.title}</li>
      `;
          container.append(el);
        });
      }

      page++;
    });
}

container.addEventListener("scroll", () => {
  if (
    container.scrollTop + 1 + container.clientHeight >
    container.scrollHeight
  ) {
    getData();
  }
});

getData();
