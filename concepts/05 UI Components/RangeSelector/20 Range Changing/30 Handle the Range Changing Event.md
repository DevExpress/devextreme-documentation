RangeSelector provides the capability to perform actions when a selected range is changed. Implement a callback function performing the required actions and assign it to the [onValueChanged](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#onValueChanged') property. When implementing this function, you can access the previous and new ranges using the **previousValue** and **value** fields of the object passed as the parameter or the **this** object.

The function assigned to the **onValueChanged** property can be called either when moving a slider or after the movement has been completed. To specify when the **onValueChanged** function should be called, use the **behavior**.[callValueChanged](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/behavior/#callValueChanged') property. 

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/UseRangeSelectionForCalculation/",
    name: "Use Range Selection for Calculation"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/UseRangeSelectionForFiltering/",
    name: "Use Range Selection for Filtering"
}