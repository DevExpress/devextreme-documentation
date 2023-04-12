---
uid: viz/core/base_widget:BaseWidgetMargin
isType: 
---
---
##### shortDescription
Generates space around the UI component.

---
<!--
![WidgetMargin DevExtreme ChartJS](/images/ChartJS/WidgetMargin.png)

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
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

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-{widget-name} ... &gt;
        &lt;dxo-margin
            [top]="20"
            [bottom]="20"
            [left]="30"
            [right]="30"&gt;
        &lt;/dxo-margin&gt;
    &lt;/dx-{widget-name}&gt;

    &lt;!-- tab: app.component.ts --&gt;
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    &lt;!-- tab: app.module.ts --&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;Dx{WidgetName} ... &gt;
            &lt;DxMargin
                :top="20"
                :bottom="20"
                :left="30"
                :right="30"
            /&gt;
        &lt;/Dx{WidgetName}&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Margin 
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                &lt;{WidgetName} ... &gt;
                    &lt;Margin
                        top={20}
                        bottom={20}
                        left={30}
                        right={30}
                    /&gt;
                &lt;/{WidgetName}&gt;
            );
        }
    }
    export default App;

---
-->