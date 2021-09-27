---
id: dxToolbarItem.options
type: any
---
---
##### shortDescription
Configures the DevExtreme UI component used as a toolbar item.

---
**options** should contain the properties of the DevExtreme UI component specified in the [widget](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#widget') property. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components in Angular, Vue, and React. In these frameworks, specify **options** with an object. We recommend that you declare the object outside the configuration component in Vue and React to prevent possible issues caused by unnecessary re-rendering.

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-toolbar ... >
        <dxi-item
            widget="dxCheckBox"
            [options]="{ text: 'Show IDs' }">
        </dxi-item>
    </dx-toolbar>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxToolbar ... >
            <DxItem ...
                widget="dxCheckBox"
                :options="checkBoxOptions"
            />
        </DxToolbar>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxToolbar, {
        DxItem
    } from 'devextreme-vue/toolbar';

    export default {
        components: {
            DxToolbar,
            DxItem
        },
        data() {
            return {
                checkBoxOptions: { text: 'Show IDs' }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Toolbar, {
        Item
    } from 'devextreme-react/toolbar';

    class App extends React.Component {
        checkBoxOptions = { text: 'Show IDs' };

        render() {
            return (
                <Toolbar ... >
                    <Item
                        widget="dxCheckBox"
                        options={this.checkBoxOptions}
                    />
                </Toolbar>
            );
        }
    }
    export default App;

---

[note]If you use the Menu UI component as a toolbar item, the [adaptivityEnabled](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#adaptivityEnabled') property does not apply.

#####See Also#####
- [Toolbar - Specify Item Type](/concepts/05%20UI%20Components/Toolbar/05%20Specify%20Item%20Type.md '/Documentation/Guide/UI_Components/Toolbar/Specify_Item_Type/')