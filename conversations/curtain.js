const curtain = document.querySelector("[data-curtain]");
const stageInner = document.querySelector("[data-stage-inner]");
const track = document.querySelector("[data-track]");

let liftDistance = window.innerHeight;

function layout() {
    liftDistance = window.innerHeight;
    const contentHeight = stageInner.scrollHeight;
    track.style.height = liftDistance + contentHeight + "px";
    render();
}

function render() {
    const y = window.scrollY;

    const lift = Math.min(y, liftDistance);
    curtain.style.transform = "translateY(" + -lift + "px)";

    const contentScroll = Math.max(0, y - liftDistance);
    stageInner.style.transform = "translateY(" + -contentScroll + "px)";
}

let ticking = false;
function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
        render();
        ticking = false;
    });
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", layout);

layout();
window.addEventListener("load", layout);
if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(layout);
}

if (window.videojs) {
    document.querySelectorAll(".video-js").forEach((el) => {
        window.videojs(el).ready(layout);
    });
}
