---
id: dxPopup.Options.toolbarItems.options
type: any
---
---
##### shortDescription
Configures the DevExtreme UI component used as a toolbar item.

---
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/",
    name: "Popup"
}

**options** should contain the properties of the DevExtreme UI component specified in the [widget](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/toolbarItems/widget.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#widget') property. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components in Angular, Vue, and React. In these frameworks, specify **options** with an object. We recommend that you declare the object outside the configuration component in Vue and React to prevent possible issues caused by unnecessary re-rendering.

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-toolbar-item
            widget="dxCheckBox"
            [options]="{ text: 'Show IDs' }">
        </dxi-toolbar-item>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxToolbarItem ...
                widget="dxCheckBox"
                :options="checkBoxOptions"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxToolbarItem
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxToolbarItem
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

    import {WidgetName}, {
        ToolbarItem
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        checkBoxOptions = { text: 'Show IDs' };

        render() {
            return (
                <{WidgetName} ... >
                    <ToolbarItem
                        widget="dxCheckBox"
                        options={this.checkBoxOptions}
                    />
                </{WidgetName}>
            );
        }
    }
    export default App;

---
