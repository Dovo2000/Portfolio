const items = document.querySelectorAll(".button_list li");

items.forEach((item) => {
  item.addEventListener("click", function () {
    // Get the selected state of the clicked element
    let selected = this.classList.contains("selected");
    items.forEach((el) => el.classList.remove("selected"));
    // Toggle the selected state of the clicked element
    if (selected) {
      this.classList.remove("selected");
    } else {
      this.classList.add("selected");
    }
  });
});

setCVLanguage();

function setCVLanguage() {
  const cv_btn = document.getElementById("download_cv");

  const userLang = navigator.language || navigator.userLanguage;
  if (userLang == "es") {
    cv_btn.href = "Assets/Documents/CV_David_Martin_ESP.pdf";
  } else {
    cv_btn.href = "Assets/Documents/CV_David_Martin_ENG.pdf";
  }
}
