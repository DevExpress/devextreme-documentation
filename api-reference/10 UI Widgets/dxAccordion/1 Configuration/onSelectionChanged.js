//<!--@Knockout-->
var myViewModel = {
    expandedDisplayStyle: ko.observable("none"),
    collapsedDisplayStyle: ko.observable("none"),
    expandedItem: ko.observable(""),
    collapsedItem: ko.observable(""),
    toastVisible: ko.observable(false),
    selectionChanged: function (e) {
        if (e.addedItems.length > 0) {
            this.expandedDisplayStyle("inline");
            this.expandedItem(e.addedItems[0].title);
        }
        else
            this.expandedDisplayStyle("none");
        if (e.removedItems.length > 0) {
            this.collapsedDisplayStyle("inline");
            this.collapsedItem(e.removedItems[0].title);
        }
        else
            this.collapsedDisplayStyle("none");
        this.toastVisible(true);
    },
    accordionData: new DevExpress.data.DataSource({
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
    })
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.expandedDisplayStyle = "none",
    $scope.collapsedDisplayStyle = "none",
    $scope.expandedItem = "",
    $scope.collapsedItem = "",
    $scope.toastVisible = false,
    $scope.selectionChanged = function (e) {
        if (e.addedItems.length > 0) {
            $scope.expandedDisplayStyle = "inline";
            $scope.expandedItem = e.addedItems[0].title;
        }
        else
            $scope.expandedDisplayStyle = "none";
        if (e.removedItems.length > 0) {
            $scope.collapsedDisplayStyle = "inline";
            $scope.collapsedItem = e.removedItems[0].title;
        }
        else
            $scope.collapsedDisplayStyle = "none";
        $scope.toastVisible = true;
    },
    $scope.accordionData = new DevExpress.data.DataSource({
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
    })
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
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
$("#myAccordion").dxAccordion({
    dataSource: accordionDataSource,
    collapsible: true,
    onSelectionChanged: function (e) {
        $("#toast").dxToast("instance").show();
        if (e.addedItems.length > 0) {
            $("#expanded").css({ "display": "inline" });
            $("#expandedTitle").text(e.addedItems[0].title);
        }
        else {
            $("#expanded").css({ "display": "none" });
        }
        if (e.removedItems.length > 0) {
            $("#collapsed").css({ "display": "inline" });
            $("#collapsedTitle").text(e.removedItems[0].title);
        }
        else {
            $("#collapsed").css({ "display": "none" });
        }
    },
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
$("#toast").dxToast({
    type: 'custom',
    displayTime: 2000
});
//<!--/@jQuery-->