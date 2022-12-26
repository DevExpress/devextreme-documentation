---
id: dxToolbarItem.menuItemTemplate
type: template
---
---
##### shortDescription
Specifies a template that should be used to render a menu item.

##### return: String | Element | jQuery
A template name or container.

---
The following types of the specified value are available.

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/').
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#toolbar").dxToolbar({
            items: [
                // ...
            ],
            menuItemTemplate (data, index) {
                return $(`<div><i class='dx-icon-favorites'></i>${data.options.text}</div>`);
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-toolbar>
        <dxi-item ... 
            menuItemTemplate="menu-item"
        >
            <div *dxTemplate="let data of 'menu-item'; let index = index">
                <i class="dx-icon-favorites"></i> {{data.options.text}}
            </div>
        </dxi-item>
    </dx-toolbar>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxToolbar>
            <dxItem ... 
                menu-item-template="menu-item"
            >
                <template #menu-item="{ data, index }">
                    <i class="dx-icon-favorites"></i> {{data.options.text}}
                </template>
            </dxItem>
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
        return <div><i class="dx-icon-favorites"></i> {data.options.text}</div>;
    }

    function App() {
        return (
            <Toolbar>
                <Item ... 
                    menuItemRender={renderMenuItem}
                >
                </Item>
            </Toolbar>
        );
    }

    export default App;

---

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')