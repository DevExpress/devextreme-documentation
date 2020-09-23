The **ContextMenu** widget is not supposed to be opened programmatically, but rare scenarios demand this. This article shows how to do this using the **Button** widget. This choice is made for purely demonstrational purposes, and you can do the same with another widget following the same guidelines.

#####See Also#####
- [ContextMenu - Overview](/concepts/05%20Widgets/ContextMenu/00%20Overview.md '/Documentation/Guide/Widgets/ContextMenu/Overview/')
- [Button - Overview](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/')

To open or close the **ContextMenu** from code, call the [show()](/api-reference/10%20UI%20Widgets/dxContextMenu/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#show') or [hide()](/api-reference/10%20UI%20Widgets/dxContextMenu/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#hide') method. You can do the same thing using the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxContextMenu/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#toggleshowing') method. Pass **true** or **false** to this method to open or close the context menu, respectively.

    <!--JavaScript-->
    var contextMenuItems = [
        { text: 'Zoom In', icon: 'plus' },
        { text: 'Share', icon: 'message' },
        { text: 'Download', icon: 'download' }
    ];

    $(function() {
        $("#buttonContainer").dxButton({
            text: "Open the context menu",
            onClick: function() {
                $("#contextMenuContainer").dxContextMenu("show");
                // === or ===
                $("#contextMenuContainer").dxContextMenu("toggle", true);
            }
        });

        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement"
        });
    });

When using Angular, Vue or React, use a different approach. Bind the [visible](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#visible') property of the **ContextMenu** widget to a component property. After that, change this property or variable, and the context menu will be opened or closed.

---

##### Angular

    <!--HTML-->
    <dx-button
        text="Open the context menu"
        (onClick)="isContextMenuVisible = true">
    </dx-button>
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someElement"
        [(visible)]="isContextMenuVisible">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: 'Zoom In', icon: 'plus' },
            { text: 'Share', icon: 'message' },
            { text: 'Download', icon: 'download' }
        ];
        isContextMenuVisible = false;
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule,
             DxButtonModule
         ],
         // ...
     })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxButton
                text="Open the context menu"
                @click="openContextMenu"
            />
            <DxContextMenu
                :items="contextMenuItems"
                target="#someElement"
                v-model:visible="isContextMenuVisible"
            />
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxButton from 'devextreme-vue/button';
    import DxContextMenu from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu,
            DxButton
        },
        data() {
            return {
                contextMenuItems: [
                    { text: 'Zoom In', icon: 'plus' },
                    { text: 'Share', icon: 'message' },
                    { text: 'Download', icon: 'download' }
                ],
                isContextMenuVisible: false
            };
        },
        methods: {
            openContextMenu() {
                this.isContextMenuVisible = true;
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Button } from 'devextreme-react/button';
    import { ContextMenu } from 'devextreme-react/context-menu';

    const contextMenuItems = [
        { text: 'Zoom In', icon: 'plus' },
        { text: 'Share', icon: 'message' },
        { text: 'Download', icon: 'download' }
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
               isContextMenuVisible: false 
            };
        }

        render() {
            return (
                <div>
                    <Button
                        text="Open the context menu"
                        onClick={this.openContextMenu}
                    />
                    <ContextMenu
                        items={contextMenuItems}
                        target="#someElement"
                        visible={this.state.isContextMenuVisible}
                        onOptionChanged={this.handleOptionChange}
                    />
                </div>
            );
        }

        openContextMenu = () => {
            this.setState({
              isContextMenuVisible: true;  
            })
        }
        
        handleOptionChange = (e) => {
            if(e.fullName === 'visible') {
                this.setState({
                    isContextMenuVisible: e.value
                });
            }
        }
    }

    export default App;

---

When invoking the context menu from code, you may want to specify its [position](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#position').

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#contextMenuContainer").dxContextMenu({
            // ...
            target: "#someElement",
            position: {
                my: "top right",
                at: "top left"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-context-menu ...
        target="#someElement"
        [position]="contextMenuPosition">
    </dx-context-menu>

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxContextMenuModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        contextMenuPosition = {
            my: 'top right', 
            at: 'top left' 
        };
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule,
             DxButtonModule
         ],
         // ...
     })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxContextMenu ...
            target="#someElement"
            :position="contextMenuPosition"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxContextMenu from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu
        },
        data() {
            return {
                contextMenuPosition: {
                    my: 'top right', 
                    at: 'top left' 
                }
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ContextMenu } from 'devextreme-react/context-menu';

    const contextMenuPostion = { 
        my: 'top right', 
        at: 'top left' 
    };

    class App extends React.Component {
        render() {
            return (
                <ContextMenu ...
                    target="#someElement"
                    position={contextMenuPosition}
                />
            );
        }
    }

    export default App;

---

This configuration of the **position** option reads as follows: "place **my** _top right_ corner **at** the _top left_ corner of the target element".