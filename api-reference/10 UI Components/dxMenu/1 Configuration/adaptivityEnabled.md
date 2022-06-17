---
id: dxMenu.Options.adaptivityEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether adaptive rendering is enabled. This property is in effect only if the [orientation](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/orientation.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#orientation') is *"horizontal"*.

---
If you enable adaptive rendering, the Menu is shown as a list icon, and Menu items are arranged hierarchically like [TreeView](/concepts/05%20UI%20Components/TreeView/00%20Getting%20Started%20with%20TreeView '/Documentation/Guide/UI_Components/TreeView/Getting_Started_with_TreeView/') items. This functionality is enabled only if the container's width is less than the Menu width. 

The following code example sets the container's width to 400 pixels, sets the Menu width to 500 pixels, and enables adaptive rendering to demonstrate the behavior described above.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#menu").dxMenu({
            // ...
            adaptivityEnabled: true,
            width: 500
        });
    });

    <!-- tab: index.html -->
    <div id="container">
        <div id="menu"></div>
    </div>

    <!-- tab: index.css -->
    #container {
        width: 400px;
    }

##### Angular

    <!-- tab: app.component.html -->
    <div id="container">
        <dx-menu ...
            [adaptivityEnabled]="true"
            [width]="500"
        >
        </dx-menu>
    </div>

    <!-- tab: app.component.css -->
    #container {
        width: 400px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="container">
            <DxMenu ...
                :adaptivity-enabled="true"
                :width="500"
            />
        </div>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';

        import DxMenu from 'devextreme-vue/menu';

        export default {
            components: {
                DxMenu
            },
            data() {
                return {
                    // ...
                };
            }
        };
    </script>

    <style>
        #container {
            width: 400px;
        }
    </style>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Menu } from 'devextreme-react/menu';

    function App() {
        return (
            <div id="container">
                <Menu ...
                    adaptivityEnabled={true}
                    width={500}
                />
            </div>
        );
    }

    export default App;

    <!-- tab: index.css -->
    #container {
        width: 400px;
    }

---