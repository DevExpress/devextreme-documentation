The **Map** widget fires the [markerAdded](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/markerAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#markerAdded') and [markerRemoved](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/markerRemoved.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#markerRemoved') events when a marker is added or removed.
To handle them, assign functions to the [onMarkerAdded](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onMarkerAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerAdded') and [onMarkerRemoved](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onMarkerRemoved.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerRemoved') options, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            onMarkerAdded: function (e) {
                var addedMarker = e.options;
                // The original marker used by the current map provider 
                var originalMarker = e.originalMarker;
                // Event handling commands go here
            },
            onMarkerRemoved: function (e) {
                var removedMarker = e.options;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        (onMarkerAdded)="markerAdded($event)"
        (onMarkerRemoved)="markerRemoved($event)">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        markerAdded (e) {
            let addedMarker = e.options;
            // The original marker used by the current map provider 
            let originalMarker = e.originalMarker;
            // Event handling commands go here
        };
        markerRemoved (e) {
            let removedMarker = e.options;
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
    var markerRemovedHandler1 = function (e) {
        var removedMarker = e.options;
        // First handler of the "markerRemoved" event
    };

    var markerRemovedHandler2 = function (e) {
        var removedMarker = e.options;
        // Second handler of the "markerRemoved" event
    };

    $("#mapContainer").dxMap("instance")
        .on("markerRemoved", markerRemovedHandler1)
        .on("markerRemoved", markerRemovedHandler2);

#####See Also#####
- [Map - Customize Markers](/concepts/05%20Widgets/Map/20%20Configure%20Markers/10%20Customize.md '/Documentation/Guide/Widgets/Map/Configure_Markers/Customize/')
- [Map - Add and Remove Markers](/concepts/05%20Widgets/Map/20%20Configure%20Markers/05%20Add%20and%20Remove.md '/Documentation/Guide/Widgets/Map/Configure_Markers/Add_and_Remove/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/Markers)
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, marker added, marker removed, markerAdded event, markerRemoved event