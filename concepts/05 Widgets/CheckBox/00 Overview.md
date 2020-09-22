The **CheckBox** is a small box, which when selected by the end user, shows that a particular feature has been enabled or a specific option has been chosen.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/CheckBox/Overview/"
}

The following code adds the **CheckBox** to your page.

---
##### jQuery

    <!--HTML-->
    <div id="checkBoxContainer"></div>
 
    <!--JavaScript-->
    $(function() {
        $("#checkBoxContainer").dxCheckBox({
            text: "Check me",
            value: undefined
        });
    });

##### Angular

    <!--HTML-->
    <dx-check-box
        text="Check me"
        [(value)]="checkBoxValue">
    </dx-check-box>

    <!--TypeScript-->
    import { DxCheckBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        checkBoxValue: boolean;
    }
    @NgModule({
        imports: [
            // ...
            DxCheckBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCheckBox
            text="Check me"
            v-model:value="checkBoxValue"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxCheckBox from 'devextreme-vue/check-box';

    export default {
        components: {
            DxCheckBox
        },
        data() {
            return {
                checkBoxValue: undefined
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import CheckBox from 'devextreme-react/check-box';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                checkBoxValue: undefined
            };
            this.handleValueChange = this.handleValueChange.bind(this);
        }

        handleValueChange(e) {
            this.setState({
                checkBoxValue: e.value
            });
        }

        render() {
            return (
                <CheckBox
                    text="Check me"
                    value={this.state.checkBoxValue}
                    onValueChanged={this.handleValueChange}
                />
            );
        }
    }
    export default App;

---

The **CheckBox** widget can have the following states: checked (the **value** option is _true_), unchecked (**value** is _false_), undetermined (**value** is _undefined_).

#####See Also#####
#include common-link-configurewidget
- [CheckBox - Handle the Value Change Event](/concepts/05%20Widgets/CheckBox/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/CheckBox/Handle_the_Value_Change_Event')
- [CheckBox - Keyboard Support](/concepts/05%20Widgets/CheckBox/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/CheckBox/Keyboard_Support')
- [CheckBox API Reference](/api-reference/10%20UI%20Widgets/dxCheckBox '/Documentation/ApiReference/UI_Widgets/dxCheckBox/')

[tags]dxcheckbox, check box, checkBox, editor, overview