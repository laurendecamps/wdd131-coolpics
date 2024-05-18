function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
        const src = event.target.getAttribute('src');
        const imagePathParts = src.split('-');
        const fullImagePath = imagePathParts[0] + '-full.jpeg';
        const viewerHTML = viewerTemplate(fullImagePath, event.target.alt);
        document.body.insertAdjacentHTML('afterbegin', viewerHTML);
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);
