---
id: GridBase.byKey(key)
---
---
##### shortDescription
Gets a data object using a specific key.

##### return: Promise<Object>
A Promise that is resolved after the data object is loaded.

##### param(key): Object | String | Number
The data object's key.

---
The following code snippet calls **byKey()** and handles the returned promise:

---
##### jQuery

    $('#{widget-name}-container').dx{WidgetName}('instance')
        .byKey(15).then((dataObject) => {
            // process "dataObject"
        }).catch((error) => {
            // handle error
        });

##### Angular

    <!-- tab: app.component.ts -->
    import { ViewChild, AfterViewInit } from '@angular/core';
    import { Dx{WidgetName}Component } from "devextreme-angular/ui/{widget-name}";

    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild("{widgetName}Instance", { static: false }) {widgetName}!: Dx{WidgetName}Component;

        ngAfterViewInit () {
            this.{widgetName}.instance
                .byKey(15).then((dataObject) => {
                    // process "dataObject"
                }).catch((error) => {
                    // handle error
                });
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name} #{widgetName}Instance></dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ref="{widgetName}Ref" />
    </template>

    <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    const {widgetName}Ref = ref<Dx{WidgetName} | null>(null);

    onMounted(() => {
        {widgetName}Ref.value.instance
            .byKey(15).then((dataObject) => {
                // process "dataObject"
            }).catch((error) => {
                // handle error
            });
    })

##### React

    <!-- tab: App.tsx -->
    import React, { useRef, useEffect } from 'react';
    import { {WidgetName}, type {WidgetName}Ref } from 'devextreme-react/{widget-name}';

    function App() {
        const {widgetName}Ref = useRef<{WidgetName}Ref>(null);

        useEffect(() => {
            {widgetName}Ref.current.instance()
                .byKey(15).then((dataObject) => {
                    // process "dataObject"
                }).catch((error) => {
                    // handle error
                });
        }, []);

        return (
            <{WidgetName} ref={{widgetName}Ref} />
        );
    }

---

#####See Also#####
#include common-link-callmethods
- [instance()](/api-reference/10%20UI%20Components/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance')