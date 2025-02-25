document.addEventListener("DOMContentLoaded", function() {
  // Get the elements
  const menuIcon = document.getElementById("icon");
  const menuList = document.getElementById("list");
  const closeIcon = document.querySelector("#list i.fa-xmark");

  // Toggle the menu visibility when the hamburger icon is clicked
  menuIcon.addEventListener("click", function() {
      menuList.classList.toggle("hidden");
  });

  // Close the menu when the close icon (x) is clicked
  closeIcon.addEventListener("click", function() {
      menuList.classList.add("hidden");
  });
});


