---
id: dxRangeSelector.Options.scale.discreteAxisDivisionMode
acceptValues: 'betweenLabels' | 'crossLabels'
type: String
default: 'betweenLabels'
---
---
##### shortDescription
Specifies whether ticks and grid lines should cross the labels or lie between them. Applies only if the [scale](Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#type) is *"discrete"*.

---

The scale displays ticks and grid lines between labels. You can set the **discreteAxisDivisionMode** property to *"crossLabels"* to display scale labels next to major ticks and grid lines.

![dxRangeSelector - discreteAxisDivisionMode](/images/ChartJS/range-selector-discreteAxisDivisionMode.png)

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#range-selector").dxRangeSelector({
            discreteAxisDivisionMode: 'crossLabels',
            // ...
        });
    }); 

##### Angular

    <!-- tab: app.component.html -->
    <dx-range-selector
        [discreteAxisDivisionMode]="crossLabels">
        <!-- ... -->
    </dx-range-selector>

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
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxRangeSelectorModule } from 'devextreme-angular';

    @NgModule({
        imports: [
            BrowserModule,
            DxRangeSelectorModule
        ],        
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxRangeSelector
            :discrete-axis-division-mode="crossLabels" >
            <!-- ... -->
        </DxRangeSelector>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';

        import { 
            DxRangeSelector
            // ... 
        } from 'devextreme-vue/range-selector';
        
        export default {
            components: { 
                DxRangeSelector
                // ... 
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import RangeSelector, { 
        // ... 
    } from 'devextreme-react/range-selector';

    const App = () => {
        return (
            <RangeSelector
                discreteAxisDivisionMode="crossLabels" >
                {/* ... */}
            </RangeSelector>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().RangeSelector()
        .DiscreteAxisDivisionMode(DiscreteAxisDivisionMode.CrossLabels)
        // ...
    )

---