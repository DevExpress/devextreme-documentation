---
id: Query.slice(skip, take)
---
---
##### shortDescription
Gets a specified number of data items starting from a given index.

##### return: Query
The **Query** with transformed data.

##### param(skip): Number
The index of the first data item to get.

##### param(take): Number | undefined
Optional. The number of data items to get.

---
---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Lee", birthYear: 1981, gender: "male" }
    ];

    var subset = DevExpress.data.query(dataObjects)
        .slice(1, 2)
        .toArray();

    console.log(subset);
    /* outputs
    [
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" }
    ] */

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let dataObjects = [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ];

            let subset = Query(dataObjects)
                .slice(1, 2)
                .toArray();

            console.log(subset);
            /* outputs
            [
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" }
            ] */
        };
    }

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
            this.subset = Query(dataObjects)
                .slice(1, 2)
                .toArray();

            console.log(this.subset);
            /* outputs
            [
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" }
            ] */
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

            this.subset = Query(dataObjects)
                .slice(1, 2)
                .toArray();

            console.log(this.subset);
            /* outputs
            [
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" }
            ] */
        }
    }
    export default App;

---