---
id: ODataContext.Options.filterToLower
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
    var context = new DevExpress.data.ODataContext({
        url: "https://js.devexpress.com/Demos/DevAV/odata/",
        entities: { 
            Employees: { 
                key: "Employee_ID", 
                keyType: "Int32" 
            }, // ...
        },
        filterToLower: true
    });
    var ds = new DevExpress.data.DataSource({
        store: context.Employees,
        filter: ["Employee_Name", "startswith", "Jo"]
    });

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Employee_Name), 'jo')

#####Angular

    <!-- tab: app.component.ts -->
    import ODataContext from 'devextreme/data/odata/context';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        context: ODataContext;
        ds: DataSource;
        constructor() {
            this.context = new ODataContext({
                url: "https://js.devexpress.com/Demos/DevAV/odata/",
                entities: { 
                    Employees: { 
                        key: "Employee_ID", 
                        keyType: "Int32" 
                    }, // ...
                },
                filterToLower: true
            });
            this.ds = new DataSource({
                store: this.context.Employees,
                filter: ["Employee_Name", "startswith", "Jo"]
            });

            // The filter expression in the request looks like the following:
            // https://...?filter=startswith(tolower(Employee_Name), 'jo')
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataContext from 'devextreme/data/odata/context';
    import DataSource from 'devextreme/data/data_source';

    const context = new ODataContext({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/',
        entities: { 
            Employees: { 
                key: 'Employee_ID', 
                keyType: 'Int32' 
            },
            // ...
        },
        filterToLower: true
    });

    const ds = new DataSource({
        store: context.Employees,
        filter: ['Employee_Name', 'startswith', 'Jo']
    });

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Employee_Name), 'jo')

    export default {
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataContext from 'devextreme/data/odata/context';
    import DataSource from 'devextreme/data/data_source';

    const context = new ODataContext({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/',
        entities: { 
            Employees: { 
                key: 'Employee_ID', 
                keyType: 'Int32' 
            },
            // ...
        },
        filterToLower: true
    });

    const ds = new DataSource({
        store: context.Employees,
        filter: ['Employee_Name', 'startswith', 'Jo']
    });

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Employee_Name), 'jo')
    
    class App extends React.Component {
        // ...
    }
    export default App;

---