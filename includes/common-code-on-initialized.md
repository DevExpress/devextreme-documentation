
---
##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        (onInitialized)="saveInstance($event)"
    ></dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { type Dx{WidgetName}Types } from 'devextreme-angular/ui/{widget-name}';
    import dx{WidgetName} from "devextreme/ui/{widget_name}";

    // ...
    export class AppComponent {
        {widgetName}Instance!: dx{WidgetName};

        saveInstance(e: Dx{WidgetName}Types.InitializedEvent): void {
            if (e.component)
                this.{widgetName}Instance = e.component;
        }
    }

##### Vue

    <!-- tab: App.vue (Composition API) -->
    <template>
        <div>
            <Dx{WidgetName} @initialized="saveInstance" />
        </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { Dx{WidgetName}, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';

    let {widgetName}Instance: Dx{WidgetName}Types.InitializedEvent['component'] | undefined;
 
    function saveInstance(e: Dx{WidgetName}Types.InitializedEvent): void {
        {widgetName}Instance = e.component;
    }
    </script>

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

##### React

    <!-- tab: App.tsx -->
    import { useCallback, useRef } from 'react';
    import { {WidgetName}, type {WidgetName}Types } from 'devextreme-react/{widget-name}';
    import dx{WidgetName} from "devextreme/ui/{widget_name}";

    function App(): JSX.Element {
        const {widgetName}Ref = useRef<dx{WidgetName}>();

        const saveInstance = useCallback((e: {WidgetName}Types.InitializedEvent) => {
            {widgetName}Ref.current = e.component;
        }, []);

        return (
            <div>
                <{WidgetName} onInitialized={saveInstance} />
            </div>
        );
    }

---