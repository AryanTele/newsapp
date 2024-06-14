const API_KEY = "3b44f73a743a48b6be6b5ca1e2eaee39"; //NEWSAPI key

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
  try {
    //fetch data
    const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${API_KEY}`;
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
function displayBlock(articles) {}

async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlock(articles);
  } catch (error) {
    console.log("Error fetching data", error);
  }
};
