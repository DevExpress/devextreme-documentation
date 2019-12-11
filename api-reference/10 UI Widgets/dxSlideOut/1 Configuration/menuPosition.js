//<!--@Knockout-->
viewModel = {
    slideOutItems: [
        {text: "item 1"},
        {text: "item 2"},
        {text: "item 3"},
        {text: "item 4"},
        {text: "item 5"}
    ],
    showMenu: ko.observable(false),
    menuPositionValue: ko.observable('normal'),
    changeMenuVisibility: function () {
        viewModel.showMenu(!viewModel.showMenu());
    }
};
ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.slideOutItems = [
        { text: "item 1" },
        { text: "item 2" },
        { text: "item 3" },
        { text: "item 4" },
        { text: "item 5" }
    ];
    $scope.showMenu = false;
    $scope.changeMenuVisibility = function () {
        $scope.showMenu = !$scope.showMenu;
    }
    $scope.menuPositionValue = 'normal';
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySlideOut").dxSlideOut({
    dataSource: [
        { text: "item 1" },
        { text: "item 2" },
        { text: "item 3" },
        { text: "item 4" },
        { text: "item 5" }
    ],
    onItemClick: function () {
        $("#mySlideOut").dxSlideOut("instance").hideMenu();
    },
    itemTemplate: function (itemData, itemIndex, itemElement) {
        var button = $("<div>").dxButton({
            text: 'Show Menu',
            onClick: function () {
                $("#mySlideOut").dxSlideOut("instance").showMenu();
            }
        });
        itemElement.append(button);
        var fieldLabel = $('<div class="dx-field-value"></div>');
        var selectBox = $("<div>").dxSelectBox({
            items: ['normal', 'inverted'],
            value: 'normal',
            onValueChanged: function (e) {
                $("#mySlideOut").dxSlideOut("instance").option("menuPosition", e.value);
            }
        });
        fieldLabel.append(selectBox);
        var field = $('<div class="dx-field">');
        field.append('<div class="dx-field-label">Menu position:</div>');
        field.append(fieldLabel);
        var fieldSet = $('<div class="dx-fieldset">');
        fieldSet.append(field);
        itemElement.append(fieldSet);
    }
});
//<!--/@jQuery-->
