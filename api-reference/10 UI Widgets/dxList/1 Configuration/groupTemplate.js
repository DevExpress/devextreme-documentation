//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource({
        store: [],
        group: function (dataItem) {
            return dataItem.name.charAt(0);
        },
        postProcess: function (items) {
            for (var i = 0; i < items.length; i++)
                if (items[i].items.length > 1)
                    items[i].boundaryItems = items[i].items[0].name + " - " + items[i].items[items[i].items.length - 1].name;
                else
                    items[i].boundaryItems = items[i].items[0].name;
            return items;
        }
    }),
    groupTemplates: ["brief", "full"],
    currentTemplate: ko.observable("brief")
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.listDataSource.store().insert(data[i]);
    }
    myViewModel.listDataSource.load();
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource({
        store: [],
        group: function (dataItem) {
            return dataItem.name.charAt(0);
        },
        postProcess: function (items) {
            for (var i = 0; i < items.length; i++)
                if (items[i].items.length > 1)
                    items[i].boundaryItems = items[i].items[0].name + " - " + items[i].items[items[i].items.length - 1].name;
                else
                    items[i].boundaryItems = items[i].items[0].name;
            return items;
        }
    });
    $scope.groupTemplates = ["brief", "full"];
    $scope.currentTemplate = "brief";
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.listDataSource.store().insert(data[i]);
        }
        $scope.listDataSource.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var listDataSource = new DevExpress.data.DataSource({
    store: [],
    group: function (dataItem) {
        return dataItem.name.charAt(0);
    },
    postProcess: function (items) {
        for (var i = 0; i < items.length; i++)
            if (items[i].items.length > 1)
                items[i].boundaryItems = items[i].items[0].name + " - " + items[i].items[items[i].items.length - 1].name;
            else
                items[i].boundaryItems = items[i].items[0].name;
        return items;
    }
});
var briefTemplate = function (groupData, groupIndex, groupElement) {
    groupElement.append("<h1 style=\"color:blue; text-align: left;\">"+ groupData.key + "</h1>");
};
var fullTemplate = function (groupData, groupIndex, groupElement) {
    groupElement.append("<span style=\"color:red; font-size:larger;\">" + groupData.key + "&nbsp;</span>" + groupData.boundaryItems);
};
$("#myList").dxList({
    height: '80%',
    dataSource: listDataSource,
    grouped: true,
    groupTemplate: briefTemplate,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$("#templateSelector").dxSelectBox({
    dataSource: ["brief", "full"],
    value: "brief",
    onValueChanged: function (e) {
        var list = $("#myList").dxList("instance");
        list.option("groupTemplate", e.value == "brief" ? briefTemplate : fullTemplate);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        listDataSource.store().insert(data[i]);
    }
    listDataSource.load();
}, "json");
//<!--/@jQuery-->