const searchitem = document.getElementById("searchitem");
const searchbutton = document.getElementById("search");
const searchbox = document.getElementById("searchbox");
const resultsbox = document.querySelector(".searchresults");
const getmore = document.getElementById("getmore");

const accessid = "8qbmotDmNfrDi0ni3kCS8iliIbin7dOjR7oXkn7AADs";
let pageno = 1;
let keyword = "";

async function imagegenerator() {
    keyword = searchitem.value.trim();
    if (!keyword) return; // prevent empty search

    const url = `https://api.unsplash.com/search/photos?page=${pageno}&query=${keyword}&client_id=${accessid}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    // show "no results" message if nothing found
    if (results.length === 0 && pageno === 1) {
        resultsbox.innerHTML = `<p style="color:white; font-size:18px;">No images found for "${keyword}"</p>`;
        getmore.style.display = "none";
        return;
    }

    results.forEach(result => {
        const img = document.createElement("img");
        img.src = result.urls.small;
        img.alt = result.alt_description || keyword;

        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(img);
        resultsbox.appendChild(imagelink);
    });

    getmore.style.display = "block";
}

// search submit
searchbox.addEventListener("submit", (e) => {
    e.preventDefault();
    pageno = 1;
    resultsbox.innerHTML = ""; // clear old results
    imagegenerator();
});

// load more button
getmore.addEventListener("click", () => {
    pageno++;
    imagegenerator();
});
