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
      <td>&larr; &uarr; or PageUp</td>
      <td>Moves focus to the previous tab.</td>
    </tr>
    <tr>
      <td>&rarr; &darr; or PageDown</td>
      <td> Moves focus to the next tab.</td>
    </tr>
    <tr>
        <td>Home</td>
        <td>Moves focus to the first tab.</td>
    </tr>
    <tr>
        <td>End</td>
        <td>Moves focus to the last tab.</td>
    </tr>
    <tr>
        <td>Enter or Space</td>
        <td>Selects the tab. Available only if <a href="/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectionMode">selectionMode</a> is set to <i>'multiple'</i>.</td>
    </tr>
    <tr>
      <td>Shift + Mouse Wheel</td>
      <td>Scrolls the tabs left/right if the <a href="/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#scrollingEnabled">scrollingEnabled</a> option is <b>true</b>.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxTabs/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let tabs =  $("#tabsContainer").dxTabs("instance");
        tabs.registerKeyHandler("backspace", function(e) {
            // The argument "e" contains information on the event
        });
        tabs.registerKeyHandler("space", function(e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxTabsModule, DxTabsComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxTabsComponent, { static: false }) tabs: DxTabsComponent
        // Prior to Angular 8
        // @ViewChild(DxTabsComponent) tabs: DxTabsComponent
        ngAfterViewInit () {
            this.tabs.instance.registerKeyHandler("backspace", function(e) {
                // The argument "e" contains information on the event
            });
            this.tabs.instance.registerKeyHandler("space", function(e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTabsModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxTabs
            :ref="myTabsRef" />
    </template>
    <script>
    import DxTabs from "devextreme-vue/tabs";

    const myTabsRef = "my-tabs";

    export default {
        components: {
            DxTabs
        },
        data() {
            return {
                myTabsRef
            }
        },
        computed: {
            tabs: function() {
                return this.$refs[myTabsRef].instance;
            }
        },
        mounted: function() {
            this.tabs.registerKeyHandler("backspace", function(e) {
                // The argument "e" contains information on the event
            });
            this.tabs.registerKeyHandler("space", function(e) {
                // ...
            });
        }
    }
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import { Tabs } from 'devextreme-react/tabs';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.tabsRef = React.createRef();
        }

        get tabs() {
            return this.tabsRef.current.instance;
        }

        render() {
            return (
                <Tabs ref={this.tabsRef} />
            );
        }

        componentDidMount() {
            this.tabs.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information on the event
            });
            this.tabs.registerKeyHandler('space', function(e) {
                // ...
            });
        }
    }

    export default App;

---

#####See Also#####
#include common-link-callmethods
- [Tabs Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview)
- [Tabs API Reference](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/')

[tags]tabs, navigation, accessibility, keyboard shortcuts