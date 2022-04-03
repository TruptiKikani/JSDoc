
let a = document.getElementsByClassName("tagParent");

console.log(a);

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

