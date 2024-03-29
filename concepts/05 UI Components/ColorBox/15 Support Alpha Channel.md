By default, the ColorBox does _not_ allow an end user to control the transparency, or alpha channel component, of the selected color. If you need to allow this, set the [editAlphaChannel](/api-reference/10%20UI%20Components/dxColorBox/1%20Configuration/editAlphaChannel.md '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#editAlphaChannel') property to **true**. This setting adds a slider that regulates transparency to the drop-down editor, and changes the textual representation of the selected color from hexadecimal to RGBA.

---
##### jQuery

    <!--JavaScript-->
     $(function() {
        $("#colorBoxContainer").dxColorBox({
            value: "rgba(255, 144, 0, 0.3)",
            editAlphaChannel: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-color-box
        [(value)]="color"
        [editAlphaChannel]="true">
    </dx-color-box>

    <!--TypeScript-->
    import { DxColorBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        color: string = "rgba(255, 144, 0, 0.3)"
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
            :edit-alpha-channel="true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxColorBox from 'devextreme-vue/color-box';

    export default {
        components: {
            DxColorBox
        },
        data() {
            return {
                color: "rgba(255, 144, 0, 0.3)"
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import ColorBox from 'devextreme-react/color-box';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                value: "rgba(255, 144, 0, 0.3)"
            }
            this.handleValueChange = this.handleValueChange.bind(this);
        }

        handleValueChange(e) {
            this.setState({
                value: e.value
            });
        }

        render() {
            return (
                <ColorBox
                    value={this.state.value}
                    editAlphaChannel={true}
                    onValueChanged={this.handleValueChange}
                />
            );
        }
    }
    export default App;

---

#####See Also#####
- [ColorBox - Handle the Value Change Event](/concepts/05%20UI%20Components/ColorBox/00%20Getting%20Started%20with%20ColorBox/20%20Handle%20Value%20Change.md '/Documentation/Guide/UI_Components/ColorBox/Getting_Started_with_ColorBox/#Handle_Value_Change')
- [ColorBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ColorBox/Overview)
- [ColorBox API Reference](/api-reference/10%20UI%20Components/dxColorBox '/Documentation/ApiReference/UI_Components/dxColorBox/')

[tags]color box, colorBox, editor, transparency, alpha channel 