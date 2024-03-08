const cv_btn = document.getElementById("download_cv");

const userLang = navigator.language || navigator.userLanguage;

if (userLang == "es") {
  cv_btn.href = "Assets/Documents/CV_David_Martin_ESP.pdf"; // TODO: fix this (not working properly)
} else {
  cv_btn.href = "Assets/Documents/CV_David_Martin_ENG.pdf";
}
