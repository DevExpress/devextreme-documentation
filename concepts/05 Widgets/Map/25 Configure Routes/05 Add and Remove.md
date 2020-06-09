To add routes at design-time, pass an array of objects to the [routes](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/routes '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/routes/') option. A route requires only its [locations](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/routes/locations '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/routes/locations/') to be specified. The locations will be connected and make up the route.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            zoom: 5,
            routes: [{
                locations: [
                    { lat: 40.782500, lng: -73.966111 },
                    "40.755833, -73.986389",
                    [ 40.753889, -73.981389 ],
                    "Brooklyn Bridge,New York,NY"
                ]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [zoom]="5"
        [routes]="mapRoutes">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        mapRoutes = [{
            locations: [
                { lat: 40.782500, lng: -73.966111 },
                "40.755833, -73.986389",
                [ 40.753889, -73.981389 ],
                "Brooklyn Bridge,New York,NY"
            ]
        }];
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
            :zoom="5"
            :routes="mapRoutes"
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
                mapRoutes: [{
                    locations: [
                        { lat: 40.782500, lng: -73.966111 },
                        "40.755833, -73.986389",
                        [ 40.753889, -73.981389 ],
                        "Brooklyn Bridge,New York,NY"
                    ]
                }]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Map } from 'devextreme-react/map';

    const mapRoutes = [{
        locations: [
            { lat: 40.782500, lng: -73.966111 },
            "40.755833, -73.986389",
            [ 40.753889, -73.981389 ],
            "Brooklyn Bridge,New York,NY"
        ]
    }];

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={5}
                    routes={mapRoutes}
                />
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/Routes/"
}

To add or remove a route at runtime, call the [addRoute(routeOptions)](/api-reference/10%20UI%20Widgets/dxMap/3%20Methods/addRoute(routeOptions).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#addRouterouteOptions') or [removeRoute(route)](/api-reference/10%20UI%20Widgets/dxMap/3%20Methods/removeRoute(route).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#removeRouteroute') method.

    <!--JavaScript-->
    const routesCollection = [{
        locations: [ 
            "40.753889, -73.981389",
            "Brooklyn Bridge,New York,NY"
        ]
    }, {
        locations: [
            [40.8304282, -73.9455893],
            [40.767693, -73.9962566],
            [40.7198128, -74.0012278]
        ]
    }];

    // Adds a route
    map.addRoute(routesCollection[0]);

    // Adds several routes
    map.addRoute(routesCollection);

    // Removes the route with specific configuration
    map.removeRoute(routesCollection[0]);

    // Removes the route with index 1 in the "routes" array
    map.removeRoute(1);

    // Removes the routes with specific configurations
    map.removeRoute(routesCollection);

    // Removes the routes with indexes 0 and 2 in the "routes" array
    map.removeRoute([0, 2]);

With Angular, Vue, or React, use a different technique. Bind the **routes** option of the **Map** widget to a component property. 

---
##### Angular

    <!--HTML-->
    <dx-map
        [zoom]="10"
        [routes]="mapRoutes">
    </dx-map>
    <dx-button
        text="Add the Route"
        (onClick)="addRoute()">
    </dx-button>
    <dx-button
        text="Remove the Route"
        (onClick)="removeRoute()">
    </dx-button>

    <!--TypeScript-->
    import { DxMapModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        mapRoutes = [{
            locations: [
                "40.782500, -73.966111",
                "40.755833, -73.986389"
            ]
        }];
        addRoute () {
            this.mapRoutes.push({
                locations: [
                    "40.753889, -73.981389",
                    "Brooklyn Bridge,New York,NY"
                ]
            });
        };
        removeRoute () {
            this.mapRoutes.pop();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <DxMap
                :zoom="10"
                :routes="mapRoutes"
            />
            <DxButton
                text="Add the Route"
                @click="addRoute"
            />
            <DxButton
                text="Remove the Route"
                @click="removeRoute"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxMap } from 'devextreme-vue/map';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxMap,
            DxButton
        },
        data() {
            return {
                mapRoutes: [{
                    locations: [
                        { lat: 40.782500, lng: -73.966111 },
                        "40.755833, -73.986389",
                        [ 40.753889, -73.981389 ],
                        "Brooklyn Bridge,New York,NY"
                    ]
                }]
            };
        },
        methods: {
            addRoute() {
                this.mapRoutes.push({
                    locations: [
                        "40.753889, -73.981389",
                        "Brooklyn Bridge,New York,NY"
                    ]
                });
            },
            removeRoute() {
                this.mapRoutes.pop();
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Map } from 'devextreme-react/map';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                mapRoutes: [{
                    locations: [
                        { lat: 40.782500, lng: -73.966111 },
                        "40.755833, -73.986389",
                        [ 40.753889, -73.981389 ],
                        "Brooklyn Bridge,New York,NY"
                    ]
                }]
            };

            this.addRoute = this.addRoute.bind(this);
            this.removeRoute = this.removeRoute.bind(this);
        }

        addRoute() {
            this.state.mapRoutes.push({
                locations: [
                    "40.753889, -73.981389",
                    "Brooklyn Bridge,New York,NY"
                ]
            });
        }

        removeRoute() {
            this.state.mapRoutes.pop();
        }

        render() {
            return (
                <div>
                    <Map
                        defaultZoom={10}
                        routes={this.state.mapRoutes}
                    />
                    <Button
                        text="Add the Route"
                        onClick={this.addRoute}
                    />
                    <Button
                        text="Remove the Route"
                        onClick={this.removeRoute}
                    />
                </div>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Map - Customize Routes](/concepts/05%20Widgets/Map/25%20Configure%20Routes/10%20Customize.md '/Documentation/Guide/Widgets/Map/Configure_Routes/Customize/')
- [Map - Handle Route Related Events](/concepts/05%20Widgets/Map/25%20Configure%20Routes/15%20Handle%20the%20Related%20Events.md '/Documentation/Guide/Widgets/Map/Configure_Routes/Handle_the_Related_Events/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/Routes)
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, routes, location, add route, remove route