---
id: dxTreeList.Options.columns
type: Array<dxTreeListColumn, String>
default: undefined
inheritsType: dxTreeListColumn
---
---
##### shortDescription
Configures columns.

---
This property accepts an array of objects, where each object configures a single column. If a column does not need to be customized, this array may include the name of the field that provides data for this column.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Title",
                caption: "Position"
            }, {
                dataField: "FullName",
                width: 300
            }, 
                "CompanyName",
                "City"
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Title" caption="Position"></dxi-column>
        <dxi-column dataField="FullName" [width]="300"></dxi-column>
        <dxi-column dataField="CompanyName"></dxi-column>
        <dxi-column dataField="City"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxColumn
                data-field="Title"
                caption="Position"
            />
            <DxColumn
                data-field="FullName"
                :width="300"
            />
            <DxColumn
                data-field="CompanyName"
            />
            <DxColumn
                data-field="City"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column
    } from 'devextreme-react/tree-list';

    export default function App() {
        return (
            <TreeList>
                <Column
                    dataField="Title"
                    caption="Position"
                />
                <Column
                    dataField="FullName"
                    width={300}
                />
                <Column
                    dataField="CompanyName"
                />
                <Column
                    dataField="City"
                />
            </TreeList>
        );
    }
    
---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview/"
}

#####See Also#####
- [Columns Overview](/concepts/05%20UI%20Components/TreeList/10%20Columns/00%20Overview.md '/Documentation/Guide/UI_Components/TreeList/Columns/Overview/')
- [columnOption(id, options)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_options).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#columnOptionid_options')
- [customizeColumns](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#customizeColumns')