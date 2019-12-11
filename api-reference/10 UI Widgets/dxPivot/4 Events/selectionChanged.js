var contacts = [
        { name: "Barbara J. Coggins", phone: "512-964-2757", email: "BarbaraJCoggins@rhyta.com", category: "Family" },
        { name: "Carol M. Das", phone: "360-684-1334", email: "CarolMDas@jourrapide.com", category: "Friends" },
        { name: "Janet R. Skinner", phone: "520-573-7903", email: "JanetRSkinner@jourrapide.com", category: "Work" },
        { name: "Michael A. Blevins", phone: "530-480-1961", email: "MichaelABlevins@armyspy.com", category: "Favorites" },
        { name: "Jane K. Hernandez", phone: "404-781-0805", email: "JaneKHernandez@teleworm.us", category: "Friends" },
        { name: "Kim D. Thomas", phone: "603-583-9043", email: "KimDThomas@teleworm.us", category: "Work" },
        { name: "Angel H. Padgett", phone: "772-766-2842", email: "AngelHPadgett@jourrapide.com", category: "Family" },
        { name: "Donald L. Jordan", phone: "213-812-8400", email: "DonaldLJordan@dayrep.com", category: "Friends" },
        { name: "Barbara M. Roberts", phone: "614-365-7945", email: "BarbaraMRoberts@armyspy.com", category: "Friends" },
        { name: "Leslie S. Alcantara", phone: "313-881-9719", email: "LeslieSAlcantara@teleworm.us", category: "Work" },
        { name: "Chad S. Miles", phone: "269-718-9780", email: "ChadSMiles@rhyta.com", category: "Friends" },
        { name: "Sherryl C. Flowers", phone: "919-469-3285", email: "SherrylCFlowers@armyspy.com", category: "Friends" },
        { name: "Merle L. Stearns", phone: "213-995-1064", email: "MerleLStearns@jourrapide.com", category: "Friends" },
        { name: "Nicole A. Rios", phone: "240-416-4329", email: "NicoleARios@armyspy.com", category: "Friends" },
        { name: "James L. Parker", phone: "949-265-2198", email: "JamesLParker@teleworm.us", category: "Friends" },
        { name: "Erin G. Goodson", phone: "425-208-5408", email: "ErinGGoodson@rhyta.com", category: "Friends" },
        { name: "Lelia J. Stewart", phone: "580-302-0390", email: "LeliaJStewart@rhyta.com", category: "Family" },
        { name: "Debra B. Abbott", phone: "806-675-3359", email: "DebraBAbbott@jourrapide.com", category: "Work" },
        { name: "Sandra M. Perez", phone: "586-920-6315", email: "SandraMPerez@dayrep.com", category: "Friends" },
        { name: "Elaine R. Coats", phone: "262-397-2323", email: "ElaineRCoats@rhyta.com", category: "Friends" }
];
var flag = false;
//<!--@Knockout-->
var myViewModel = {
    pivotData: [
       {
           title: "All",
           listData: new DevExpress.data.DataSource({
               store: contacts, sort: "name"
           })
       },
       {
           title: "Family",
           listData: new DevExpress.data.DataSource({
               store: contacts, sort: "name", filter: ["category", "=", "Family"]
           })
       },
       {
           title: "Friends",
           listData: new DevExpress.data.DataSource({
               store: contacts, sort: "name", filter: ["category", "=", "Friends"]
           })
       },
       {
           title: "Work",
           listData: new DevExpress.data.DataSource({
               store: contacts, sort: "name", filter: ["category", "=", "Work"]
           })
       }
    ],
    currentIndex: ko.observable(0),
    pivotInstance: {},
    initializedHandler: function (e) {
        myViewModel.pivotInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.pivotInstance.on(
                "selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].title + "\" item is selected", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            myViewModel.pivotInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.pivotData = [
    {
        title: "All",
        listData: new DevExpress.data.DataSource({
            store: contacts, sort: "name"
        })
    },
    {
        title: "Family",
        listData: new DevExpress.data.DataSource({
            store: contacts, sort: "name", filter: ["category", "=", "Family"]
        })
    },
    {
        title: "Friends",
        listData: new DevExpress.data.DataSource({
            store: contacts, sort: "name", filter: ["category", "=", "Friends"]
        })
    },
    {
        title: "Work",
        listData: new DevExpress.data.DataSource({
            store: contacts, sort: "name", filter: ["category", "=", "Work"]
        })
    }
    ];
    $scope.currentIndex = 0;
    $scope.pivotInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.pivotInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.pivotInstance.on(
                "selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].title + "\" item is selected", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $scope.pivotInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myPivot").dxPivot({
    dataSource: [
        {
            title: "All",
            listData: new DevExpress.data.DataSource({
                store: contacts, sort: "name"
            })
        },
        {
            title: "Family",
            listData: new DevExpress.data.DataSource({
                store: contacts, sort: "name", filter: ["category", "=", "Family"]
            })
        },
        {
            title: "Friends",
            listData: new DevExpress.data.DataSource({
                store: contacts, sort: "name", filter: ["category", "=", "Friends"]
            })
        },
        {
            title: "Work",
            listData: new DevExpress.data.DataSource({
                store: contacts, sort: "name", filter: ["category", "=", "Work"]
            })
        }
    ],
    itemTemplate: function (itemData, itemIndex, itemElement) {
        var list = $("<div>");
        list.dxList({
            dataSource: itemData.listData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<div>" + itemData.name + "</div>");
                itemElement.append("<div>" + itemData.phone + "</div>");
                itemElement.append("<div>" + itemData.email + "</div>");
            }
        });
        itemElement.append(list);
    }
});
$("#indexSelector").dxNumberBox({
    min: 0,
    max: 3,
    showSpinButtons: true,
    value: 0,
    onValueChanged: function (e) {
        $("#myPivot").dxPivot("instance").option("selectedIndex", e.value);
    }
});
$("#myButton").dxButton({
    text: 'Subscribe to selectionChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myPivot").dxPivot("instance")
                .on(
                    "selectionChanged", function (e) {
                        var currentIndex = $("#myPivot").dxPivot("instance").option("selectedIndex");
                        $("#indexSelector").dxNumberBox("instance").option("value", currentIndex);
                        DevExpress.ui.notify("The \"" + e.addedItems[0].title + "\" item is selected", "success", 1500);
                    }
                );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $("#myPivot").dxPivot("instance").off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
