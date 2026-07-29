const secret = document.getElementById("secretMessage");

secret.addEventListener("click", function () {

    if (this.dataset.decoded) return;

    this.dataset.decoded = "true";

    this.style.opacity = "0";

    setTimeout(() => {
        this.textContent = atob(this.textContent.trim());
        this.classList.add("decoded");
        this.style.opacity = "1";
    }, 250);

});