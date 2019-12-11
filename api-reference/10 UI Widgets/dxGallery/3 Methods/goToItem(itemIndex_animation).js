galleryData = [
    "/Content/images/doc/16_2/PhoneJS/person1.png",
    "/Content/images/doc/16_2/PhoneJS/person2.png",
    "/Content/images/doc/16_2/PhoneJS/person3.png",
    "/Content/images/doc/16_2/PhoneJS/person4.png"
];
goTo1Item = function () { goToItem(0); };
goTo2Item = function () { goToItem(1); };
goTo3Item = function () { goToItem(2); };
goTo4Item = function () { goToItem(3); };
goToItem = function (i) {
  $(".gallery").dxGallery("instance").goToItem(i, true)
    .done(function () { DevExpress.ui.notify("Navigated to " + (i + 1) + " item", "success", 1000); })
};
targetItem = ko.observable(4);