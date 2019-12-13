To limit the string length, assign an integer number to the **maxLength** option. By default, the string length is unlimited.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            maxLength: 10
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-box
        [maxLength]="10">
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

##### React

    import React from 'react';
    import { TextBox } from 'devextreme-react/text-box';

    class App extends React.Component {
        render() {
            return (
                <TextBox
                    maxLength={10}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [TextBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextBox/Overview)
- [TextBox API Reference](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/')

[tags]textBox, text box, editor, string length, text length, maxLength