---
id: dxToolbar.Options.menuItemTemplate
type: template
default: 'menuItem'
---
---
##### shortDescription
Specifies a custom template for menu items.

##### param(itemData): Object
The current menu item's data.

##### param(itemIndex): Number
The current menu item's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Element | jQuery
A template name or container.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#toolbar").dxToolbar({
            items: [
                // ...
            ],
            menuItemTemplate (data, index) {
                return $(`<div>${(index + 1)}. ${data.options.text}</div>`);
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-toolbar
        menuItemTemplate="menu-item"
    >
        <dxi-item ... >
        </dxi-item>
        <div *dxTemplate="let data of 'menu-item'; let index = index">
            {{index + 1}}. {{data.options.text}}
        </div>
    </dx-toolbar>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxToolbar
            menu-item-template="menu-item"
        >
            <dxItem ... >
            </dxItem>
            <template #menu-item="{ data, index }">
                {{index + 1}}. {{data.options.text}}
            </template>
        </DxToolbar>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Toolbar, { Item } from 'devextreme-react/toolbar';

    const renderMenuItem = (data, index) => {
        return <div>{index + 1}. {data.options.text}</div>;
    }

    function App() {
        return (
            <Toolbar
                menuItemRender={renderMenuItem}
            >
                <Item ... >
                </Item>
            </Toolbar>
        );
    }

    export default App;

---

#####See Also#####
- [Customize Items](/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/#Customize_Items)
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')