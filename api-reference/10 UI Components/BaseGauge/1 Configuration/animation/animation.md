---
id: BaseGauge.Options.animation
type: Object
---
---
##### shortDescription
Specifies animation properties.

---
To make your gauge "live", enable animation for it by setting the **enabled** property of the **animation** object to **true**. In this instance, the gauge indicators will appear in motion. In addition, within the **animation** object, you can set an appropriate easing mode using the **easing** property and specify how long the animation should run using the **duration** property.

---
##### jQuery

    <!-- tab: index.js -->
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

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-animation
            easing="linear"
            [duration]="500">
        </dxo-animation>
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
            <DxAnimation
                easing="linear"
                :duration="500"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Animation 
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Animation
                        easing="linear"
                        duration={500}
                    />
                </{WidgetName}>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().{WidgetName}()
        @* ... *@
        .Animation(a => a
            .Easing(VizAnimationEasing.Linear)
            .Duration(500)
        )
    )

---