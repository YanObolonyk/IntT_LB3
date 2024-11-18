document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('image-select');
    const imageElement = document.getElementById('display-image');
    const widthInput = document.getElementById('image-width');
    const heightInput = document.getElementById('image-height');
    const frameInput = document.getElementById('frame-thickness');
    const altTextInput = document.getElementById('alt-text');
    const originalWidthElement = document.getElementById('original-width');
    const originalHeightElement = document.getElementById('original-height');

    const updateOriginalDimensions = () => {
        originalWidthElement.textContent = imageElement.naturalWidth;
        originalHeightElement.textContent = imageElement.naturalHeight;
    };
   
    selectElement.addEventListener('change', (event) => {
        const selectedImage = event.target.value;
        imageElement.src = `images/${selectedImage}`;
    });

    
    const applyChanges = () => {
        
        const width = widthInput.value || 500;
        const height = heightInput.value || 300;
        imageElement.style.width = `${width}px`;
        imageElement.style.height = `${height}px`;
       
        const frameThickness = frameInput.value || 2;
        imageElement.style.borderWidth = `${frameThickness}px`;

        const altText = altTextInput.value || 'Обране зображення';
        imageElement.alt = altText;
    };

    [widthInput, heightInput, frameInput].forEach(input => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                applyChanges();
            }
        });
    });

    altTextInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            applyChanges();
        }
    });

    imageElement.onload = updateOriginalDimensions;
});
