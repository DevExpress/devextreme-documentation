---
id: XmlaStore.Options.url
type: String
---
---
##### shortDescription
Specifies the OLAP server's URL.

---
This should be the MSMDPUMP.dll URL and usually has the following format: *http://&lt;servername&gt;/OLAP/msmdpump.dll*.

---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.XmlaStore({
        url: "https://my-web-srv01/OLAP/msmdpump.dll",
        catalog: "AdventureWorksDW2012",
        cube: "Adventure Works"
    });

    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
        store: store
    });

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import XmlaStore from "devextreme/ui/pivot_grid/xmla_store";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                store: new XmlaStore({
                    url: "https://my-web-srv01/OLAP/msmdpump.dll",
                    catalog: "AdventureWorksDW2012",
                    cube: "Adventure Works"
                })
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->   
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        store: new XmlaStore({
            url: 'https://my-web-srv01/OLAP/msmdpump.dll',
            catalog: 'AdventureWorksDW2012',
            cube: 'Adventure Works'
        })
    });

    export default {
        // ...
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        store: new XmlaStore({
            url: 'https://my-web-srv01/OLAP/msmdpump.dll',
            catalog: 'AdventureWorksDW2012',
            cube: 'Adventure Works'
        })
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/OLAPDataSource/"
}