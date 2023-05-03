var acontent = document.querySelectorAll(".accordion-content");
var atitle = document.querySelectorAll(".accordion-content .title");
for (i = 0; i < atitle.length; i++) {
  atitle[i].onclick = function () {
    var contentClass = this.parentNode.className;

    for (i = 0; i < acontent.length; i++) {
      acontent[i].className = "accordion-content hide";
    }

    if (contentClass == "accordion-content hide") {
      this.parentNode.className = "accordion-content show";
    }
  };
}
