---
id: EndpointSelector
module: data/endpoint_selector
export: default
type: Object
---
---
##### shortDescription
The **EndpointSelector** is an object for managing OData endpoints in your application.

---
This object selects local or production OData service URL depending on whether the app's local or deployed version is running.

---
##### jQuery

    <!--JavaScript-->
    var endpointSelector = new DevExpress.data.EndpointSelector({
        db1: {
            local: "http://localhost:55555/service1.svc/",
            production: "http://services.example.com/service1.svc/"
        },
        db2: {
            local: "http://localhost:55555/service2.svc/",
            production: "http://services.example.com/service2.svc/"
        },
        // ...
    });

##### Angular

    <!--TypeScript-->
    import EndpointSelector from "devextreme/data/endpoint_selector";
    // ...
    export class AppComponent {
        endpointSelector: EndpointSelector;
        constructor() {
            this.endpointSelector = new EndpointSelector({
                db1: {
                    local: "http://localhost:55555/service1.svc/",
                    production: "http://services.example.com/service1.svc/"
                },
                db2: {
                    local: "http://localhost:55555/service2.svc/",
                    production: "http://services.example.com/service2.svc/"
                },
                // ...
            });
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.endpointSelector = new DevExpress.data.EndpointSelector({
                db1: {
                    local: "http://localhost:55555/service1.svc/",
                    production: "http://services.example.com/service1.svc/"
                },
                db2: {
                    local: "http://localhost:55555/service2.svc/",
                    production: "http://services.example.com/service2.svc/"
                },
                // ...
            });
        });

##### Knockout  

    <!--JavaScript-->
    var viewModel = {
        endpointSelector: new DevExpress.data.EndpointSelector({
            db1: {
                local: "http://localhost:55555/service1.svc/",
                production: "http://services.example.com/service1.svc/"
            },
            db2: {
                local: "http://localhost:55555/service2.svc/",
                production: "http://services.example.com/service2.svc/"
            },
            // ...
        })
    };

    ko.applyBindings(viewModel);

##### Vue

    <!-- tab: App.vue -->
    <script>
    import EndpointSelector from 'devextreme/data/endpoint_selector';

    const endpointSelector = new EndpointSelector({
        db1: {
            local: 'http://localhost:55555/service1.svc/',
            production: 'http://services.example.com/service1.svc/'
        },
        db2: {
            local: 'http://localhost:55555/service2.svc/',
            production: 'http://services.example.com/service2.svc/'
        },
        // ...
    });

    export default {
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import EndpointSelector from 'devextreme/data/endpoint_selector';

    const endpointSelector = new EndpointSelector({
        db1: {
            local: 'http://localhost:55555/service1.svc/',
            production: 'http://services.example.com/service1.svc/'
        },
        db2: {
            local: 'http://localhost:55555/service2.svc/',
            production: 'http://services.example.com/service2.svc/'
        },
        // ...
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---