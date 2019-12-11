scrollPosition = ko.observable(0);
getScrollPosition = function () {
    scrollPosition($("#tileView").dxTileView("instance").scrollPosition());
};

//An object passed to the dataSource configuration option of the tile view
tileViewDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");

//Generates the path to the required image file
getImagePath = function (name) {
  return "/Content/images/doc/16_2/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};