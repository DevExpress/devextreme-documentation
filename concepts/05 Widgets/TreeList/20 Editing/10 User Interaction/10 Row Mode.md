In this mode a user edits data row by row. When a user clicks an *"Edit"* button, the corresponding row enters the editing state, and the *"Save"* and *"Cancel"* buttons appear in the [edit column](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Command_Columns/'). The widget saves changes only if the *"Save"* button is clicked. If a user starts editing another row, sorts or filters data, it discards the changes.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Row Mode Editing State](/images/treelist/editing/row_mode_editing_state.png)

Clicking the *"Delete"* button invokes the confirmation dialog that allows a user to cancel row deletion. Use the [confirmDelete](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/confirmDelete.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#confirmDelete') option to hide this dialog.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                // ...
                mode: 'row',
                allowDeleting: true,
                confirmDelete: false
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing 
            mode="row"
            [confirmDelete]="false"
            [allowDeleting]="true">
        </dxo-editing>
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
                mode="row"
                :allow-deleting="true"
                :confirm-delete="false"
            />
        </DxTreeList>
    </template>

    <script>
    import { DxTreeList, DxEditing } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList, 
            DxEditing
        },
        data() {}
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { TreeList, Editing } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Editing
                        mode="row"
                        confirmDelete={false}
                        allowDeleting={true} 
                    />
                </TreeList>
            );
        }
    }
    export default App;
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/RowEditing/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/TreeList/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/TreeList/Editing/#Data_Validation')
