let a = document.getElementsByClassName("tagParent");

// console.log(a);

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseover", function (e) {
        if (e.target.children.length > 0) {
            e.target.children[0].style.opacity = "100"
        }
    })

    a[i].addEventListener("mouseout", function (e) {
        if (e.target.children.length > 0) {
            e.target.children[0].style.opacity = "0"
        }
    })

}

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

let collectOpt = document.getElementsByClassName("SCROLL");
// console.log(collectOpt);
for (i = 0; i < collectOpt.length; i++){
    collectOpt[i].addEventListener("click", function (e) {
        const elemId = e.target.id
        // let OptContent = document.getElementsByClassName("Docs");
        // console.log(OptContent[0]);
        window.scrollTo(0, document.getElementsByClassName(`${elemId}`)[0].offsetTop -
            document.getElementsByClassName('Header')[0].offsetHeight);
    })
}

