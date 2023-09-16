const SearchFrom = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchBtn = document.getElementById("search-btn");
const SearchResult = document.getElementById("search-Result");
const ShowMore = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = SearchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=e_8gSB051YcZY3_5rC0Y5iyBwPQNTJ2e8dSfR71aOyU&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (page == 1) {
    SearchResult.innerHTML = "";
  }

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_";

    imageLink.appendChild(image);
    SearchResult.appendChild(imageLink);
  });
  ShowMore.style.display = "block";
}

SearchFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

ShowMore.addEventListener("click", () => {
  page++;
  searchImage();
});
