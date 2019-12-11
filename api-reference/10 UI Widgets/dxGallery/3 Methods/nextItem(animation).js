galleryData = [
    "/Content/images/doc/16_2/PhoneJS/person1.png",
    "/Content/images/doc/16_2/PhoneJS/person2.png",
    "/Content/images/doc/16_2/PhoneJS/person3.png",
    "/Content/images/doc/16_2/PhoneJS/person4.png"
];
showNextItem = function () {
  $(".gallery").dxGallery("instance").nextItem()
    .done(function () { DevExpress.ui.notify("Navigated to next item", "success", 1000); })
};