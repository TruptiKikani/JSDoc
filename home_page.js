let dropdown = document.getElementsByClassName("Parent");

let i;
// console.log(dropdown);
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    // console.log(this);
    let dropdownContent = this.nextElementSibling;
    // console.log(dropdownContent);
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
