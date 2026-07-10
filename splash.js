let splashContainer = document.querySelector(".splash");
let vowels = document.querySelectorAll(".vowel");
let consonants = document.querySelectorAll(".consonant");

vowels.forEach((vowel) =>
    vowel.addEventListener("mouseover", () => {
        splashContainer.classList.toggle("mask-on");
    })
);

consonants.forEach((consonant) => {
    consonant.addEventListener("mouseover", () => {
        let splashClasses = splashContainer.classList;

        splashClasses.forEach((item) => {
            if (item.startsWith("letter-")) {
                splashClasses.remove(item);
            }
        });

        let classToAdd = "letter-" + consonant.dataset.letter;
        splashClasses.add(classToAdd);
    });
});
