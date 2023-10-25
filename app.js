

let dtElements = document.querySelectorAll("dt");

for (let i = 0; i < dtElements.length; i++) {
    dtElements[i].addEventListener("click", function () {
        let ddElement = this.nextElementSibling;

        if (ddElement.style.display === "none" || ddElement.style.display === "") {
            ddElement.style.display = "block";
            this.classList.add("expanded");
            dtElements[i].style.fontWeight = "700"
        } else {
            ddElement.style.display = "none";
            this.classList.remove("expanded");
            dtElements[i].style.fontWeight = "400"
        }
    });
}
