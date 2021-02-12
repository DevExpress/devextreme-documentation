By default, the **ContextMenu** appears when a user right-clicks the [target element](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/target.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/#target'). This action corresponds to the [dxcontextmenu](/api-reference/10%20UI%20Widgets/UI%20Events/dxcontextmenu.md '/Documentation/ApiReference/UI_Components/UI_Events/#dxcontextmenu') event. If you need the **ContextMenu** to appear when another event is raised, assign the event's name to the [showEvent](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/showEvent '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/showEvent/') property. This property can accept several events at once as well as an object.

---

##### jQuery

    <!--JavaScript-->
    var contextMenuItems = [
        { text: 'Zoom In', icon: 'plus' },
        { text: 'Share', icon: 'message' },
        { text: 'Download', icon: 'download' }
    ];

    $(function() {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement",
            showEvent: "dxcontextmenu dblclick"
        });
    });

##### Angular

    <!--HTML-->
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someElement"
        showEvent="dxcontextmenu dblclick">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: 'Zoom In', icon: 'plus' },
            { text: 'Share', icon: 'message' },
            { text: 'Download', icon: 'download' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxContextMenuModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxContextMenu
            :items="contextMenuItems"
            target="#someElement"
            showEvent="dxcontextmenu dblclick"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxContextMenu from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu
        },
        data() {
            return {
                contextMenuItems: [
                    { text: 'Zoom In', icon: 'plus' },
                    { text: 'Share', icon: 'message' },
                    { text: 'Download', icon: 'download' }
                ]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { ContextMenu } from 'devextreme-react/context-menu';

    const contextMenuItems = [
        { text: 'Zoom In', icon: 'plus' },
        { text: 'Share', icon: 'message' },
        { text: 'Download', icon: 'download' }
    ];

    class App extends React.Component {
        render() {
            return (
                <ContextMenu
                    items={contextMenuItems}
                    target="#someElement"
                    showEvent="dxcontextmenu dblclick"
                />
            );
        }
    }

    export default App;

---

The **ContextMenu** is closed when a user clicks anywhere outside it. You can redefine this behavior or turn it off completely using the [closeOnOutsideClick](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/closeOnOutsideClick.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/#closeOnOutsideClick') property. For example, the **ContextMenu** in the following code will not be closed until its own target element is clicked.

---

##### jQuery

    <!--JavaScript-->
    var contextMenuItems = [
        { text: 'Zoom In', icon: 'plus' },
        { text: 'Share', icon: 'message' },
        { text: 'Download', icon: 'download' }
    ];

    $(function() {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement",
            closeOnOutsideClick: function(e){
                return e.target === $("#someElement").get()[0];
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someElement"
        (closeOnOutsideClick)="closeOnOutsideClick($event)">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: 'Zoom In', icon: 'plus' },
            { text: 'Share', icon: 'message' },
            { text: 'Download', icon: 'download' }
        ];
        closeOnOutsideClick(e) {
            return e.target === document.getElementById('someElement');
        }
    }
    @NgModule({
        imports: [
            // ...
            DxContextMenuModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxContextMenu
            :items="contextMenuItems"
            target="#someElement"
            :close-on-outside-click="closeOnOutsideClick"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxContextMenu from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu
        },
        data() {
            return {
                contextMenuItems: [
                    { text: 'Zoom In', icon: 'plus' },
                    { text: 'Share', icon: 'message' },
                    { text: 'Download', icon: 'download' }
                ]
            };
        },
        methods: {
            closeOnOutsideClick(e) {
                return e.target === document.getElementById('someElement');
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { ContextMenu } from 'devextreme-react/context-menu';

    const contextMenuItems = [
        { text: 'Zoom In', icon: 'plus' },
        { text: 'Share', icon: 'message' },
        { text: 'Download', icon: 'download' }
    ];

    class App extends React.Component {
        render() {
            return (
                <ContextMenu
                    items={contextMenuItems}
                    target="#someElement"
                    closeOnOutsideClick={this.closeOnOutsideClick}
                />
            );
        }

        closeOnOutsideClick(e) {
            return e.target === document.getElementById('someElement');
        }
    }

    export default App;

---