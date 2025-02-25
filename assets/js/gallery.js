document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".photo");
    const positions = ["photo-1", "photo-2", "photo-3"];

    setInterval(() => {
        // Получаем текущие классы элементов
        let currentClasses = Array.from(images).map(img =>
            positions.find(pos => img.classList.contains(pos))
        );

        // Меняем классы местами по кругу
        images.forEach((img, index) => {
            img.classList.remove(...positions);
            img.classList.add(currentClasses[(index + 2) % positions.length]); // Смещаем на один шаг назад
        });

    }, 5000); // Менять классы каждые 2 секунды
});