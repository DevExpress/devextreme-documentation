//<!--@Knockout-->
viewModel = {
    slideOutItems: [
        { text: "item 1" },
        { text: "item 2" },
        { text: "item 3" },
        { text: "item 4" },
        { text: "item 5" }
    ],
    showMenu: ko.observable(false),
    changeMenuVisibility: function () {
        viewModel.showMenu(!viewModel.showMenu());
    },
    swipeEnabledValue: ko.observable(true)
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
    $scope.swipeEnabledValue = true;
    $scope.changeMenuVisibility = function () {
        $scope.showMenu = !$scope.showMenu;
    }
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
    contentTemplate: function (contentElement) {
        var button = $("<div>").dxButton({
            text: 'Show Menu',
            onClick: function () {
                $("#mySlideOut").dxSlideOut("instance").option('menuVisible', true);
            }
        });
        contentElement.append(button);
        var fieldLabel = $('<div class="dx-field-value"></div>');
        var switchSelector = $("<div>").dxSwitch({
            value: false,
            onValueChanged: function (e) {
                $("#mySlideOut").dxSlideOut("instance").option('swipeEnabled', e.value);
            }
        });
        fieldLabel.append(switchSelector);
        var field = $('<div class="dx-field">');
        field.append('<div class="dx-field-label">swipeEnabled:</div>');
        field.append(fieldLabel);
        var fieldSet = $('<div class="dx-fieldset">');
        fieldSet.append(field);
        contentElement.append(fieldSet);
    }
});
//<!--/@jQuery-->
