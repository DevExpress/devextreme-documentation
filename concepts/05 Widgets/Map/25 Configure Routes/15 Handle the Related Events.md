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
                const addedRoute = e.options;
                // The original route used by the current map provider 
                const originalRoute = e.originalRoute;
                // Event handling commands go here
            },
            onRouteRemoved: function (e) {
                const removedRoute = e.options;
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
            const addedRoute = e.options;
            // The original route used by the current map provider 
            const originalRoute = e.originalRoute;
            // Event handling commands go here
        };
        routeRemoved (e) {
            const removedRoute = e.options;
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

##### Vue

    <template>
        <DxMap
            :zoom="10"
            :center="centerCoordinates"
            @route-added="routeAdded"
            @route-removed="routeRemoved"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxMap } from 'devextreme-vue/map';

    export default {
        components: {
            DxMap
        },
        data() {
            return {
                centerCoordinates: { lat: 40.749825, lng: -73.987963 }
            };
        },
        methods: {
            routeAdded(e) {
                const addedRoute = e.options;
                // The original route used by the current map provider 
                const originalRoute = e.originalRoute;
                // Event handling commands go here
            },
            routeRemoved(e) {
                const removedRoute = e.options;
                // Event handling commands go here
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Map } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.routeRemoved = this.routeAdded.bind(this);
            this.routeRemoved = this.routeRemoved.bind(this);
        }

        routeAdded(e) {
            const addedRoute = e.options;
            // The original route used by the current map provider 
            const originalRoute = e.originalRoute;
            // Event handling commands go here
        }

        routeRemoved(e) {
            const removedRoute = e.options;
            // Event handling commands go here
        }

        render() {
            return (
                <Map
                    defaultZoom={10}
                    defaultCenter={centerCoordinates}
                    onRouteAdded={this.routeAdded}
                    onRouteRemoved={this.routeRemoved}
                />
            );
        }
    }

    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the **markerAdded** and **markerRemoved** events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const routeRemovedHandler1 = function (e) {
        const removedRoute = e.options;
        // First handler of the "routeRemoved" event
    };

    const routeRemovedHandler2 = function (e) {
        const removedRoute = e.options;
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