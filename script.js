const pressableImages = document.querySelectorAll("[data-normal-src][data-pressed-src]");

pressableImages.forEach((image) => {
    const normalSrc = image.dataset.normalSrc;
    const pressedSrc = image.dataset.pressedSrc;

    const preloadPressedImage = new Image();
    preloadPressedImage.src = pressedSrc;

    image.addEventListener("mouseenter", () => {
        image.src = pressedSrc;
    });

    image.addEventListener("mouseleave", () => {
        image.src = normalSrc;
    });
});