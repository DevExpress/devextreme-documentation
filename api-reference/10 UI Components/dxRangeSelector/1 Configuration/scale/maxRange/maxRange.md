---
id: dxRangeSelector.Options.scale.maxRange
type: Number | Object | Enums.TimeInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the maximum range that can be selected.

---
Use this property to set the maximum range that can be selected. When trying to move a slider from the other slider further than the specified maximum range, the marker will display the last possible value that can be set and change the font color to 'red'. You can set which color to use to indicate an invalid range. For this purpose, use the **invalidRangeColor** property of the [sliderMarker](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/sliderMarker/invalidRangeColor.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/sliderMarker/#invalidRangeColor') configuration object.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#range-selector').dxRangeSelector({
            // ...
            scale: {
                startValue: new Date(2023, 1, 1),
                endValue: new Date(2023, 6, 1),
                tickInterval: 'day',
                minRange: {
                    days: 10
                }
                maxRange: 'month',
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-range-selector ... >
        <dxo-scale
            [startValue]="startValue"
            [endValue]="endValue"
            tickInterval="day"
            [minRange]="minRange"
            maxRange="month"
        >
        </dxo-scale>
    </dx-range-selector>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        startValue: Date = new Date(2023, 1, 1);
        endValue: Date = new Date(2023, 6, 1);
        minRange: Object = {
            days: 10
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxRangeSelector ... >
            <DxScale
                :start-value="startValue"
                :end-value="endValue"
            >
                <DxTickInterval :days="1"/>
                <DxMinRange :days="10"/>
                <DxMaxRange :months="1"/>
            </DxScale>
        </DxRangeSelector>
    </template>
    <script setup>
        import DxRangeSelector, { DxScale, DxTickInterval, DxMinRange, DxMaxRange } from 'devextreme-vue/range-selector';
        const startValue = new Date(2023, 1, 1);
        const endValue = new Date(2023, 6, 1);
    </script>

##### React

    <!-- tab: App.js -->
    import {
        RangeSelector, Scale, MinorTick,
    } from 'devextreme-react/range-selector';

    const startValue = new Date(2023, 1, 1);
    const endValue = new Date(2023, 6, 1);
    const minRange = {
        days: 10
    };

    function App() {
    return (
        <RangeSelector ... >
        <Scale 
            startValue={startValue} 
            endValue={endValue}
            tickInterval="day" 
            minRange={minRange} 
            maxRange="month"
        />
        </RangeSelector>
    );
    }

    export default App;

---

In case of the numeric scale, assign a numeric value to this property. If the scale is of the date-time type, assign one of the predefined string values or an object to this property. The object's properties specify the number of days, hours, etc.

[note]Setting a maximum range is unavailable for a discrete scale.

You can also set a minimum range that can be selected, using the [minRange](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/minRange '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/minRange/') property.