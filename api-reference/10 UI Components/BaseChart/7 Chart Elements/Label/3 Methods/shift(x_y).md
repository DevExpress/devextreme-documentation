---
id: baseLabelObject.shift(x, y)
---
---
##### shortDescription
Moves label to the specified location.

##### return: Object
The label's instance.

##### param(x): Number
The `x` coordinate.

##### param(y): Number
The `y` coordinate.

---
The origin is at the upper-left corner of the Chart. The coordinates are positive numbers that specify the distance between the origin and the label.

The following example moves label of a point of a bar Chart to the position above the bar:

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#chart').dxChart({
            // ...
            series: {
                // ...
                label: {
                    visible: true,
                }
            },
            onDrawn: function(e) {
                const point = e.component.getSeriesByPos(0).getPointByPos(5);
                const label = point.getLabel();
                const rect = point.getBoundingRect();
                const labelRect = label.getBoundingRect();
                label.shift(rect.x + rect.width/2 - labelRect.width/2, rect.y  - labelRect.height*1.5);  
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ...
        (onDrawn)="moveLabel($event)" 
    >
        <dxi-series ...
            type="bar"
        >
            <dxo-label ... 
                [visible]="true" 
            >
            </dxo-label>
        </dxi-series>
    </dx-chart>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        // ...
        moveLabel (e) {
            const point = e.component.getSeriesByPos(0).getPointByPos(5);
            const label = point.getLabel();
            const rect = point.getBoundingRect();
            const labelRect = label.getBoundingRect();
            label.shift(rect.x + rect.width/2 - labelRect.width/2, rect.y  - labelRect.height*1.5); 
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ...
            @drawn="moveLabel"
        >
            <DxSeries ...
                type="bar"
            >
                <DxLabel :visible="true"/>
            </DxSeries>
        </DxChart>
    </template>
    <script>
    import { DxChart, DxSeries, DxLabel } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxLabel
        },
        data() {
            return {
            dataSource,
            };
        },
        methods: {
            moveLabel (e) {
                const point = e.component.getSeriesByPos(0).getPointByPos(5);
                const label = point.getLabel();
                const rect = point.getBoundingRect();
                const labelRect = label.getBoundingRect();
                label.shift(rect.x + rect.width/2 - labelRect.width/2, rect.y  - labelRect.height*1.5); 
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import { Chart, Series, Label } from 'devextreme-react/chart';

    const moveLabel = (e) => {
        const point = e.component.getSeriesByPos(0).getPointByPos(5);
        const label = point.getLabel();
        const rect = point.getBoundingRect();
        const labelRect = label.getBoundingRect();
        label.shift(rect.x + rect.width/2 - labelRect.width/2, rect.y  - labelRect.height*1.5); 
    };

    function App() {
        return (
            <Chart ... 
                onDrawn={moveLabel}
            >
                <Series ...
                    type="bar"
                >
                    <Label visible={true} />
                </Series>
            </Chart>
        );
    }

    export default App;

---