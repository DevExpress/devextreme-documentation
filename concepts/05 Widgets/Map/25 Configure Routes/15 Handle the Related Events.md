The **Map** widget fires the [routeAdded](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/routeAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#routeAdded') and [routeRemoved](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/routeRemoved.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#routeRemoved') events when a marker is added or removed.
To handle them, assign functions to the [onRouteAdded](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onRouteAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onRouteAdded') and [onRouteRemoved](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onRouteRemoved.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onRouteRemoved') options, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            onRouteAdded: function (e) {
                var addedRoute = e.options;
                // The original route used by the current map provider 
                var originalRoute = e.originalRoute;
                // Event handling commands go here
            },
            onRouteRemoved: function (e) {
                var removedRoute = e.options;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        (onRouteAdded)="routeAdded($event)"
        (onRouteRemoved)="routeRemoved($event)">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        routeAdded (e) {
            let addedRoute = e.options;
            // The original route used by the current map provider 
            let originalRoute = e.originalRoute;
            // Event handling commands go here
        };
        routeRemoved (e) {
            let removedRoute = e.options;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the **markerAdded** and **markerRemoved** events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var routeRemovedHandler1 = function (e) {
        var removedRoute = e.options;
        // First handler of the "routeRemoved" event
    };

    var routeRemovedHandler2 = function (e) {
        var removedRoute = e.options;
        // Second handler of the "routeRemoved" event
    };

    $("#mapContainer").dxMap("instance")
        .on("routeRemoved", routeRemovedHandler1)
        .on("routeRemoved", routeRemovedHandler2);

#####See Also#####
- [Map - Customize Routes](/concepts/05%20Widgets/Map/25%20Configure%20Routes/10%20Customize.md '/Documentation/Guide/Widgets/Map/Configure_Routes/Customize/')
- [Map - Add and Remove Routes](/concepts/05%20Widgets/Map/25%20Configure%20Routes/05%20Add%20and%20Remove.md '/Documentation/Guide/Widgets/Map/Configure_Routes/Add_and_Remove/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/Routes)
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, route added, Route removed, routeAdded event, routeRemoved event