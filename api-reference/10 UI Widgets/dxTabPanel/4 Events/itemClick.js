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
var flag = false;
//<!--@Knockout-->
var myViewModel = {
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
    }),
    tabPanelInstance: {},
    initializedHandler: function (e) {
        myViewModel.tabPanelInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.tabPanelInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.title + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            myViewModel.tabPanelInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
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
    $scope.tabPanelInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.tabPanelInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.tabPanelInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.title + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $scope.tabPanelInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTabPanel").dxTabPanel({
    dataSource: dataItems,
    height: 300,
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
$("#myButton").dxButton({
    text: 'Subscribe to ItemClick event',
    onClick: function(e){
        if (flag === false) {
            $("#myTabPanel").dxTabPanel("instance")
                .on(
                    "itemClick", function(e){ DevExpress.ui.notify("The \""+ e.itemData.title +"\" item is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $("#myTabPanel").dxTabPanel("instance").off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
