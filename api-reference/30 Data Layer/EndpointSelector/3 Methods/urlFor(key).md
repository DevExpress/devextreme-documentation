---
id: EndpointSelector.urlFor(key)
---
---
##### shortDescription
Gets an endpoint with a specific key.

##### return: String
The endpoint.

##### param(key): String
The endpoint's key.

---
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
        }
    });

    // Logs http://localhost:55555/service1.svc/ or http://services.example.com/service1.svc/
    // depending on whether the app's local or deployed version is running 
    console.log(endpointSelector.urlFor("db1"));

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
                }
            });
            
            // Logs http://localhost:55555/service1.svc/ or http://services.example.com/service1.svc/
            // depending on whether the app's local or deployed version is running 
            console.log(this.endpointSelector.urlFor("db1")); 
        }
    }

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
        mounted() {
            // Logs http://localhost:55555/service1.svc/ or http://services.example.com/service1.svc/
            // depending on whether the app's local or deployed version is running 
            console.log(endpointSelector.urlFor('db1')); 
        },
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
        constructor(props) {
            super(props);

            // Logs http://localhost:55555/service1.svc/ or http://services.example.com/service1.svc/
            // depending on whether the app's local or deployed version is running 
            console.log(endpointSelector.urlFor('db1')); 
        }
    }
    export default App;

---