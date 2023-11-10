---
##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onInitialized)="saveInstance($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import {WidgetName} from "devextreme/ui/data_grid";
    // ...
    export class AppComponent {
        {widgetName}Instance: {WidgetName};
        saveInstance (e) {
            this.{widgetName}Instance = e.component;
        }
    }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <div>
            <Dx{WidgetName} ...
                @initialized="saveInstance">
            </Dx{WidgetName}>
        </div>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data: function() {
            return {
                {widgetName}Instance: null
            };
        },
        methods: {
            saveInstance: function(e) {
                this.{widgetName}Instance = e.component;
            }
        }
    };
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <div>
            <Dx{WidgetName} ...
                @initialized="saveInstance">
            </Dx{WidgetName}>
        </div>
    </template>

    <script setup>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    let {widgetName}Instance = null;
 
    const saveInstance = (e) => {
        {widgetName}Instance = e.component;
    }
    </script>

##### React

    <!-- tab: App.js -->
    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.saveInstance = this.saveInstance.bind(this);
        }

        saveInstance(e) {
            this.{widgetName}Instance = e.component;
        }

        render() {
            return (
                <div>
                    <{WidgetName} onInitialized={this.saveInstance} />
                </div>
            );
        }
    }

---