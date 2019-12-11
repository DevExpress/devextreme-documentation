//<!--@Knockout-->
var myViewModel = {
    actionSheetVisible: ko.observable(false),
    itemTemplates: ['buttons', 'links'],
    currentItemTemplate: ko.observable('buttons'),
    actionSheetData: [
        { text: "Reply", icon: 'arrowleft' },
        { text: "ReplyAll", icon: 'arrowleft' },
        { text: "Forward", icon: 'arrowright' },
        { text: "Delete", icon: 'close' }
    ],
    showActionSheet: function () {
        this.actionSheetVisible(true);
    },
    itemClicked: function (e) {
        DevExpress.ui.notify(e.itemData.text + " clicked", "success", 3000);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.actionSheetVisible = false;
    $scope.itemTemplates = ['buttons', 'links'],
    $scope.currentItemTemplate = 'buttons',
    $scope.actionSheetData = [
        { text: "Reply", icon: 'arrowleft' },
        { text: "ReplyAll", icon: 'arrowleft' },
        { text: "Forward", icon: 'arrowright' },
        { text: "Delete", icon: 'close' }
    ],
    $scope.showActionSheet = function () {
        $scope.actionSheetVisible = true;
    };
    $scope.itemClicked = function (e) {
        DevExpress.ui.notify(e.itemData.text + " clicked", "success", 3000);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var linksTemplate = function (itemData, itemIndex, itemElement) {
    var linkContainer = $("<div class=\"actionSheetButton\">");
    linkContainer.append("<a href=\"#\">" + itemData.text + "</a>");
    itemElement.append(linkContainer);
};
var buttonsTemplate = function (itemData, itemIndex, itemElement) {
    itemElement.dxButton({
        text: itemData.text,
        icon: itemData.icon
    });
};
$("#showButton").dxButton({
    text: 'Show action sheet',
    onClick: function () {
        $("#myActionSheet").dxActionSheet("instance").show();
    }
});
$("#templateSelector").dxSelectBox({
    dataSource: ['buttons', 'links'],
    value: 'buttons',
    onValueChanged: function (e) {
        var actionSheet = $("#myActionSheet").dxActionSheet("instance");
        actionSheet.option("itemTemplate", e.value === 'buttons' ? buttonsTemplate : linksTemplate );
    }
});
$("#myActionSheet").dxActionSheet({
    dataSource: [
        { text: "Reply", icon: 'arrowleft' },
        { text: "ReplyAll", icon: 'arrowleft' },
        { text: "Forward", icon: 'arrowright' },
        { text: "Delete", icon: 'close' }
    ],
    title: 'Choose action',
    showTitle: true,
    itemTemplate: buttonsTemplate,
    onItemClick: function (e) {
            DevExpress.ui.notify(e.itemData.text + " clicked", "success", 3000);
    }
});
//<!--/@jQuery-->