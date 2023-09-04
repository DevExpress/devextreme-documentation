---
id: dxRangeSelector.Options.scale.minRange
type: Number | Object | Enums.TimeInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the minimum range that can be selected.

---
Use this property to set the minimum range that can be selected. When moving a slider to a position near the other slider that is closer than the specified minimum range, the marker will display the last possible value that it can be set to, and change the font color to 'red'. You can set the color used to indicate an invalid range by using the **invalidRangeColor** property of the [sliderMarker](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/sliderMarker/invalidRangeColor.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/sliderMarker/#invalidRangeColor') configuration object.

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

[note]For a [discrete scale](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#type'), setting a minimum range is not a property. For a [semidiscrete scale](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#type'), setting a minimum range is, conversely, required.

[note]The **minRange** property specifies the minimum range that can be selected in the UI. If you select a range in code, for example, using the [setValue(value)](/api-reference/10%20UI%20Components/dxRangeSelector/3%20Methods/setValue(value).md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Methods/#setValuevalue') method, the **minRange** property will be ignored.

You can also set the maximum range that can be selected using the [maxRange](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/maxRange '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/maxRange/') property.