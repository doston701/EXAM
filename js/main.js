const ellist = document.querySelector(".book__list");
const elHero = document.querySelector(".hero__wrapper");
const eLMrkList = document.querySelector(".bookmarks__list");
const elHeaderbtn = document.querySelector(".header__bnt");
const searchInput = document.querySelector("#search");
const getResult = document.querySelector(".show__title");

async function response() {
  let data = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=${search}+terms"
  );
  try {
    let getRes = await data.json();
    for (let obj in getRes.items) {
      for (let i = 0; i <= 10; i++) {
        const createLi = document.createElement("li");
        createLi.innerHTML = `
      <li class="book__item">
      <div class="book__img-wrapper">
        <img
          class="book__img"
          src="${getRes.items[i].volumeInfo.imageLinks.smallThumbnail}"
          alt="one book"
        />
      </div>
      <div class="book__item-content">
        <h3 class="book__item-title">${getRes.items[i].volumeInfo.title}</h3>
        <span class="book__item-text">${getRes.items[i].volumeInfo.authors}</span>
        <p class="book__item-year">${getRes.items[i].volumeInfo.publishedDate}</p>
      </div>
      <div class="book__btn-wrapper">
        <button class="book__btn-bookmark">Bookmark</button>
        <button class="book__btn-info" >More Info</button>
      </div>
          <a class="block__link" href="${getRes.items[i].volumeInfo.canonicalVolumeLink}"
          ><button class="book__btn-read">Read</button
        ></a>
      </li>
        `;

        ellist.appendChild(createLi);

        if (i == 0) {
          ellist.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.className === "book__btn-bookmark") {
              const createItem = document.createElement("li");
              createItem.className = "bookmarks__item";
              createItem.innerHTML = `
                  <div class="bookmarks__item-content">
                  <h3 class="bookmarks__subtitle">${getRes.items[i].volumeInfo.title}</h3>
                  <p class="bookmarks__text">${getRes.items[i].volumeInfo.authors}</p>
                </div>
                <div class="bookmarks__img-wrapper">
                  <img
                    class="bookmarks__book-icon"
                    src="./img/book-section-icon1.svg"
                    alt="book icon"
                  />
                <button class="bookmarks__book">
                <img
                class="bookmarks__book-icon"
                src="./img/book-section-icon2.svg"
                alt="book icon"
                /></button>
                </div>
                  `;

              eLMrkList.appendChild(createItem);
              eLMrkList.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.target.className === "bookmarks__book") {
                  console.log("ddd");
                } else {
                  createItem.remove();
                }
              });
            }
          });
        }
      }
    }
  } catch (error) {}
}

response();

elHeaderbtn.addEventListener("click", (e) => {
  window.location.href = "login.html";
});
