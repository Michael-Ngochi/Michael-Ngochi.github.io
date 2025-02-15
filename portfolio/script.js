document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            const imgSrc = this.querySelector("img").getAttribute("src").replace("_thumb", "");
            openModal(imgSrc);
        });
    });

    function openModal(imageSrc) {
        modal.style.display = "flex";
        modalImg.src = imageSrc;
    }

    document.querySelector(".close").addEventListener("click", closeModal);

    function closeModal() {
        modal.style.display = "none";
    }

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
