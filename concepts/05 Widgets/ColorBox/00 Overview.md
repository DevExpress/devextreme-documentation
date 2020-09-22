The **ColorBox** is a widget that allows an end user to enter a color or pick it out from the drop-down editor.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ColorBox/Overview/"
}

The following code adds a simple **ColorBox** to your page.

---
##### jQuery

    <!--HTML-->
    <div id="colorBoxContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#colorBoxContainer").dxColorBox({
            value: "#FF0000"
        });
    });

##### Angular

    <!--HTML-->
    <dx-color-box
        [(value)]="color">
    </dx-color-box>

    <!--TypeScript-->
    import { DxColorBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        color: string = "#FF0000"
    }
    @NgModule({
        imports: [
            // ...
            DxColorBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxColorBox
            v-model:value="color"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxColorBox from 'devextreme-vue/color-box';

    export default {
        components: {
            DxColorBox
        },
        data() {
            return {
                color: "#FF0000"
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import ColorBox from 'devextreme-react/color-box';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                color: "#FF0000"
            };
            this.handleValueChange = this.handleValueChange.bind(this);
        }

        handleValueChange(e) {
            this.setState({
                color: e.value
            });
        }

        render() {
            return (
                <ColorBox
                    value={this.state.color}
                    onValueChanged={this.handleValueChange}
                />
            );
        }
    }
    export default App;

---

The **ColorBox** accepts colors in hexadecimal (_"#FF0000"_), RGB (_"rgb(255, 0, 0)"_) and RGBA (_"rgba(255, 0, 0, 1)"_) formats, as well as <a href="http://www.w3schools.com/cssref/css_colors.asp" target="_blank">color names</a>. When an end user selects a color from the drop-down editor, the textual representation of the selected color is hexadecimal.

#####See Also#####
#include common-link-configurewidget
- [ColorBox - Handle the Value Change Event](/concepts/05%20Widgets/ColorBox/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/ColorBox/Handle_the_Value_Change_Event')
- [ColorBox - Support Alpha Channel](/concepts/05%20Widgets/ColorBox/15%20Support%20Alpha%20Channel.md '/Documentation/Guide/Widgets/ColorBox/Support_Alpha_Channel')
- [ColorBox - Keyboard Support](/concepts/05%20Widgets/ColorBox/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/ColorBox/Keyboard_Support')
- [ColorBox API Reference](/api-reference/10%20UI%20Widgets/dxColorBox '/Documentation/ApiReference/UI_Widgets/dxColorBox/')

[tags]dxcolorbox, color box, colorBox, editor, overview