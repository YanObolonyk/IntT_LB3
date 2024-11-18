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
    // Function to update the image source when a new option is selected
    selectElement.addEventListener('change', (event) => {
        const selectedImage = event.target.value;
        imageElement.src = `images/${selectedImage}`;
    });

    // Function to apply changes to image parameters
    const applyChanges = () => {
        // Update width and height
        const width = widthInput.value || 500;
        const height = heightInput.value || 300;
        imageElement.style.width = `${width}px`;
        imageElement.style.height = `${height}px`;

        // Update frame thickness (border width)
        const frameThickness = frameInput.value || 2;
        imageElement.style.borderWidth = `${frameThickness}px`;

        // Update alternative text
        const altText = altTextInput.value || 'Обране зображення';
        imageElement.alt = altText;
    };

    // Add event listeners for 'Enter' key press on number inputs
    [widthInput, heightInput, frameInput].forEach(input => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                applyChanges();
            }
        });
    });

    // Also update on pressing Enter in the alternative text input
    altTextInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            applyChanges();
        }
    });

    imageElement.onload = updateOriginalDimensions;
});
