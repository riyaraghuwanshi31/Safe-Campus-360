// Highligth on hover Store
var paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (paragraph) {
  paragraph.addEventListener("mouseenter", function () {
    var hoveritem = "#" + this.id + "map";
    var storeMap = document.querySelector(hoveritem);
    storeMap.style.fill = "var(--highligthcolor)";
    this.style.backgroundColor = "var(--highligthcolor)";
  });

  paragraph.addEventListener("mouseleave", function () {
    var hoveritem = "#" + this.id + "map";
    var storeMap = document.querySelector(hoveritem);
    storeMap.style.fill = "var(--colortop)";
    this.style.backgroundColor = "var(--colortop)";
  });
});

// Highligth on hover Map
var st0Elements = document.querySelectorAll(".st0");

st0Elements.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    var hoveritem = "#" + this.id.slice(0, -3);
    var mapArea = document.querySelector(hoveritem);
    this.style.fill = "var(--highligthcolor)";
    mapArea.style.backgroundColor = "var(--highligthcolor)";
  });

  element.addEventListener("mouseleave", function () {
    var hoveritem = "#" + this.id.slice(0, -3);
    var mapArea = document.querySelector(hoveritem);
    this.style.fill = "var(--colortop)";
    mapArea.style.backgroundColor = "var(--colortop)";
  });
});
