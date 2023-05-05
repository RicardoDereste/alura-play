import { connectApi } from "./connectApi.js";
import buildCard from "./showVideos.js";

async function searchVideo(event) {
    event.preventDefault();

    const dataSearch = document.querySelector("[data-search]").value;
    const search = await connectApi.searchVideo(dataSearch);

    const list = document.querySelector("[data-list]");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(buildCard(element.title, element.description, element.url, element.image)))

    if (search.length == 0) {
        list.innerHTML = `<h2 class="message-title">There are no videos with this term</h2>`
    }
}

const buttonSearch = document.querySelector("[data-button-search]");

buttonSearch.addEventListener("click", event => searchVideo(event))