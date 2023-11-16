---
tags: menu, orientation, direction, position, padding
---
To arrange items on the menu panel in a row (horizontally) or in a column (vertically), use the [orientation](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/orientation.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#orientation') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#menuContainer").dxMenu({
            // ...
            orientation: "horizontal" // or "vertical"
        });
    });

    <!--HTML-->
    <div id="menuContainer"></div>

##### Angular

    <!--HTML-->
    <dx-menu ...
        orientation="horizontal"> <!-- or "vertical" -->
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMenuModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMenu ...
            orientation="horizontal" <!-- or "vertical" -->
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxMenu from 'devextreme-vue/menu';

    export default {
        components: {
            DxMenu
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Menu } from 'devextreme-react/menu';

    class App extends React.Component {
        render() {
            return (
                <Menu ...
                    orientation="horizontal" {/* or "vertical" */}
                />
            );
        }
    }

    export default App;

---

If you need to shift the menu panel towards the bottom or the left side, specify <a href="http://www.w3schools.com/css/css_padding.asp" target="_blank">padding</a> for the `<div>` that contains the UI component. For example, the following code shifts the UI component towards the bottom.

    <!--HTML--><div id="menuContainer" style="padding-top:500px"></div>

When the UI component is positioned at the bottom or at the left side, you may want to change the direction in which the drop-down menus open. For this purpose, set the [submenuDirection](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/submenuDirection.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#submenuDirection') property to _"rightOrTop"_.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#menuContainer").dxMenu({
            items: menuItems,
            orientation: "horizontal", // or "vertical"
            submenuDirection: "rightToTop"
        });
    });

    <!--HTML-->
    <div id="menuContainer"></div>

##### Angular

    <!--HTML-->
    <dx-menu ...
        submenuDirection="rightToTop"
        orientation="horizontal"> <!-- or "vertical" -->
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMenuModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMenu ...
            submenu-direction="rightToTop"
            orientation="horizontal" <!-- or "vertical" -->
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxMenu from 'devextreme-vue/menu';

    export default {
        components: {
            DxMenu
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Menu } from 'devextreme-react/menu';

    class App extends React.Component {
        render() {
            return (
                <Menu ...
                    submenuDirection="rightToTop"
                    orientation="horizontal" {/* or "vertical" */}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Menu Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview)
- [Menu API Reference](/api-reference/10%20UI%20Components/dxMenu '/Documentation/ApiReference/UI_Components/dxMenu/')

