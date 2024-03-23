window.addEventListener('DOMContentLoaded', (event) => {
    if (window.innerWidth <= 600) { // Si la pantalla es de 600px o menos
        document.querySelector("#services").parentNode.addEventListener("click", function(event) {

            var ul = document.getElementById("ul");
            var dropdown = this.querySelector(".dropdown");
            if (dropdown.style.display === "none" || dropdown.style.display === "") {
                dropdown.style.display = "flex";
                dropdown.style.flexDirection = "column";
                dropdown.style.width = "100%";
                ul.style.paddingTop = '0px'; 
            } else {
                dropdown.style.display = "none";
            }
        });
    }
});