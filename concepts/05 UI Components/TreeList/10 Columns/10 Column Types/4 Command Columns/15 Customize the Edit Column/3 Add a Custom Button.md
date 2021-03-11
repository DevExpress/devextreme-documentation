Add an object to the [buttons](/api-reference/_hidden/dxTreeListColumn/buttons '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/buttons/') array and specify the button's properties in it...

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["add", "edit", "delete", {
                    text: "My Command",
                    icon: "/url/to/my/icon.ico",
                    hint: "My Command",
                    onClick: function (e) {
                        // Execute your command here
                    }
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column type="buttons">
            <dxi-button name="add"></dxi-button>
            <dxi-button name="edit"></dxi-button>
            <dxi-button name="delete"></dxi-button>
            <dxi-button
                text="My Command"
                icon="/url/to/my/icon.ico"
                hint="My Command"
                [onClick]="myCommand">
            </dxi-button>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        myCommand (e) {
            // Execute your command here
        }
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
                <DxButton 
                    text="My Command"
                    icon="/url/to/my/icon.ico"
                    hint="My Command"
                    :on-click="myCommand"
                />
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
        },
        methods: {
            myCommand(e) {
                // Execute your command here
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

    const myCommand = (e) => {
        // Execute your command here
    };

    export default function App() {
	    return (
            <TreeList ... >
                <Column type="buttons">
                    <Button name="add" />
                    <Button name="edit" />
                    <Button name="delete" />
                    <Button
                        text="My Command"
                        icon="/url/to/my/icon.ico"
                        hint="My Command"
                        onClick={myCommand}
                    />
                </Column>
            </TreeList>
        );
    }
    
---

... or use a [template](/api-reference/_hidden/dxTreeListColumnButton/template.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/buttons/#template') to render the button with custom appearance. In this case, the **onClick** function is not executed, and you should handle the `click` event of the element placed inside the template.

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                type: "buttons",
                buttons: ["add", "edit", "delete", {
                    template: function (e) {
                        // Specify custom markup here
                    }
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column type="buttons">
            <dxi-button name="add"></dxi-button>
            <dxi-button name="edit"></dxi-button>
            <dxi-button name="delete"></dxi-button>
            <dxi-button template="myCommand">
                <div *dxTemplate="let data of 'myCommand'">
                    <!-- Declare custom markup here -->
                </div>
            </dxi-button>
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
                <DxButton>
                    <template #default>
                        <!-- Declare custom markup here -->
                    </template>
                </DxButton>
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

    const renderMyCommand = () => {
        return (
            {/* Declare custom markup here */}
        );
    };

    export default function App() {
	    return (
            <TreeList ... >
                <Column type="buttons">
                    <Button name="add" />
                    <Button name="edit" />
                    <Button name="delete" />
                    <Button render={renderMyCommand} />
                </Column>
            </TreeList>
        );
    }
    
---