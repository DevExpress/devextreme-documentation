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
      <td>&uarr; or PageUp</td>
      <td>Sets focus to the previous panel.</td>
    </tr>
    <tr>
      <td>&darr; or PageDown</td>
      <td>Sets focus to the next panel.</td>
    </tr>
    <tr>
      <td>Home</td>
      <td>Sets focus to the first panel.</td>
    </tr>
    <tr>
      <td>End</td>
      <td>Sets focus to the last panel.</td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>Expands the focused panel.</td>
    </tr>
    <tr>
      <td>Space</td>
      <td>Collapses the focused panel.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let accordion =  $("#accordionContainer").dxAccordion("instance");
        accordion.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        accordion.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxAccordionModule, DxAccordionComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxAccordionComponent, { static: false }) accordion: DxAccordionComponent
        // Prior to Angular 8
        // @ViewChild(DxAccordionComponent) accordion: DxAccordionComponent
        ngAfterViewInit () {
            this.accordion.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.accordion.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxAccordion
            :ref="myAccordionRef" />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxAccordion from "devextreme-vue/accordion";

    const myAccordionRef = "my-accordion";

    export default {
        components: {
            DxAccordion
        },
        data() {
            return {
                myAccordionRef
            }
        },
        computed: {
            accordion: function() {
                return this.$refs[myAccordionRef].instance;
            }
        },
        mounted: function() {
            this.accordion.registerKeyHandler("backspace", function(e) {
                // The argument "e" contains information on the event
            });
            this.accordion.registerKeyHandler("space", function(e) {
                // ...
            });
        }
    }
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import { Accordion } from 'devextreme-react/accordion';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.accordionRef = React.createRef();
        }

        get accordion() {
            return this.accordionRef.current.instance;
        }

        render() {
            return (
                <Accordion ref={this.accordionRef} />
            );
        }

        componentDidMount() {
            this.accordion.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information on the event
            });
            this.accordion.registerKeyHandler('space', function(e) {
                // ...
            });
        }
    }

    export default App;

---

#####See Also#####
#include common-link-callmethods
- [Accordion Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Accordion/Overview)
- [Accordion API Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/dxAccordion/')

[tags]accordion, accessibility, keyboard shortcuts