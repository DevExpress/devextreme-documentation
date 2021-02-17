The TextBox is a UI component that enables a user to enter and edit a single line of text.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextBox/Overview/"
}

The following code adds a simple TextBox with a [placeholder](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#placeholder') to your page.

---
##### jQuery

    <!--HTML--><div id="textBoxContainer" style="width:300px"></div>

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            placeholder: "Type a text here..."
        });
    });

##### Angular

    <!--HTML-->
    <dx-text-box
        placeholder="Type a text here...">
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
        <DxTextBox placeholder="Type a text here..."/>
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
                    placeholder="Type a text here..."
                />
            );
        }
    }

    export default App;

---

If an end user should _not_ be able to edit the value in the TextBox, assign **true** to the **readOnly** property. In this case, make sure to set the **value** property too.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            value: "The value that should not be edited",
            readOnly: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-text-box
        value="The text that should not be edited"
        [readOnly]="true">
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
        <DxTextBox
            :read-only="true"
            value="The value that should not be edited"
        />
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
                    readOnly={true}
                    defaultValue="The value that should not be edited"
                />
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [TextBox - Task-Specific Modes](/concepts/05%20Widgets/TextBox/05%20Task-Specific%20Modes.md '/Documentation/Guide/UI_Components/TextBox/Task-Specific_Modes/')
- [TextBox - Handle the Value Change Event](/concepts/05%20Widgets/TextBox/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/TextBox/Handle_the_Value_Change_Event/')
- [TextBox - Handle the Keyboard Events](/concepts/05%20Widgets/TextBox/13%20Handle%20the%20Keyboard%20Events.md '/Documentation/Guide/UI_Components/TextBox/Handle_the_Keyboard_Events/')
- [TextBox - Limit the String Length](/concepts/05%20Widgets/TextBox/15%20Limit%20the%20String%20Length.md '/Documentation/Guide/UI_Components/TextBox/Limit_the_String_Length/')
- [TextBox - Specify a Mask for the Input](/concepts/05%20Widgets/TextBox/20%20Specify%20a%20Mask%20for%20the%20Input.md '/Documentation/Guide/UI_Components/TextBox/Specify_a_Mask_for_the_Input/')
- [TextBox API Reference](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/')
- [TextArea](/concepts/05%20Widgets/TextArea/00%20Overview.md '/Documentation/Guide/UI_Components/TextArea/Overview/')

[tags]dxtextbox, textBox, text box, editor, overview