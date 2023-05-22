---
uid: viz/gauges/base_gauge:BaseGaugeAnimation
isType: 
module: viz/gauges/base_gauge
export: BaseGaugeAnimation
generateTypeLink: 
---
---
##### shortDescription
Specifies animation properties.

---
<!--
To make your gauge "live", enable animation for it by setting the **enabled** property of the **animation** object to **true**. In this instance, the gauge indicators will appear in motion. In addition, within the **animation** object, you can set an appropriate easing mode using the **easing** property and specify how long the animation should run using the **duration** property.

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            animation: {
                easing: "linear",
                duration: 500
            }
        });
    });

##### Angular

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-{widget-name} ... &gt;
        &lt;dxo-animation
            easing="linear"
            [duration]="500"&gt;
        &lt;/dxo-animation&gt;
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
            &lt;DxAnimation
                easing="linear"
                :duration="500"
            /&gt;
        &lt;/Dx{WidgetName}&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxAnimation
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxAnimation
        },
        // ...
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Animation 
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                &lt;{WidgetName} ... &gt;
                    &lt;Animation
                        easing="linear"
                        duration={500}
                    /&gt;
                &lt;/{WidgetName}&gt;
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    &lt;!-- tab: Razor C# --&gt;
    @(Html.DevExtreme().{WidgetName}()
        @* ... *@
        .Animation(a =&gt; a
            .Easing(VizAnimationEasing.Linear)
            .Duration(500)
        )
    )

---
-->