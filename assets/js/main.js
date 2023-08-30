// (window.onscroll = function () {
//   var e = document.querySelector(".navbar-area"),
//     o = e.offsetTop;
//   window.pageYOffset > o
//     ? e.classList.add("sticky")
//     : e.classList.remove("sticky");
//   var t = document.querySelector(".scroll-top");
//   document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
//     ? (t.style.display = "flex")
//     : (t.style.display = "none");
// }),
  window.document.addEventListener("scroll", function (e) {
    for (
      var o = document.querySelectorAll(".page-scroll"),
        t =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop,
        l = 0;
      l < o.length;
      l++
    ) {
      var c = o[l],
        r = c.getAttribute("href"),
        s = document.querySelector(r),
        n = t + 73;
      s.offsetTop <= n && s.offsetTop + s.offsetHeight > n
        ? (document.querySelector(".page-scroll").classList.remove("active"),
          c.classList.add("active"))
        : c.classList.remove("active");
    }
  }),
  document.querySelectorAll(".page-scroll").forEach((e) => {
    e.addEventListener("click", (o) => {
      o.preventDefault(),
        document
          .querySelector(e.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth", offsetTop: -59 });
    });
  });

  var removeBranding = function() {
    try {
        var element = document.querySelector("iframe[title*=chat]:nth-child(2)").contentDocument.querySelector(`a[class*=tawk-branding]`)

        if (element) {
            element.remove()
        }
    } catch (e) {}
}

var tick = 100

setInterval(removeBranding, tick)



