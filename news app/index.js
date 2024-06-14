const API_KEY = "3b44f73a743a48b6be6b5ca1e2eaee39"; //NEWSAPI key

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
  try {
    //fetch data
    const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apikey=${API_KEY}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    return data.articles;
  } catch (error) {
    //unable to fetch datac
    console.error("Error fetching random news!", error);
    return [];
  }
}
function displayBlock(articles) {
  blogContainer.innerHTML = "";
  articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = article.title;
    const title = document.createElement("h2");
    const trucatedTitle =
      article.title.length > 30
        ? article.title.slice(0, 30) + "..."
        : article.title;
    const description = document.createElement("p");

    const trucatedDesc =
      article.description.length > 120
        ? article.description.slice(0, 120) + "..."
        : article.description;
    description.textContent = trucatedDesc;
    title.textContent = trucatedTitle;
    const blogText = document.createElement("div");
    blogText.classList.add("blog-text");
    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);

    blogContainer.appendChild(blogCard);
  });
}

(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlock(articles);
  } catch (error) {
    console.log("Error fetching data", error);
  }
})();
