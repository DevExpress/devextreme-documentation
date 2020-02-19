By default, the **ColorBox** applies value after an end user clicks the "Apply" button. To change this behavior, assign *'instantly'* to the [applyValueMode](/api-reference/10%20UI%20Widgets/dxColorBox/1%20Configuration/applyValueMode.md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#applyValueMode') option. In this case, the widget applies the value immediately after an end user chooses a color in the drop-down editor. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#colorBoxContainer").dxColorBox({
            value: "#FF0000",
            applyValueMode: 'instantly'
        });
    });

##### Angular

    <!--HTML-->
    <dx-color-box
        [(value)]="color"
        applyValueMode="instantly">
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
            value="#FF0000"
            apply-value-mode="instantly"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxColorBox from 'devextreme-vue/color-box';

    export default {
        components: {
            DxColorBox
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
        render() {
            return (
                <ColorBox
                    value="#FF0000"
                    applyValueMode="instantly"
                />
            );
        }
    }
    export default App;

---

To process a new **ColorBox** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#onValueChanged') option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#colorBoxContainer").dxColorBox({
            onValueChanged: function (e) {
                let previousValue = e.previousValue;
                let newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-color-box ...
        (onValueChanged)="colorBox_valueChanged($event)">
    </dx-color-box>

    <!--TypeScript-->
    import { DxColorBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        colorBox_valueChanged (e) {
            let previousValue = e.previousValue;
            let newValue = e.value;
            // Event handling commands go here
        }
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
            :onValueChanged="colorBox_valueChanged"
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
                colorBox_valueChanged: function (e) {
                    let previousValue = e.previousValue;
                    let newValue = e.value;
                    // Event handling commands go here
                }
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
        colorBox_valueChanged(e) {
            let previousValue = e.previousValue;
            let newValue = e.value;
            // Event handling commands go here
        }

        render() {
            return (
                <ColorBox
                    onValueChanged={this.colorBox_valueChanged}
                />
            );
        }
    }
    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var valueChangedHandler1 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // First handler of the "valueChanged" event
    };

    var valueChangedHandler2 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // Second handler of the "valueChanged" event
    };

    $("#colorBoxContainer").dxColorBox("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [ColorBox - Support Alpha Channel](/concepts/05%20Widgets/ColorBox/15%20Support%20Alpha%20Channel.md '/Documentation/Guide/Widgets/ColorBox/Support_Alpha_Channel')
- [ColorBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ColorBox/Overview)
- [ColorBox API Reference](/api-reference/10%20UI%20Widgets/dxColorBox '/Documentation/ApiReference/UI_Widgets/dxColorBox/')

[tags]color box, colorBox, editor, handle, get value, set value