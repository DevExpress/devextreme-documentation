---
id: Query.select(getter)
---
---
##### shortDescription
Selects individual fields from data objects.

##### return: Query
The **Query** with transformed data.

##### param(getter): Object
A getter; in most cases, the names of the data fields to select.

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

    var selectedData = DevExpress.data.query(dataObjects)
        .select("birthYear", "name")
        .toArray();

    console.log(selectedData);
    /* outputs
    [
        { birthYear: 1991, name: "Amelia"  },
        { birthYear: 1983, name: "Benjamin" },
        { birthYear: 1987, name: "Daniela" },
        { birthYear: 1981, name: "Lee" }
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

            let selectedData = Query(dataObjects)
                .select("birthYear", "name")
                .toArray();

            console.log(selectedData);
            /* outputs
            [
                { birthYear: 1991, name: "Amelia"  },
                { birthYear: 1983, name: "Benjamin" },
                { birthYear: 1987, name: "Daniela" },
                { birthYear: 1981, name: "Lee" }
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
            this.selectedData = Query(dataObjects)
                .select('birthYear', 'name')
                .toArray();

            console.log(this.selectedData);
            /* outputs
            [
                { birthYear: 1991, name: "Amelia"  },
                { birthYear: 1983, name: "Benjamin" },
                { birthYear: 1987, name: "Daniela" },
                { birthYear: 1981, name: "Lee" }
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

            this.selectedData = Query(dataObjects)
                .select('birthYear', 'name')
                .toArray();

            console.log(this.selectedData);
            /* outputs
            [
                { birthYear: 1991, name: "Amelia"  },
                { birthYear: 1983, name: "Benjamin" },
                { birthYear: 1987, name: "Daniela" },
                { birthYear: 1981, name: "Lee" }
            ] */
        }
    }
    export default App;

---