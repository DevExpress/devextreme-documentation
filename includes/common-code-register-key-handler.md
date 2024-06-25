Use the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Methods/#registerKeyHandlerkey_handler') method to implement a custom handler for a key.

---

##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        const {widgetName} = $("#{widgetName}Container").dx{WidgetName}("instance");
        {widgetName}.registerKeyHandler("backspace", function(e) {
            // The argument "e" contains information on the event
        });
        {widgetName}.registerKeyHandler("space", function(e) {
            // ...
        });
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from '@angular/core';
    import { Dx{WidgetName}Module, Dx{WidgetName}Component } from 'devextreme-angular';
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(Dx{WidgetName}Component, { static: false }) {widgetName}: Dx{WidgetName}Component;
        // Prior to Angular 8
        // @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component;

        ngAfterViewInit () {
            this.{widgetName}.instance.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information on the event
            });
            this.{widgetName}.instance.registerKeyHandler('space', function(e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <template>
        <Dx{WidgetName} :ref="my{WidgetName}Ref" />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    const my{WidgetName}Ref = 'my-{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                my{WidgetName}Ref
            }
        },
        computed: {
            {widgetName}: function() {
                return this.$refs[my{WidgetName}Ref].instance;
            }
        },
        mounted: function() {
            this.{widgetName}.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information on the event
            });
            this.{widgetName}.registerKeyHandler('space', function(e) {
                // ...
            });
        }
    }
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    
    import { {WidgetName} } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.{widgetName}Ref = React.createRef();
        }

        render() {
            return (
                <{WidgetName} ref={this.{widgetName}Ref} />
            );
        }

        get {widgetName}() {
            return this.{widgetName}Ref.current.instance();
        }

        componentDidMount() {
            this.{widgetName}.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information on the event
            });
            this.{widgetName}.registerKeyHandler('space', function(e) {
                // ...
            });
        }
    }

    export default App;

---
