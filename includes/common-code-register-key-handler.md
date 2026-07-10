Use the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Methods/#registerKeyHandlerkey_handler') method to implement a custom handler for a key.

---

##### jQuery

    <!-- tab: index.js -->
    const {widgetName} = $('#{widgetName}Container').dx{WidgetName}('instance');

    {widgetName}.registerKeyHandler('backspace', function(e) {
        // The argument 'e' contains information about the event
    });
    {widgetName}.registerKeyHandler('space', function(e) {
        // ...
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { ViewChild, AfterViewInit } from '@angular/core';
    import { Dx{WidgetName}Module, Dx{WidgetName}Component } from 'devextreme-angular';

    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(Dx{WidgetName}Component, { static: false }) {widgetName}!: Dx{WidgetName}Component;
        // Prior to Angular 8
        // @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component;

        ngAfterViewInit () {
            this.{widgetName}.instance.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information about the event
            });
            this.{widgetName}.instance.registerKeyHandler('space', function(e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            Dx{WidgetName}Module,
        ],
    })

##### Vue

    <template>
        <Dx{WidgetName} :ref="{widgetName}Ref" />
    </template>

    <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    const {widgetName}Ref = ref(null);

    onMounted(() => {
        {widgetName}Ref.value.instance.registerKeyHandler('backspace', function(e) {
            // The argument "e" contains information about the event
        });
        {widgetName}Ref.value.instance.registerKeyHandler('space', function(e) {
            // ...
        });
    })

    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useRef, useEffect } from 'react';
    import { {WidgetName} } from 'devextreme-react/{widget-name}';

    function App() {
        const {widgetName}Ref = useRef(null);

        useEffect(() => {
            const {widgetName} = {widgetName}Ref.current.instance();
            {widgetName}.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information about the event
            });
            {widgetName}.registerKeyHandler('space', function(e) {
                // ...
            });
        }, []);

        return (
            <{WidgetName} ref={{widgetName}Ref} />
        );
    }

---
