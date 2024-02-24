const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
let url = null; // variabel global

function share(event, link){
    event.stopPropagation();
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    url = link;
}

function tutup() {
    const modal = document.getElementById("modal");
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    url = null;
}

function share_link(api,comment) {
    let link = api + url + comment;
    //alert(link);
    window.open(link,'_blank');
}

overlay.addEventListener("click", () => {
    url = null;
    tutup();
});