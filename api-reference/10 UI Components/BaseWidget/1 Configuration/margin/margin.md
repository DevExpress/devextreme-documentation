---
id: BaseWidget.Options.margin
type: Object
---
---
##### shortDescription
Generates space around the UI component.

---
![WidgetMargin DevExtreme ChartJS](/images/ChartJS/WidgetMargin.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            margin: {
                top: 20,
                bottom: 20,
                left: 30,
                right: 30
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-margin
            [top]="20"
            [bottom]="20"
            [left]="30"
            [right]="30">
        </dxo-margin>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxMargin
                :top="20"
                :bottom="20"
                :left="30"
                :right="30"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxMargin 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxMargin
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Margin 
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Margin
                        top={20}
                        bottom={20}
                        left={30}
                        right={30}
                    />
                </{WidgetName}>
            );
        }
    }
    export default App;

---