---
id: DataSource.Options.searchExpr
type: getter | Array<getter>
---
---
##### shortDescription
Specifies the fields to search.

---
In most cases, you should pass the name of a field by whose value data items are searched. Assign an array of field names to this option if you need to search elements by several field values.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        searchExpr: ["firstName", "lastName"]
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                searchExpr: ["firstName", "lastName"]
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        searchExpr: ['firstName', 'lastName']
    });

    export default {
        // ...
        data() {
            return {
                ds
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        searchExpr: ['firstName', 'lastName']
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

You can use this option along with [searchOperation](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchOperation.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchOperation') and [searchValue](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchValue.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue') to specify a simple filter. Use the [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') option for more complex filtering conditions. Filters are combined if you specify them in both ways.

[note] Searching works when inputting a plain data structure only. However, if you need the searching capability and hierarchical data, transform the plain data using the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option.

#####See Also#####
- [Data Layer - Search Api](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/2%20Search%20Api.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api')
- [Data Layer - Getters and Setters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters')