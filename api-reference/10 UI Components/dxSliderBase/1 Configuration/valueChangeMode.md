---
id: dxSliderBase.Options.valueChangeMode
type: Enums.SliderValueChangeMode
default: 'onHandleMove'
---
---
##### shortDescription
Specifies when to change the component's [value](/api-reference/10%20UI%20Components/Editor/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value').

---
If you want to change the component's [value](/api-reference/10%20UI%20Components/Editor/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value') after a user releases the component's handle, set this property to `onHandleRelease`. The moment when the [onValueChanged](/api-reference/10%20UI%20Components/Editor/1%20Configuration/onValueChanged.md '{basewidgetpath}/Configuration/#onValueChanged') function is called depends on this property:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            valueChangeMode: 'onHandleRelease',
            onValueChanged: function (e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [(value)]="value"
        valueChangeMode="onHandleRelease"
        (onValueChanged)="handleValueChange($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        value = 25;

        handleValueChange (e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
        };
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            v-model:value="value"
            value-change-mode="onHandleRelease"
            @value-changed="handleValueChange"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName} } from 'devextreme-vue/slider';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                value: 25
            };
        },
        methods: {
            handleValueChange(e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName} } from 'devextreme-react/{widget-name}';

    function App () {
        const [value, setValue] = useState(25);

        const handleValueChange = useCallback((e) => {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
            setValue(newValue);
        }, [value]);

        render() {
            return (
                <{WidgetName}
                    value={value}
                    valueChangeMode="onHandleRelease"
                    onValueChanged={handleValueChange}
                />
            );
        }
    }

    export default App;

---

#include common-demobutton-named with {
    name: "Slider Demo",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview/"
}
#include common-demobutton-named with {
    name: "RangeSlider Demo",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSlider/Overview/"
}