document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".carousel__track");
    const slides = carousel.querySelectorAll(".carousel__slide");
    const prev = carousel.querySelector(".carousel__arrow--prev");
    const next = carousel.querySelector(".carousel__arrow--next");

    if (!track || slides.length === 0) return;

    let index = 0;

    const update = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
    };

    prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        update();
    });

    next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        update();
    });
});
