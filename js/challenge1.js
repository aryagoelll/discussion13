window.addEventListener("load", function() {
    console.log(document.querySelector("h1"))
    this.document.querySelector("h1").classList.add("heading")
})

document.addEventListener('dblclick', function() {
    console.log("Current Time: " + currentTime);
    var currentTime = new Date().toLocaleTimeString();
    alert("Current Time: " + currentTime);
});

var toggleCheckbox = document.getElementById("toggle");
      toggleCheckbox.addEventListener("click", function() {
        var emailBox = document.getElementById("emailBox");
        if (toggleCheckbox.checked) {
          emailBox.classList.remove("hidden");
        } else {
          emailBox.classList.add("hidden");
        }
});
