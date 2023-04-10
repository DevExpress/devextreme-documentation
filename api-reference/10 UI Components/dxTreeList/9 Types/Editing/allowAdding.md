---
uid: ui\tree_list:Editing.allowAdding
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
<!--
In the following code, the **Add** button is added to rows whose status is _not_ *"Completed"*:

---
#####jQuery

    &lt;!--JavaScript--&gt;
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

    &lt;!--TypeScript--&gt;
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

    &lt;!--HTML--&gt;
    &lt;dx-tree-list ... &gt;
        &lt;dxo-editing
            [allowAdding]="allowAdding"&gt;
        &lt;/dxo-editing&gt;
    &lt;/dx-tree-list&gt;

##### Vue

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxTreeList ... &gt;
            &lt;DxEditing
                :allow-adding="allowAdding"
            /&gt;
        &lt;/DxTreeList&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Editing
    } from 'devextreme-react/tree-list';

    export default function App() {
        const allowAdding = useCallback((e) =&gt; {
            return e.row.data.Task_Status !== "Completed";
        }, []);

        return (
            &lt;TreeList ... &gt;
                &lt;Editing
                    allowAdding={allowAdding}
                /&gt;
            &lt;/TreeList&gt;
        );
    }

---

#####See Also#####
- [onRowInserting](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onRowInserting.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onRowInserting')
- [onRowInserted](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onRowInserted')
- [addRow()](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/addRow().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#addRow')
-->