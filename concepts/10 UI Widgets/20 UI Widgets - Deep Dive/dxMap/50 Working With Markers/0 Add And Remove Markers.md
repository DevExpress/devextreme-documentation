To add and remove markers, use the [addMarker(markerOptions)](/api-reference/10%20UI%20Widgets/dxMap/3%20Methods/addMarker(markerOptions).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#addMarkermarkerOptions') and [removeMarker(marker)](/api-reference/10%20UI%20Widgets/dxMap/3%20Methods/removeMarker(marker).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#removeMarkermarker') methods respectively.

    <!--JavaScript-->
    var addMarker = function(){
        var map = $("#mapContainer").dxMap("instance");
        map.addMarker({
            location: "40.749825, -73.987963"
        });
    }
    var removeMarker = function(){
        var map = $("#mapContainer").dxMap("instance");
        map.removeMarker(0);
    };
    
The **addMarker(markerOptions)** method argument should contain the added marker configuration object. The argument passed to the **removeMarker(marker)** method can contain a marker options object, marker index, or an array of marker option objects to be removed.

You can pass the array of the required markers to the [markers](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/markers '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#markers') option to display them immediately after the widget is created.

    <!--JavaScript-->
    var mapOptions = {
        markers: [
            { location: "40.749825, -73.090443" },
            { location: "42.743244, -71.594375" },
            { location: "37.058435, -74.903842" }
        ]
    }
    

In **MVVM approach**, provide two-way binding between the **markers** option and the corresponding field of a view or application model to manage markers. The widget automatically updates the markers list when you add to or remove items from the array.

#####AngularJS Approach#####

    <!--JavaScript-->
    var myApp = angular.module('myApp', ['dx']);
    myApp.controller("defaultCtrl", function ($scope) {
        $scope.mapMarkers = [];
        $scope.addMarker = function(){
            $scope.mapMarkers.push({ location: "40.749825, -73.987963" });
        }
        $scope.removeMarker = function(){
            $scope.mapMarkers.pop();
        };
    });

<!--..-->

    <!--HTML-->
    <div ng-controller="Controller">
        <div dx-map="{
        bindingOptions: {
            'markers': 'mapMarkers'
        }"></div>
    </div>

#####Knockout Approach#####

    <!--JavaScript-->
    var mapMarkers = ko.observableArray();
    var mapOptions = {
        markers: mapMarkers
    }
    var addMarker = function(){
        mapMarkers.push({ location: "40.749825, -73.987963" });
    }
    var removeMarker = function(){
        mapMarkers.remove({ location: "40.749825, -73.987963" });
    };

<!---->

    <!--HTML-->
    <div data-bind="dxMap: { markers: mapMarkers }"></div>
    