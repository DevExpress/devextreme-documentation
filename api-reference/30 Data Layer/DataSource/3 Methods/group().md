---
id: DataSource.group()
---
---
##### shortDescription
Gets the [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option's value.

##### return: Object
A group expression.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        group: { selector: "employeeID", desc: true }
    });

    var groupExpr = ds.group(); // returns { selector: "employeeID", desc: true }

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                group: { selector: "employeeID", desc: true }
            });
            let groupExpr = this.ds.group(); // returns { selector: "employeeID", desc: true }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        group: { selector: 'employeeID', desc: true }
    });

    export default {
        data() {
            return {
                ds
            }
        },
        mounted() {
            this.groupExpr = ds.group(); // returns { selector: "employeeID", desc: true }
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        group: { selector: 'employeeID', desc: true }
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.groupExpr = ds.group(); // returns { selector: "employeeID", desc: true }
        }
    }
    export default App;

---

#####See Also#####
- [Grouping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping')