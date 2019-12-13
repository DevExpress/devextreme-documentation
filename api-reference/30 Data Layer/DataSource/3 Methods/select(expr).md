---
id: DataSource.select(expr)
---
---
##### shortDescription
Sets the [select](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/select.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#select') option's value.

##### param(expr): any
A select expression.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.select(["firstName", "lastName", "birthDate"]);
    // or
    // ds.select("firstName", "lastName", "birthDate");

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // DataSource is configured here
            });
            this.ds.select(["firstName", "lastName", "birthDate"]);
            // or
            // this.ds.select("firstName", "lastName", "birthDate");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // DataSource is configured here
    });

    export default {
        data() {
            return {
                ds
            }
        },
        mounted() {
            ds.select(['firstName', 'lastName', 'birthDate']);
            // or
            // ds.select('firstName', 'lastName', 'birthDate');
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // DataSource is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            ds.select(['firstName', 'lastName', 'birthDate']);
            // or
            // ds.select('firstName', 'lastName', 'birthDate');
        }
    }
    export default App;

---

#####See Also#####
- [Select Expressions](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/0%20Select%20Expressions.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Select_Expressions')