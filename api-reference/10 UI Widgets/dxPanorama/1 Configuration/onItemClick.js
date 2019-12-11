var food = {
    desserts: [
        { src: "/content/data/products/06.jpg" },
        { src: "/content/data/products/16.jpg" },
        { src: "/content/data/products/19.jpg" },
        { src: "/content/data/products/21.jpg" },
        { src: "/content/data/products/22.jpg" },
        { src: "/content/data/products/25.jpg" }
    ],
    mainCourses: [
        { src: "/content/data/products/04.jpg" },
        { src: "/content/data/products/05.jpg" },
        { src: "/content/data/products/14.jpg" },
        { src: "/content/data/products/17.jpg" },
        { src: "/content/data/products/23.jpg" },
        { src: "/content/data/products/28.jpg" }
    ],
    seafood: [
        { src: "/content/data/products/46.jpg" },
        { src: "/content/data/products/45.jpg" },
        { src: "/content/data/products/73.jpg" },
        { src: "/content/data/products/30.jpg" },
        { src: "/content/data/products/13.jpg" },
        { src: "/content/data/products/41.jpg" }
    ],
    drinks: [
        { src: "/content/data/products/01.jpg" },
        { src: "/content/data/products/02.jpg" },
        { src: "/content/data/products/24.jpg" },
        { src: "/content/data/products/34.jpg" },
        { src: "/content/data/products/35.jpg" },
        { src: "/content/data/products/38.jpg" }
    ]
};

//<!--@Knockout-->
var myViewModel = {
    panoramaData: [
        {
            header: "Main courses",
            text: "First and second course of a meal",
            images: food.mainCourses
        },
        {
            header: "Seafood",
            text: "Seafood: ocean and sea",
            images: food.seafood
        },
        {
            header: "Desserts",
            text: "Desserts: biscuits and cookies",
            images: food.desserts
        },
        {
            header: "Drinks",
            text: "Drinks: Soft vine and tea",
            images: food.drinks
        }
    ],
    processItemClick: function (e) {
        DevExpress.ui.dialog.alert(e.itemData.text);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.panoramaData = [
        {
            header: "Main courses",
            text: "First and second course of a meal",
            images: food.mainCourses
        },
        {
            header: "Seafood",
            text: "Seafood: ocean and sea",
            images: food.seafood
        },
        {
            header: "Desserts",
            text: "Desserts: biscuits and cookies",
            images: food.desserts
        },
        {
            header: "Drinks",
            text: "Drinks: Soft vine and tea",
            images: food.drinks
        }
    ];
    $scope.processItemClick = function (e) {
        DevExpress.ui.dialog.alert(e.itemData.text);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myPanorama").dxPanorama({
    dataSource: [
        {
            header: "Main courses",
            text: "First and second course of a meal",
            images: food.mainCourses
        },
        {
            header: "Seafood",
            text: "Seafood: ocean and sea",
            images: food.seafood
        },
        {
            header: "Desserts",
            text: "Desserts: biscuits and cookies",
            images: food.desserts
        },
        {
            header: "Drinks",
            text: "Drinks: Soft vine and tea",
            images: food.drinks
        }
    ],
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<div>" + itemData.text + "</div>");
        var imageWrapper = $("<div>");
        itemElement.append(imageWrapper);
        for (var i = 0; i < itemData.images.length; i++)
            imageWrapper.append('<img src="' + itemData.images[i].src + '"/>');
    },
    onItemClick: function (e) {
        DevExpress.ui.dialog.alert(e.itemData.text);
    }
});
//<!--/@jQuery-->
