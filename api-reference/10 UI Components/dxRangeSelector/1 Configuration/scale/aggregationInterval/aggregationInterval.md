---
id: dxRangeSelector.Options.scale.aggregationInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the length of aggregation intervals in scale units. Applies only to the scale of the continuous or logarithmic [type](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#type').

---
For data aggregation, the scale is divided into intervals. Series points that fall within the same interval get aggregated together. The **aggregationInterval** property defines the length of each interval. 

If the scale displays numbers, assign a number to this option. For example, an **aggregationInterval** of 100 produces the following intervals: 0 to 100, 100 to 200, 200 to 300, etc. If the scale displays date-time values, set this property to one of the accepted string values. Alternatively, you can set it to an object that contains one of the fields described in this section.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            scale: {
                // Interval of one day
                aggregationInterval: "day",
                // Interval of five days
                aggregationInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-range-selector ... >
        <dxo-scale
            aggregationInterval="day"> <!-- Interval of one day -->
            <dxo-aggregation-interval
                [days]="5">            <!-- Interval of five days -->
            </dxo-aggregation-interval>
        </dxo-scale>
    </dx-range-selector>

    <!--TypeScript-->
    import { DxRangeSelectorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxRangeSelectorModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxRangeSelector ... >
            <DxScale
                aggregation-interval="day">     <!-- Interval of one day -->
                <DxAggregationInterval 
                    :days="5" />                <!-- Interval of five days -->
            </DxScale>
        </DxRangeSelector>
    </template>

    <script>
    import DxRangeSelector, {
        DxScale,
        DxAggregationInterval
    } from 'devextreme-vue/range-selector';

    export default {
        components: {
            DxRangeSelector,
            DxScale,
            DxAggregationInterval
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import RangeSelector, {
        Scale,
        AggregationInterval
    } from 'devextreme-react/range-selector';

    class App extends React.Component {
        render() {
            return (
                <RangeSelector ... >
                    <Scale
                        aggregationInterval="day">    {/* Interval of one day */}
                        <AggregationInterval 
                            days={5} />                 {/* Interval of five days */}
                    </Scale>
                </RangeSelector>
            );
        }
    }

    export default App;     

---

On a [logarithmic scale](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#type'), intervals are based on powers. For example, if the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/logarithmBase.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#logarithmBase') is 10 and the **aggregationInterval** is 1, the following intervals are produced: 10<sup>0</sup> to 10<sup>1</sup>, 10<sup>1</sup> to 10<sup>2</sup>, 10<sup>2</sup> to 10<sup>3</sup>, etc. If the **aggregationInterval** becomes 2, intervals become longer: 10<sup>0</sup> to 10<sup>2</sup>, 10<sup>2</sup> to 10<sup>4</sup>, 10<sup>4</sup> to 10<sup>6</sup>, etc.

When using the UI component as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, you can specify this property using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *"day"* becomes `Day`.

#####See Also#####
- **chart**.[series](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/chart/series '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/chart/#series').[aggregation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/')
- [aggregationGroupWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/aggregationGroupWidth.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#aggregationGroupWidth')
