If DevExtreme components work unexpectedly, the first step of troubleshooting is to check the console.

### Issue 

The **Chart.legend.**[visible](/api-reference/10%20UI%20Components/BaseLegend/visible.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#visible') option is enabled but the [Chart](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/') component does not display the [legend](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/legend '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/').

### Solution

The component logs a warning in the console:

    > W2104 - The legend was hidden due to the container size. See: http://js.devexpress.com/error/22_1/W2104

The Chart gives priority to a series area if the Chart does not have enough space to accommodate all elements. Change the container size.

### Issue 

The [SelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/') is bound to the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). The **SelectBox.**[value](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#value') is specified, but the value is not displayed.

### Solution

The component logs an error related to the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') implementation:

    > E4011 - Custom Store method is not implemented or is not a function: byKey. See: http://js.devexpress.com/error/22_1/E4011

Implement the [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') function to resolve the issue.

You can see the full list of warnings end errors on the following page: [Errors and Warnings](/api-reference/10%20UI%20Components/Errors%20and%20Warnings '/Documentation/ApiReference/UI_Components/Errors_and_Warnings/').