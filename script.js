function toggleDropdown(id, btn) {
  let content = document.getElementById(id);
  let arrow = btn.querySelector(".arrow");

  if (content.style.display === "block") {
      content.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
  } else {
      content.style.display = "block";
      arrow.style.transform = "rotate(180deg)";
  }
}
