async function listvideos() {
    const connection = await fetch("http://localhost:3000/videos");
    const connectionConverted = await connection.json();
    
    return connectionConverted;
}

async function createVideo(title, description, url, image) {
    const connection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: `${description} mil visualizações`,
            url: url,
            image: image
        })
    });

    if (!connection.ok) {
        throw new Error("Unable to send the video");
    }

    const connectionConverted = await connection.json();
    return connectionConverted;
}

async function searchVideo(searchTerm) {
    const connection = await fetch(`http://localhost:3000/videos?q=${searchTerm}`)
    const connectionConverted = connection.json();

    return connectionConverted;
}

export const connectApi = {
    listvideos,
    createVideo,
    searchVideo
}