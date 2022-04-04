let parent = document.querySelector(".tagParent");

for (let i = 0; i < parent.length; i++) {
  parent[i].addEventListener("mouseover", function (e) {
    if (e.target.children.length > 0) {
      e.target.children[0].style.opacity = "100";
    }
  });

  parent[i].addEventListener("mouseout", function (e) {
    if (e.target.children.length > 0) {
      e.target.children[0].style.opacity = "0";
    }
  });
}

let dropdown = document.getElementsByClassName("Parent");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

let collectOpt = document.getElementsByClassName("SCROLL");
for (i = 0; i < collectOpt.length; i++) {
  collectOpt[i].addEventListener("click", function (e) {
    for (j = 0; j < collectOpt.length; j++) { 
      collectOpt[j].style.color = ""
    }
    e.target.style.color = "#8b82f1";
    const elemId = e.target.id;
    window.scrollTo(
      0,
      document.getElementsByClassName(`${elemId}`)[0].offsetTop -
        document.getElementsByClassName("Header")[0].offsetHeight
    );
  });
}
