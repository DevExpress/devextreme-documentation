---
id: dxSliderBase.Options.callValueChange
acceptValues: 'onMoving' | 'onMovingComplete'
type: String
default: 'onMoving'
---
---
##### shortDescription
Specifies when to call the [onValueChanged]({basewidgetpath}/Configuration/#onValueChanged) function.

---
If you want to call the [onValueChanged]({basewidgetpath}/Configuration/#onValueChanged) after a user finishes moving the component's handle, set this property to `onMovingComplete`:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            callValueChange: 'onMovingComplete',
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
        callValueChange="onMovingComplete"
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
            call-value-change="onMovingComplete"
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
                    callValueChange="onMovingComplete"
                    onValueChanged={handleValueChange}
                />
            );
        }
    }

    export default App;

---