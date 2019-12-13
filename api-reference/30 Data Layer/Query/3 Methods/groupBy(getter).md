---
id: Query.groupBy(getter)
---
---
##### shortDescription
Groups data items by the specified [getter](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters').

##### return: Query
The **Query** with transformed data.

##### param(getter): Object
A getter; in most cases, the name of the data field to group by.

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

    var groupedData = DevExpress.data.query(dataObjects)
        .groupBy("gender")
        .toArray();

    console.log(groupedData);
    /* outputs
    [{
        key: "female",
        items: [
            { name: "Amelia", birthYear: 1991, gender: "female" },
            { name: "Daniela", birthYear: 1987, gender: "female" }
        ]
    }, {
        key: "male",
        items: [
            { name: "Benjamin", birthYear: 1983, gender: "male" },
            { name: "Lee", birthYear: 1981, gender: "male" }
        ]
    }] */

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

            let groupedData = Query(dataObjects)
                .groupBy("gender")
                .toArray();

            console.log(groupedData);
            /* outputs
            [{
                key: "female",
                items: [
                    { name: "Amelia", birthYear: 1991, gender: "female" },
                    { name: "Daniela", birthYear: 1987, gender: "female" }
                ]
            }, {
                key: "male",
                items: [
                    { name: "Benjamin", birthYear: 1983, gender: "male" },
                    { name: "Lee", birthYear: 1981, gender: "male" }
                ]
            }] */
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
            this.groupedData = Query(dataObjects)
                .groupBy('gender')
                .toArray();

            console.log(this.groupedData);
            /* outputs
            [{
                key: "female",
                items: [
                    { name: "Amelia", birthYear: 1991, gender: "female" },
                    { name: "Daniela", birthYear: 1987, gender: "female" }
                ]
            }, {
                key: "male",
                items: [
                    { name: "Benjamin", birthYear: 1983, gender: "male" },
                    { name: "Lee", birthYear: 1981, gender: "male" }
                ]
            }] */
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

            this.groupedData = Query(dataObjects)
                .groupBy('gender')
                .toArray();

            console.log(this.groupedData);
            /* outputs
            [{
                key: "female",
                items: [
                    { name: "Amelia", birthYear: 1991, gender: "female" },
                    { name: "Daniela", birthYear: 1987, gender: "female" }
                ]
            }, {
                key: "male",
                items: [
                    { name: "Benjamin", birthYear: 1983, gender: "male" },
                    { name: "Lee", birthYear: 1981, gender: "male" }
                ]
            }] */
        }
    }
    export default App;

---

#####See Also#####
- [Grouping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping')