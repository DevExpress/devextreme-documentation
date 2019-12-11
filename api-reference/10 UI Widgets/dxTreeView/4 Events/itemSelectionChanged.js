var dataArray = [
    {
        id: 1,
        text: "Animals",
        items: [
                { id: 2, text: "Abyssinian cat" },
                { id: 3, text: "Abyssinian cat" },
                { id: 4, text: "Aegean cat" },
                { id: 5, text: "Australian Mist cat" },
                { id: 6, text: "Affenpinscher dog" },
                { id: 7, text: "Afghan Hound dog" },
                { id: 8, text: "Airedale Terrier dog" },
                { id: 9, text: "Akita Inu dog" }
        ]
    },
    {
        id: 10,
        parentId: 0,
        text: "Birds",
        items: [
            { id: 11, text: "Akekee" },
            { id: 12, text: "Arizona Woodpecker" },
            { id: 13, text: "Black-chinned Sparrow" }
        ]
    }
];//<!--@Knockout-->
var checkedItems = ko.observableArray([]);
function isCreature(data) {
    return !data.items.length;
};
function processCreature(creature) {
    var itemIndex = -1;
    $.each(checkedItems, function (index, item) {
        if (item.key === creature.key) {
            itemIndex = index;
            return false;
        }
    })
    if (creature.selected && itemIndex === -1) {
        checkedItems.push(creature);
    } else if (!creature.selected) {
        checkedItems.splice(itemIndex, 1);
    }
};
var myViewModel = {
    checkedItems: checkedItems,
    treeViewData: dataArray,
    treeViewInstance: {},
    initializedHandler: function (e) {
        e.component.on(
        "itemSelectionChanged", function (e) {
                                    var item = e.node;
                                    if (isCreature(item)) {
                                        processCreature($.extend({
                                            category: item.parent.text
                                        }, item))
                                    } else {
                                        $.each(item.items, function (index, creature) {
                                            processCreature($.extend({
                                                category: item.text
                                            }, creature));
                                        })
                                    }
                                }
        );
    }
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.checkedItems = [];
    function isCreature(data) {
        return !data.items.length;
    };
    function processCreature(creature) {
        var itemIndex = -1;

        $.each($scope.checkedItems, function (index, item) {
            if (item.key === creature.key) {
                itemIndex = index;
                return false;
            }
        })

        if (creature.selected && itemIndex === -1) {
            $scope.checkedItems.push(creature);
        } else if (!creature.selected) {
            $scope.checkedItems.splice(itemIndex, 1);
        }
    };

    $scope.treeViewData = dataArray;
    $scope.treeViewInstance = {};
    $scope.initializedHandler = function (e) {
        e.component.on(
            "itemSelectionChanged", function (e) {
                                        var item = e.node;
                                        if (isCreature(item)) {
                                            processCreature($.extend({
                                                category: item.parent.text
                                            }, item))
                                        } else {
                                            $.each(item.items, function (index, creature) {
                                                processCreature($.extend({
                                                    category: item.text
                                                }, creature));
                                            })
                                        }
                                    }
                                );
                            }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var checkedItems = [];
function isCreature(data) {
    return !data.items.length;
};
function processCreature(creature) {
    var itemIndex = -1;
    $.each(checkedItems, function (index, item) {
        if (item.key === creature.key) {
            itemIndex = index;
            return false;
        }
    })

    if (creature.selected && itemIndex === -1) {
        checkedItems.push(creature);
    } else if (!creature.selected) {
        checkedItems.splice(itemIndex, 1);
    }
};
$("#myTreeView").dxTreeView({
    dataSource: dataArray,
    width: "auto",
    showCheckBoxesMode: 'normal',
    onInitialized: function (e) {
        e.component.on(
        "itemSelectionChanged", function (e) {
            var item = e.node;
            if (isCreature(item)) {
                processCreature($.extend({
                    category: item.parent.text
                }, item))
            } else {
                $.each(item.items, function (index, creature) {
                    processCreature($.extend({
                        category: item.text
                    }, creature));
                })
            }
            $("#myList").dxList("instance").option("items", checkedItems);
        }
        );
    }
});
$("#myList").dxList({
    items: checkedItems,
    itemTemplate: function (data) {
        return "<p>" + data.text + "</p>";
    }
});
//<!--/@jQuery-->