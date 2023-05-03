---
id: dxChart.Options.dataPrepareSettings.sortingMethod
type: Boolean | function(a, b)
default: true
---
---
##### shortDescription
Specifies the sorting order in which series points should be drawn.

##### param(a): Object
A [data source](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource') object to be compared.

##### param(b): Object
A [data source](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource') object to be compared.

##### return: Number
Specifies whether *a* goes before *b*.

---
When this property is set to **true**, the series points are drawn in order of increasing argument. Otherwise, the order of drawing the series points is the same as the order of objects in the data source.

[note]We recommend setting this property to **false** if objects in the data source are already sorted properly. This will improve UI component performance.

[note]When the [argumentType](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#argumentType') is *'numeric'* or *'datetime'*, the **sortingMethod** property does not affect the argument axis. If you want to display arguments in descending order, enable the [inverted](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#inverted) property.

Alternatively, you can specify the drawing order using a comparison function. The function accepts two data source objects and should return the value on which the order will depend. For example, assume that *A* and *B* objects represent two series points. If the function returns a value less than 0, point *A* will be drawn _before_ point *B*. If the function returns a value greater than 0, point *A* will be drawn _after_ point *B*. If the function returns 0, the drawing order of *A* and *B* remains unchanged.

[note]When the [argumentType](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#argumentType') is *'string'*, the **sortingMethod** property does not accept Boolean values. However, you can still apply sorting using a comparison function. Alternatively, use the [categories](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#categories') array to perform the same task. Note that the **categories** array has priority over the **sortingMethod** function.

The following code sorts string arguments in alphabetical order:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            dataPrepareSettings: {
                sortingMethod(a, b) {
                    return a.arg.localeCompare(b.arg);
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-data-prepare-settings
            [sortingMethod]="alphabetical">
        </dxo-data-prepare-settings>
    </dx-chart>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        alphabetical(a, b) {
            return a.arg.localeCompare(b.arg);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ... >
            <DxDataPrepareSettings
                :sorting-method="alphabetical"
            />
        </DxChart>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxChart, {
        DxDataPrepareSettings
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxDataPrepareSettings,
        },
        data() {
            // ...
        },
        methods: {
            alphabetical(a, b) {
                return a.arg.localeCompare(b.arg);
            }
        }
    }
    </script>


##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        DataPrepareSettings 
    } from 'devextreme-react/chart';

    const alphabetical = (a, b) => {
        return a.arg.localeCompare(b.arg);
    }

    function App() {
        render() {
            return (
                <Chart ... >
                    <DataPrepareSettings
                        sortingMethod={alphabetical}
                    />
                </Chart>
            );
        }
    }
    export default App;

---