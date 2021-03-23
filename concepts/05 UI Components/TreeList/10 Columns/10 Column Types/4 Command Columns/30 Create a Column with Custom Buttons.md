The following code shows how to add a command column with custom [buttons](/api-reference/_hidden/dxTreeListColumn/buttons '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/buttons/'). Note that the edit column should be declared explicitly because a custom command column replaces it.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["add", "edit", "delete"]
            }, 
            "firstName",
            "lastName", {
                type: "buttons",
                buttons: [
                    // Declare and configure custom buttons here
                ]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column type="buttons" [buttons]="['add', 'edit', 'delete']"></dxi-column>
        <dxi-column dataField="firstName"></dxi-column>
        <dxi-column dataField="lastName"></dxi-column>
        <dxi-column type="buttons">
            <dxi-button ... ></dxi-button>
            <!-- Declare and configure custom buttons here -->
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
            <DxColumn type="buttons">
                <DxButton name="add" />
                <DxButton name="edit" />
                <DxButton name="delete" />
            </DxColumn>
            <DxColumn data-field="firstName" />
            <DxColumn data-field="lastName" />
            <DxColumn type="buttons">
                <DxButton ... />
                <!-- Declare and configure custom buttons here -->
            </DxColumn>
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxTreeList, {
        DxColumn,
        DxButton
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
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
        Column,
        Button
    } from 'devextreme-react/tree-list';

    export default function App() {
	    return (
            <TreeList ... >
                <Column type="buttons">
                    <Button name="add" />
                    <Button name="edit" />
                    <Button name="delete" />
                </Column>
                <Column dataField="firstName" />
                <Column dataField="lastName" />
                <Column type="buttons">
                    <Button ... />
                    {/* Declare and configure custom buttons here */}
                </Column>
            </TreeList>
        );
    }

---
