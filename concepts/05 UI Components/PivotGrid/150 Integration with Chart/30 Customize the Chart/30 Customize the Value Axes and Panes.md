To customize the automatically-generated value axes or panes, assign a callback function to the **customizeChart** field. This function will be called once - before rendering the Chart.

    pivotGridInstance.bindChart(chartInstance, {
        // ...
        customizeChart: function (chartOptions) {
            // Change Chart properties here
            return chartOptions; // This line is optional
        }
    });

The **chartOptions** object contains the following fields.

- **valueAxis**: <span style="font-size:12px">Array</span>     
Allows you to customize the automatically-created [value axes](/concepts/05%20UI%20Components/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Axes/Overview/'). Each object in this array can contain fields described in the [valueAxis](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/') property description. When this array holds several objects, use their [name](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/name.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#name') field to identify the axis.
- **panes**: <span style="font-size:12px">Array</span>        
Allows you to customize the automatically-created [panes](/concepts/05%20UI%20Components/Chart/40%20Panes/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Panes/Overview/'). Each object in this array can contain fields described in the [panes](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/panes '/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/') property description. When this array holds several objects, use their [name](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/panes/name.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/#name') field to identify the pane.

The **customizeChart(chartOptions)** function is designed mainly for customizing the automatically-generated Chart elements. However, the argument of this function accepts any [property](/api-reference/10%20UI%20Components/dxChart/1%20Configuration '/Documentation/ApiReference/UI_Components/dxChart/Configuration/') of Chart that configures the UI component's appearance. Alternatively, you can specify the properties when you design the Chart. They merge with the properties returned by the **customizeChart(chartOptions)** function.