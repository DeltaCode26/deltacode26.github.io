function myFunction() {
  let x = document.getElementById("links");
  if (x.classList.contains("show")) {
    x.classList.remove("show", "overlay");
  } else {
    x.classList.add("show", "overlay");
  }
}
