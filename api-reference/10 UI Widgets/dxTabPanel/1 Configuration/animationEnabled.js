var dataItems = [
        {
            title: "Info",
            data: {
                firstName: "John",
                lastName: "Smith",
                birthYear: 1986,
            }
        },
        {
            title: "Contacts",
            data: {
                phone: "(555)555-5555",
                email: "John.Smith@example.com",
            }
        },
        {
            title: "Address",
            data: {
                state: "CA",
                city: "San Francisco",
                street: "Stanford Ave",
            }
        }
];

//<!--@Knockout-->
var myViewModel = {
    enableAnimation: ko.observable(true),
    tabPanelItems: new DevExpress.data.DataSource({
        store: dataItems,
        map: function (itemData) {
            itemData.text = itemData.title;
            itemData.dataArray = $.map(itemData.data, function (value, key) {
                return {
                    propertyKey: key,
                    propertyValue: value
                }
            });
            return itemData;
        }
    })
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.enableAnimation = true;
    $scope.tabPanelItems = new DevExpress.data.DataSource({
        store: dataItems,
        map: function (itemData) {
            itemData.text = itemData.title;
            itemData.dataArray = $.map(itemData.data, function (value, key) {
                return {
                    propertyKey: key,
                    propertyValue: value
                }
            });
            return itemData;
        }
    });
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTabPanel").dxTabPanel({
    dataSource: dataItems,
    titleTemplate: 'title',
    itemTemplate: 'tab',
    height: 300,
    animationEnabled: true,
    titleTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p>" + itemData.title + "</p>");
    },
    itemTemplate: function (itemData, itemIndex, itemElement) {
        var wrapper = $('<div style="margin: 25px;">');
        wrapper.append("<h1>" + itemData.title + "</h1>");
        wrapper.append("<p>&nbsp;</p>");
        itemElement.append(wrapper);
        var innerWrapper = $('<div style="text-align: left;">');
        wrapper.append(innerWrapper);
        for (var field in itemData.data)
            innerWrapper.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
    }
});
$("#animationSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myTabPanel").dxTabPanel("instance").option("animationEnabled", e.value);
    }
});
//<!--/@jQuery-->
