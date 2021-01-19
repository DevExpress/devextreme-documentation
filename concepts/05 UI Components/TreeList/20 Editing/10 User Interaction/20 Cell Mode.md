In the cell mode, a user edits data cell by cell. Changes are saved once a cell loses the focus, or discarded if a user presses Esc. An added row is saved only when the focus is shifted from it. Choose this mode if any changes should be saved to the data source immediately.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Editing Cell Mode](/images/treelist/editing/cell_mode.png)

If you [validate data](/concepts/05%20Widgets/TreeList/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/TreeList/Editing/#Data_Validation'), a cell is locked in the editing state until a user enters a valid value or clicks the *"Cancel Changes"* button.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Editing Cell Mode Validation](/images/treelist/editing/cell_mode_validation.png)

Clicking the *"Delete"* button invokes the confirmation dialog that allows a user to cancel row deletion. Use the [confirmDelete](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/confirmDelete.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#confirmDelete') property to hide this dialog.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                mode: 'cell', 
                confirmDelete: false
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing 
            mode="cell"
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/CellEditing/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/TreeList/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/TreeList/Editing/#Data_Validation')
