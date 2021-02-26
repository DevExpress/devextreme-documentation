---
id: dxTreeList.Options.editing.allowAdding
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can add new rows. It is called for each data row when defined as a function.

##### param(options): Object
Information about the current row.

##### field(options.component): dxTreeList
The UI component's instance.

##### field(options.row): dxTreeListRowObject
The row's properties.

##### return: Boolean
**true** if the row can be added; otherwise **false**.

---
In the following code, the **Add** button is added to rows whose status is _not_ *"Completed"*:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowAdding: function(e) {
                    return e.row.data.Task_Status !== "Completed";
                }
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        allowAdding: function(e) {
            return e.row.data.Task_Status !== "Completed";
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            [allowAdding]="allowAdding">
        </dxo-editing>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxEditing
                :allow-adding="allowAdding"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxEditing
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxEditing
        },
        // ...
        methods: {
            allowAdding(e) {
                return e.row.data.Task_Status !== "Completed";
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Editing
    } from 'devextreme-react/tree-list';

    export default function App() {
        const allowAdding = useCallback((e) => {
            return e.row.data.Task_Status !== "Completed";
        }, []);

        return (
            <TreeList ... >
                <Editing
                    allowAdding={allowAdding}
                />
            </TreeList>
        );
    }

---

#####See Also#####
- [onRowInserting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserting.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onRowInserting')
- [onRowInserted](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onRowInserted')
- [addRow()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/addRow().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#addRow')