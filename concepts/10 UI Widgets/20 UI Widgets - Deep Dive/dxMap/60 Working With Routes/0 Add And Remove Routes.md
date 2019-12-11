To add and remove routes, use the [addRoute(routeOptions)](/api-reference/10%20UI%20Widgets/dxMap/3%20Methods/addRoute(routeOptions).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#addRouterouteOptions') and [removeRoute(route)](/api-reference/10%20UI%20Widgets/dxMap/3%20Methods/removeRoute(route).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#removeRouteroute') methods respectively.

    <!--JavaScript-->
    var addRoute = function(){
        var map = $("#mapContainer").dxMap("instance");
        map.addRoute({
            color: 'red',
            weight: 2,
            locations: [
                [40.748302, -73.978518],
                [40.748625, -73.992363],
                [40.757823, -73.995297]
            ]
        });
    }
    var removeRoute = function(){
        var map = $("#mapContainer").dxMap("instance");
        map.removeRoute({
            color: 'red',
            weight: 2,
            locations: [
                [40.748302, -73.978518],
                [40.748625, -73.992363],
                [40.757823, -73.995297]
            ]
        });
    };
    
The **addRoute(routeOptions)** method argument should contain the added route configuration object. The argument passed to the **removeRoute(Route)** method can contain a route options object, route index, or an array of route option objects to be removed.

You can pass the array of the required routes to the [routes](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/routes '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#routes') option to display them immediately after the widget is created.

    <!--JavaScript-->
    var mapOptions = {
        routes: [
            {
                color: 'red',
                weight: 2,
                locations: [
                    [40.748302, -73.978518],
                    [40.748625, -73.992363],
                    [40.757823, -73.995297]
                ]
            },
            {
                color: 'blue',
                weight: 2,
                locations: [
                    [40.747802, -73.995297],
                    [40.746302, -73.978518],
                    [40.757823, -73.978518]
                ]
            },
            {
                color: 'green',
                weight: 2,
                locations: [
                    [40.749802, -73.981018],
                    [40.749825, -73.987963],
                    [40.755823, -73.986397]
                ]
            }
        ]
    }

In **MVVM approach**, provide two-way binding between the [routes](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/routes '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#routes') option and the corresponding field of a view or application model to manage markers. The widget automatically updates the markers list when you add to or remove items from the array.

#####AngularJS Approach#####

    <!--JavaScript-->
    function Controller($scope) {
        $scope.mapRoutes = [];
        $scope.addRoute = function(){
            $scope.mapRoutes.push({
                color: 'red',
                weight: 2,
                locations: [
                    [40.748302, -73.978518],
                    [40.748625, -73.992363],
                    [40.757823, -73.995297]
                ]
            });
        }
        $scope.removeRoute = function(){
            $scope.mapRoutes.remove({
                color: 'red',
                weight: 2,
                locations: [
                    [40.748302, -73.978518],
                    [40.748625, -73.992363],
                    [40.757823, -73.995297]
                ]
            });
        };
    };

<!--...-->

    <!--HTML-->
    <div ng-controller="Controller">
        <div dx-map="{
        bindingOptions: {
            routes: 'mapRoutes'
        }"></div>
    </div>

#####Knockout Approach#####

    <!--JavaScript-->
    var mapRoutes = ko.observableArray();
    var mapOptions = {
        routes: mapRoutes
    }
    var addRoute = function() {
        mapRoutes.push({
            color: 'red',
            weight: 2,
            locations: [
                [40.748302, -73.978518],
                [40.748625, -73.992363],
                [40.757823, -73.995297]
            ]
        });
    }
    var removeRoute = function() {
        mapRoutes.remove({
            color: 'red',
            weight: 2,
            locations: [
                [40.748302, -73.978518],
                [40.748625, -73.992363],
                [40.757823, -73.995297]
            ]
        });
    };

<!---->

    <!--HTML-->
    <div data-bind="dxMap: { routes: mapRoutes }"></div>


