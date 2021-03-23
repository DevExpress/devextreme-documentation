Paging improves the UI component's performance on large datasets because it renders rows by pages instead of rendering them at once. To enable paging, set the **paging**.[enabled](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/paging/enabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/#enabled') property to **true**. Use the [pageSize](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/#pageSize') property to change the number of rows per page. You can also specify which page to display by default using the [pageIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageIndex.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/#pageIndex') property.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({  
            // ...
            paging: {
                enabled: true,
                pageSize: 15,
                pageIndex: 1    // Shows the second page
            }
        });
    });


#####Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-paging 
            [enabled]="true"
            [pageSize]="15"
            [pageIndex]="1"> <!-- Shows the second page -->
        </dxo-paging>
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
            <DxPaging
                :enabled="true"
                :page-size="15"
                :page-index="1" /> <!-- Shows the second page -->
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxPaging
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxPaging
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Paging
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Paging
                        enabled={true}
                        defaultPageSize={15}
                        defaultPageIndex={1} /> {/* Shows the second page */}
                </TreeList>
            );
        }
    }
    export default App;

---

[tags]TreeList, tree list, paging, pager, page size, page navigator, page info, page count
