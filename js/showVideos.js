import { connectApi } from "./connectApi.js";

const list = document.querySelector("[data-list]");

export default function buildCard(title, description, url, image) {
    const video = document.createElement("li");
    video.className = "videos-item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${title}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="description-video">
        <img src="${image}" alt="logo canal alura">
        <h3>${title}</h3>
        <p>${description}</p>
    </div>
    `
    return video;
}

async function listvideos() {
    try {
    const listApi = await connectApi.listvideos();
    listApi.forEach(element => list.appendChild(buildCard(element.title, element.description, element.url, element.image)))
    } catch {
        list.innerHTML = `<h2 class="message-title">Unable to load video list</h2>`
    }
}

listvideos();