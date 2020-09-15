---
id: Query
type: Object
---
---
##### shortDescription
The **Query** is an object that provides a chainable interface for making data queries.

##### lib
dx.web.js, dx.viz.js, dx.all.js

---
To create a **Query**, call the [query(array)](/api-reference/30%20Data%20Layer/Utils/query(array).md '/Documentation/ApiReference/Data_Layer/Utils/#queryarray') or [query(url, queryOptions)](/api-reference/30%20Data%20Layer/Utils/query(url_queryOptions).md '/Documentation/ApiReference/Data_Layer/Utils/#queryurl_queryOptions') method, depending on the type of the storage you access. The **Query** supports method chaining. This enables you to execute several methods in a single statement.

---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Lee", birthYear: 1981, gender: "male" }
    ];

    var processedArray = DevExpress.data.query(dataObjects)
        .filter([ "gender", "=", "female" ])
        .sortBy("birthYear")
        .select("name", "birthYear")
        .toArray();

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor() {
            let dataObjects = [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ];

            let processedArray = Query(dataObjects)
                .filter([ "gender", "=", "female" ])
                .sortBy("birthYear")
                .select("name", "birthYear")
                .toArray();
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            var dataObjects = [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ];

            $scope.processedArray = DevExpress.data.query(dataObjects)
                .filter([ "gender", "=", "female" ])
                .sortBy("birthYear")
                .select("name", "birthYear")
                .toArray();
        });

##### Knockout  

    <!--JavaScript-->
    var dataObjects = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Lee", birthYear: 1981, gender: "male" }
    ];

    var viewModel = {
        processedArray: DevExpress.data.query(dataObjects)
            .filter([ "gender", "=", "female" ])
            .sortBy("birthYear")
            .select("name", "birthYear")
            .toArray()
    };

    ko.applyBindings(viewModel);

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Query from 'devextreme/data/query';

    const dataObjects = [
        { name: 'Amelia', birthYear: 1991, gender: 'female' },
        { name: 'Benjamin', birthYear: 1983, gender: 'male' },
        { name: 'Daniela', birthYear: 1987, gender: 'female' },
        { name: 'Lee', birthYear: 1981, gender: 'male' }
    ];

    export default {
        mounted() {
            this.processedArray = Query(dataObjects)
                .filter([ 'gender', '=', 'female' ])
                .sortBy('birthYear')
                .select('name', 'birthYear')
                .toArray();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import Query from 'devextreme/data/query';

    const dataObjects = [
        { name: 'Amelia', birthYear: 1991, gender: 'female' },
        { name: 'Benjamin', birthYear: 1983, gender: 'male' },
        { name: 'Daniela', birthYear: 1987, gender: 'female' },
        { name: 'Lee', birthYear: 1981, gender: 'male' }
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.processedArray = Query(dataObjects)
                .filter([ 'gender', '=', 'female' ])
                .sortBy('birthYear')
                .select('name', 'birthYear')
                .toArray();
        }
    }
    export default App;

---

#####See Also#####
- [Query Concept](/concepts/70%20Data%20Binding/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Binding/Data_Layer/#Query_Concept')