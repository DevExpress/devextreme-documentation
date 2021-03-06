Editing buttons' visibility depends on the allowed editing capabilities. For example, the **Delete** button is visible if users can delete rows. You can configure the editing capabilities in the [editing](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/') object. 

The **Add**, **Edit**, and **Delete** buttons can be hidden by omitting them when declaring the [buttons](/api-reference/_hidden/dxTreeListColumn/buttons '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/buttons/') array. However, users can still use the keyboard to add, edit, and delete.

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowUpdating: true,
                allowDeleting: true
            },
            columns: [{
                type: "buttons",
                buttons: ["edit"] // The Add and Delete buttons are hidden
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowDeleting]="true">
        </dxo-editing>
        <dxi-column type="buttons">
            <dxi-button name="edit"></dxi-button>
        </dxi-column>
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
            <DxEditing
                :allow-updating="true"
                :allow-deleting="true"
            />
            <DxColumn type="buttons">
                <DxButton name="edit" />
            </DxColumn>
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxTreeList, {
        DxEditing,
        DxColumn,
        DxButton
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxEditing,
            DxColumn,
            DxButton
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import TreeList, {
        Editing,
        Column,
        Button
    } from 'devextreme-react/tree-list';

    export default function App() {
	    return (
            <TreeList ... >
                <Editing
                    allowUpdating={true}
                    allowDeleting={true}
                />
                <Column type="buttons">
                    <Button name="edit" />
                </Column>
            </TreeList>
        );
    }
    
---

You can hide an editing button or disable editing capabilities for specific rows. Use functions to specify the button's [visible](/api-reference/_hidden/dxTreeListColumnButton/visible.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/buttons/#visible') property or the **editing**.[allowAdding](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding')/[allowUpdating](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowUpdating')/[allowDeleting](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowDeleting') property. Refer to the properties' descriptions for examples.