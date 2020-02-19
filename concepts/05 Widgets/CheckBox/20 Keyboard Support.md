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
      <td>Space</td>
      <td>Changes the widget value.</td>
   </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxCheckBox/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let checkBox =  $("#checkBoxContainer").dxCheckBox("instance");
        checkBox.registerKeyHandler("space", function (e) {
            // The argument "e" contains information on the event
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxCheckBoxModule, DxCheckBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxCheckBoxComponent, { static: false }) checkBox: DxCheckBoxComponent
        // Prior to Angular 8
        // @ViewChild(DxCheckBoxComponent) checkBox: DxCheckBoxComponent
        ngAfterViewInit () {
            this.checkBox.instance.registerKeyHandler("space", function (e) {
                // The argument "e" contains information on the event
            });
        }
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
        <DxCheckBox :ref="myCheckBoxRef" />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxCheckBox from 'devextreme-vue/check-box';

    const myCheckBoxRef = 'my-check-box';

    export default {
        components: {
            DxCheckBox
        },
        data() {
            return {
                myCheckBoxRef
            };
        },
        computed: {
            checkBox: function() {
                return this.$refs[myCheckBoxRef].instance;
            }
        },
        mounted: function() {
            this.checkBox.registerKeyHandler("space", function(e) {
                // The argument "e" contains information on the event
            });
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

            this.checkBoxRef = React.createRef();
        }

        render() {
            return (
                <CheckBox ref={this.checkBoxRef} />
            );
        }

        get checkBox() {
            return this.checkBoxRef.current.instance;
        }

        componentDidMount() {
            this.checkBox.registerKeyHandler("space", function (e) {
                // The argument "e" contains information on the event
            });
        }
    }
    export default App;

---

#####See Also#####
#include common-link-callmethods
- [CheckBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/CheckBox/Overview)
- [CheckBox API Reference](/api-reference/10%20UI%20Widgets/dxCheckBox '/Documentation/ApiReference/UI_Widgets/dxCheckBox/')

[tags]check box, checkBox, navigation, accessibility, keyboard shortcuts