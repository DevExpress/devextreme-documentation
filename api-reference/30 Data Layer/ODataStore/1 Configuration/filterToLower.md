---
id: ODataStore.Options.filterToLower
type: Boolean
---
---
##### shortDescription
Specifies whether to convert string values to lowercase in filter and search requests. Applies to the following operations: *"startswith"*, *"endswith"*, *"contains"*, and *"notcontains"*.

---
Defaults to the global [oDataFilterToLower](/api-reference/50%20Common/Object%20Structures/globalConfig/oDataFilterToLower.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/#oDataFilterToLower') setting.

When this option is **true**, the filter expression sent to the server contains a `tolower()` function call and a lowercase filter value.

---
#####jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: new DevExpress.data.ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
            key: "Product_ID",
            filterToLower: true
        }),
        filter: ["Product_Name", "startswith", "Tel"]
    });

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Product_Name), 'tel')

#####Angular

    <!-- tab: app.component.ts -->
    import ODataStore from 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: new ODataStore({
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID",
                    filterToLower: true
                }),
                filter: ["Product_Name", "startswith", "Tel"]
            });

            // The filter expression in the request looks like the following:
            // https://...?filter=startswith(tolower(Product_Name), 'tel')
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataStore from 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        store: new ODataStore({
            url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
            key: 'Product_ID',
            filterToLower: true
        }),
        filter: ['Product_Name', 'startswith', 'Tel']
    });

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Product_Name), 'tel')

    export default {
        // ...
        data() {
            return {
                store
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataStore from 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource{
        store: new ODataStore({
            url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
            key: 'Product_ID',
            filterToLower: true
        }),
        filter: ['Product_Name', 'startswith', 'Tel']
    });

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Product_Name), 'tel')

    class App extends React.Component {
        // ...
    }
    export default App;

---