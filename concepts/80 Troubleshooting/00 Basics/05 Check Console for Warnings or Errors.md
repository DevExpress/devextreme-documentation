If DevExtreme components work unexpectedly, the first step of troubleshooting is to check the console.

### Issue 

The **Chart.legend.**[visible](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#visible) option is enabled but the [Chart](/Documentation/ApiReference/UI_Components/dxChart/) component does not display the [legend](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/).

### Solution

The component logs a warning in the console:

    > W2104 - The legend was hidden due to the container size. See: http://js.devexpress.com/error/22_1/W2104

The Chart gives priority to a series area if the Chart does not have enough space to accommodate all elements. Change the container size.

### Issue 

The [SelectBox](/Documentation/ApiReference/UI_Components/dxSelectBox/) is bound to the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). The **SelectBox.**[value](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#value) is specified, but the value is not displayed.

### Solution

The component logs an error related to the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) implementation:

    > E4011 - Custom Store method is not implemented or is not a function: byKey. See: http://js.devexpress.com/error/22_1/E4011

Implement the [byKey](https://js.devexpress.com/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) function to resolve the issue.

You can see the full list of warnings end errors on the following page: [Errors and Warnings](https://js.devexpress.com/Documentation/ApiReference/UI_Components/Errors_and_Warnings/).