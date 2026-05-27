import { partnerLogos, productList, partnerLogoBasePath } from "./data.js";

/*========================== Navigation ==========================*/
$(function () {
  // hide show nav
  $(".navbar").hidescroll();


  // mobile dropdown menu
  const toggleBtn = $("#toggle_btn");
  const drodownMenu = $(".dropdown-menu");

  toggleBtn.click(() => {
    drodownMenu.toggleClass("open");
  })
});




/*========================== Partner Logos ==========================*/
$(function () {
  const container = document.getElementById("partner-logo-list");
  partnerLogos.forEach((logo) => {
    const img = document.createElement("img");
    img.src = partnerLogoBasePath + logo.fileName;
    img.alt = logo.alt;
    img.classList.add("logo-ticker-image");
    container.appendChild(img);
  });
});

/*========================== Products ==========================*/
$(function () {
  // thêm activeTab vào li đầu
  $("li:first").addClass("activeTab");

  // đổi màu activeTab
  $("li").on("click", function () {
    $("li").removeClass("activeTab");
    $('div[id="products-tabs"] ul .r-tabs-state-active').addClass("activeTab");
  });

  $("#products-tabs").responsiveTabs({
    animation: "slide",
  });
});
