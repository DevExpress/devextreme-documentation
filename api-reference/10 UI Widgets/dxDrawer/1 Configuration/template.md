---
id: dxDrawer.Options.template
type: template
default: 'panel'
---
---
##### shortDescription
Specifies the drawer's content.

##### param(Element): dxElement
The container for the content. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

---
![DevExtreme HTML5 JavaScript Drawer](/images/UIWidgets/drawer.png)

This option specifies the drawer's content. To specify the view's content, nest it inside the **Drawer**'s markup element as shown in the code below.

[important] Always specify a fixed width for the drawer's content. This width is used to calculate the drawer's width.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#drawerContainer").dxDrawer({
            template: function() {
                const $drawerContent = $("<div>").width(200);
                // ...
                // Specify the drawer's content here
                // ...
                return $drawerContent;
            }
        });
    });

<!---->

    <!-- tab: index.html -->
    <div id="drawerContainer">
        <!-- Declare the view's content here -->
    </div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-drawer
        template="drawer-content">
        <div *dxTemplate="let data of 'drawer-content'" style="width:200px;">
            <!-- Declare the drawer's content here -->
        </div>
        <!-- Declare the view's content here -->
    </dx-drawer>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDrawer
            template="drawer-content">
            <template #drawer-content="{ data }" style="width:200px;">
                <!-- Declare the drawer's content here -->
            </template>
            <!-- Declare the view's content here -->
        </DxDrawer>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDrawer from 'devextreme-vue/drawer';

    export default {
        components: {
            DxDrawer
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Drawer from 'devextreme-react/drawer';

    function DrawerContent() {
        return (
            <div style={{ width: 200 }}>
                {/* Declare the drawer's content here */}
            </div>
        )
    }

    export default function App() {
        return (
            <Drawer
                render={DrawerContent}>
                {/* Declare the view's content here */}
            </Drawer>
        );
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Drawer/LeftOrRightPosition/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
