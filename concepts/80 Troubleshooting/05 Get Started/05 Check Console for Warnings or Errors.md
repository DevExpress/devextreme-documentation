If DevExtreme components work unexpectedly, the first step of troubleshooting is to check the console.

#### Case 

The [Chart]() component does not display the [legend](). The **Chart.legend.**[visible](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#visible) option is enabled.

#### Troubleshooting

The component logs a warning in the console:

    > W2104 - The legend was hidden due to the container size. See: http://js.devexpress.com/error/22_1/W2104

The Chart gives priority to series area if it does not have enough space to accommodate all elements. Change the container size.

#### Case 

The [SelectBox]() is bound to the [CustomStore](). The **SelectBox.**[value]() is specified, but the value is not displayed.

#### Troubleshooting

The component logs an error related to [CustomStore]() implementation:

    > E4011 - Custom Store method is not implemented or is not a function: byKey. See: http://js.devexpress.com/error/22_1/E4011

Implement the [byKey](https://js.devexpress.com/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) function to resolve the issue.

You can see the full list of warnings end errors on the following page: [Errors and Warnings](https://js.devexpress.com/Documentation/ApiReference/UI_Components/Errors_and_Warnings/).