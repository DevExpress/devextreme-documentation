Depending on the value the **TextBox** should hold, specify the UI component [mode](/api-reference/10%20UI%20Widgets/dxTextBox/1%20Configuration/mode.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#mode') option. When set to *"email"*, *"tel"* or *"url"*, this option affects the set of keyboard buttons shown on a mobile device when the UI component gets focused. When set to *"search"* or *"password"*, the **mode** option impacts the visual representation of the UI component. For example, the following code hides input characters behind asterisks.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            mode: "password"
        });
    });

##### Angular

    <!--HTML-->
    <dx-text-box
        mode="password">
    </dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxTextBox mode="password"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTextBox } from 'devextreme-vue/text-box';

    export default {
        components: {
            DxTextBox
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TextBox } from 'devextreme-react/text-box';

    class App extends React.Component {
        render() {
            return (
                <TextBox
                    mode="password"
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [TextBox - Specify a Mask for the Input](/concepts/05%20Widgets/TextBox/20%20Specify%20a%20Mask%20for%20the%20Input.md '/Documentation/Guide/Widgets/TextBox/Specify_a_Mask_for_the_Input/')
- [TextBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextBox/Overview)
- [TextBox API Reference](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/')

[tags]textBox, text box, editor, mode, password, search, email, phone, url