const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const url = document.URL;

function share(event){
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    event.stopPropagation();
}

function tutup() {
    const modal = document.getElementById("modal");
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
}

overlay.addEventListener("click", () => {
    tutup();
});