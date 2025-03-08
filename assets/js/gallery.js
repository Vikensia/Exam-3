document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".photo");
    const positions = ["photo-1", "photo-2", "photo-3"];

    setInterval(() => {
        let currentClasses = Array.from(images).map(img =>
            positions.find(pos => img.classList.contains(pos))
        );

        images.forEach((img, index) => {
            img.classList.remove(...positions);
            img.classList.add(currentClasses[(index + 2) % positions.length]);
        });

    }, 5000);
});