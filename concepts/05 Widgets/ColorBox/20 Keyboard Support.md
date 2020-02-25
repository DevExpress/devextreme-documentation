An end user can use the following keys to interact with the widget.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>&larr; &rarr; &uarr; &darr;</td>
      <td>Moves the color pointer.</td>
    </tr>
    <tr>
      <td>Ctrl + &uarr;</td>
      <td>Moves the RGB slider up.</td>
    </tr>
    <tr>
      <td>Ctrl + &darr;</td>
      <td>Moves the RGB slider down.</td>
    </tr>
    <tr>
      <td>Ctrl + &larr;</td>
      <td>Moves the transparency slider left.</td>
    </tr>
    <tr>
      <td>Ctrl + &rarr;</td>
      <td>Moves the transparency slider right.</td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>Selects the color.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let colorBox =  $("#colorBoxContainer").dxColorBox("instance");
        colorBox.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        colorBox.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxColorBoxModule, DxColorBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxColorBoxComponent, { static: false }) colorBox: DxColorBoxComponent
        // Prior to Angular 8
        // @ViewChild(DxColorBoxComponent) colorBox: DxColorBoxComponent
        ngAfterViewInit () {
            this.colorBox.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.colorBox.instance.registerKeyHandler("space", function (e) {
                // ...
            });
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
        <DxColorBox :ref="myColorBoxRef" />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxColorBox from 'devextreme-vue/color-box';

    const myColorBoxRef = 'my-color-box';

    export default {
        components: {
            DxColorBox
        },
        data() {
            return {
                myColorBoxRef
            };
        },
        computed: {
            colorBox: function() {
                return this.$refs[myColorBoxRef].instance;
            }
        },
        mounted: function() {
            this.colorBox.registerKeyHandler("backspace", function(e) {
                // The argument "e" contains information on the event
            });
            this.colorBox.registerKeyHandler("space", function(e) {
                // ...
            });
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

            this.colorBoxRef = React.createRef();
        }

        render() {
            return (
                <ColorBox ref={this.colorBoxRef} />
            );
        }

        get colorBox() {
            return this.colorBoxRef.current.instance;
        }

        componentDidMount() {
            this.colorBox.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.colorBox.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    export default App;

---

#####See Also#####
#include common-link-callmethods
- [ColorBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ColorBox/Overview)
- [ColorBox API Reference](/api-reference/10%20UI%20Widgets/dxColorBox '/Documentation/ApiReference/UI_Widgets/dxColorBox/')

[tags]color box, colorBox, navigation, accessibility, keyboard shortcuts