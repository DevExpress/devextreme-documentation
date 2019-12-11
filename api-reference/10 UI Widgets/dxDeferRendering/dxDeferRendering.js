var modelIsReady = $.Deferred();

//Loads json data and passes it to the DataSource
var getData = function () {
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            myViewModel.listDataSource.store().insert(data[i]);
        }
        myViewModel.listDataSource.load().done(function () {
            modelIsReady.resolve();
        });

    }, "json");
};

setTimeout(getData, 3000);

var myViewModel = {
    listDataSource: new DevExpress.data.DataSource({ store: [], paginate: false }),
    getImagePath: function (name) {
        if (name === undefined)
            return;
        return "/Content/images/doc/16_1/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
    },
    modelIsReady: modelIsReady.promise()
};

ko.applyBindings(myViewModel);
