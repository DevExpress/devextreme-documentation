A user can use the following keys to interact with the DropDownBox component: 

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Alt + &darr;</td>
        <td>Opens the drop-down field.</td>
    </tr>
</table>

Use the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Components/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Methods/#registerKeyHandlerkey_handler') method to implement a custom handler for a key.

---

##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        const dropDownBox = $("#dropDownBoxContainer").dxDropDownBox("instance");
        dropDownBox.registerKeyHandler("backspace", function(e) {
            // The argument "e" contains information on the event
        });
        dropDownBox.registerKeyHandler("escape", function(e) {
            dropDownBox.option('opened', false);
        });
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from '@angular/core';
    import { DxDropDownBoxModule, DxDropDownBoxComponent } from 'devextreme-angular';
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxDropDownBoxComponent, { static: false }) dropDownBox: DxDropDownBoxComponent;
        ngAfterViewInit () {
            this.dropDownBox.instance.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information on the event
            });
            this.dropDownBox.instance.registerKeyHandler('escape', function(e) {
                this.dropDownBox.instance.option('opened', false);
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDropDownBoxModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxDropDownBox :ref="myDropDownBoxRef" />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDropDownBox from 'devextreme-vue/{widget-name}';

    const myDropDownBoxRef = 'my-{widget-name}';

    export default {
        components: {
            DxDropDownBox
        },
        data() {
            return {
                myDropDownBoxRef
            }
        },
        computed: {
            dropDownBox: function() {
                return this.$refs[myDropDownBoxRef].instance;
            }
        },
        mounted: function() {
            this.dropDownBox.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information on the event
            });
            this.dropDownBox.registerKeyHandler('escape', function(e) {
                this.dropDownBox.option('opened', false);
            });
        }
    }
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    
    import { DropDownBox } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.dropDownBoxRef = React.createRef();
        }

        render() {
            return (
                <DropDownBox ref={this.dropDownBoxRef} />
            );
        }

        get dropDownBox() {
            return this.dropDownBoxRef.current.instance();
        }

        componentDidMount() {
            this.dropDownBox.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information on the event
            });
            this.dropDownBox.registerKeyHandler('escape', function(e) {
                this.dropDownBox.option('opened', false);
            });
        }
    }

    export default App;

---

