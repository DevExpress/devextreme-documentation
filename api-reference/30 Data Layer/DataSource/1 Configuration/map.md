---
id: DataSource.Options.map
type: function(dataItem)
---
---
##### shortDescription
Specifies an item mapping function.

##### param(dataItem): Object
An initial data item.

##### return: Object
A modified data item.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            data: [{
                firstName: "John",
                lastName: "Smith"
            }]
        },
        map: function (dataItem) {
            return {
                fullName: dataItem.firstName + " " + dataItem.lastName
            }
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: new ArrayStore({
                    data: [{
                        firstName: "John",
                        lastName: "Smith"
                    }]
                }),
                map: (dataItem) => {
                    return {
                        fullName: dataItem.firstName + " " + dataItem.lastName
                    }
                }
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';
    import ArrayStore from 'devextreme/data/array_store';

    const ds = new DataSource({
        store: new ArrayStore({
            data: [{
                firstName: 'John',
                lastName: 'Smith'
            }]
        }),
        map: (dataItem) => {
            return {
                fullName: dataItem.firstName + ' ' + dataItem.lastName
            }
        }
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
    import ArrayStore from 'devextreme/data/array_store';

    const ds = new DataSource({
        store: new ArrayStore({
            data: [{
                firstName: 'John',
                lastName: 'Smith'
            }]
        }),
        map: (dataItem) => {
            return {
                fullName: dataItem.firstName + ' ' + dataItem.lastName
            }
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSource(new [] {
            new {
                firstName = "John",
                lastName = "Smith"
            }
        })
        .DataSourceOptions(dso => dso
            .Map("dataSource_map")
        )
    )

    <script type="text/javascript">
        function dataSource_map (dataItem) {
            return {
                fullName: dataItem.firstName + " " + dataItem.lastName
            }
        }
    </script>

---

#####See Also#####
- [Item Mapping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/1%20Item%20Mapping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping')