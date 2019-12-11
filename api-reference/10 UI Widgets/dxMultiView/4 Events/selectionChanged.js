var flag = false;
//<!--@Knockout-->
var myViewModel = {
    currentIndex: ko.observable(0),
    goForward: function () {
        if (this.currentIndex() == this.multiViewItems.items().length - 1)
            this.currentIndex(0);
        else
            this.currentIndex(this.currentIndex() + 1);
    },
    goBack: function () {
        if (this.currentIndex() == 0)
            this.currentIndex(this.multiViewItems.items().length - 1);
        else
            this.currentIndex(this.currentIndex() - 1);
    },
    multiViewItems: new DevExpress.data.DataSource({
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
    }),
    multiViewInstance: {},
    initializedHandler: function (e) {
        myViewModel.multiViewInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.multiViewInstance.on(
				"selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].title + "\" item is selected", "success", 1500); }
			);
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            myViewModel.multiViewInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.currentIndex = 0;
    $scope.goForward = function () {
        if ($scope.currentIndex == $scope.multiViewItems.items().length - 1)
            $scope.currentIndex = 0;
        else
            $scope.currentIndex++;
    }
    $scope.goBack = function () {
        if ($scope.currentIndex == 0)
            $scope.currentIndex = $scope.multiViewItems.items().length - 1;
        else
            $scope.currentIndex--;
    }
    $scope.multiViewItems = new DevExpress.data.DataSource({
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
        ]
    });
    $scope.multiViewInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.multiViewInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.multiViewInstance.on(
				"selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].title + "\" item is selected", "success", 1500); }
			);
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            $scope.multiViewInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var multiViewItems = new DevExpress.data.DataSource({
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
    ]
});
$("#myMultiView").dxMultiView({
    dataSource: multiViewItems,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        wrapper = $("<div style='margin:25px;'>");
        wrapper.append("<h1>" + itemData.title + "</h1>");
        wrapper.append("<p>&nbsp;</p>");
        var innerWrapper = $("<div style='text-align:left;'>");
        for (var field in itemData.data)
            innerWrapper.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
        wrapper.append(innerWrapper);
        itemElement.append(wrapper);
    }
});
$("#backButton").dxButton({
    text: '<< prev',
    onClick: function () {
        var multiView = $("#myMultiView").dxMultiView("instance");
        if (multiView.option("selectedIndex") == 0)
            multiView.option("selectedIndex", multiViewItems.items().length - 1);
        else
            multiView.option("selectedIndex", multiView.option("selectedIndex") - 1);
    }
});
$("#forwardButton").dxButton({
    text: 'next >>',
    onClick: function () {
        var multiView = $("#myMultiView").dxMultiView("instance");
        if (multiView.option("selectedIndex") == multiViewItems.items().length - 1)
            multiView.option("selectedIndex", 0);
        else
            multiView.option("selectedIndex", multiView.option("selectedIndex") + 1);
    }
});
$("#myButton").dxButton({
    text: 'Subscribe to SelectionChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myMultiView").dxMultiView("instance")
                .on(
                    "selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].title + "\" item is selected", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            $("#myMultiView").dxMultiView("instance").off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->