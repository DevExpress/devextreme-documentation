var flag = false;
var accordionDataSource = new DevExpress.data.DataSource({
    store: [
        {
            title: "Personal Data",
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
    ],
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
//<!--@Knockout-->
var myViewModel = {
    accordionData: accordionDataSource,
    accordionInstance: {},
    onInitialized: function (e) {
        myViewModel.accordionInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.accordionInstance.on(
                "itemTitleClick", function (e) {
                    DevExpress.ui.notify("The '" + e.itemData.text + "' title is clicked", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from itemTitleClick event");
            flag = true;
        } else {
            myViewModel.accordionInstance.off("itemTitleClick");
            e.component.option("text", "Subscribe to itemTitleClick event");
            flag = false;
        }
    }
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.accordionData = accordionDataSource;
    $scope.accordionInstance = {};
    $scope.onInitialized = function (e) {
        $scope.accordionInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.accordionInstance.on(
                "itemTitleClick", function (e) {
                    DevExpress.ui.notify("The '" + e.itemData.text + "' title is clicked", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from itemTitleClick event");
            flag = true;
        } else {
            $scope.accordionInstance.off("itemTitleClick");
            e.component.option("text", "Subscribe to itemTitleClick event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myAccordion").dxAccordion({
    dataSource: accordionDataSource,
    itemTitleTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<h1>" + itemData.title + "</h1>");
    },
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.addClass("item-body");
        var wrapper = $("<div style='margin: 25px;'>");
        itemElement.append(wrapper);
        var innerWrapper = $("<div style='text-align:left;'>");
        wrapper.append(innerWrapper);
        for (var field in itemData.data)
            innerWrapper.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
    }
});
$("#demoBox").dxScrollView({
    showScrollbar: 'always'
});
$("#button").dxButton({
    text: 'Subscribe to itemTitleClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#myAccordion").dxAccordion("instance").on(
                "itemTitleClick", function (e) {
                    DevExpress.ui.notify("The '" + e.itemData.text + "' title is clicked", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from itemTitleClick event");
            flag = true;
        } else {
            $("#myAccordion").dxAccordion("instance").off("itemTitleClick");
            e.component.option("text", "Subscribe to itemTitleClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->