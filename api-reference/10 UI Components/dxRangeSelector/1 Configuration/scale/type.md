---
id: dxRangeSelector.Options.scale.type
type: Enums.AxisScale | undefined
default: undefined
---
---
##### shortDescription
Specifies the type of the scale.

---
To decide on the scale type to use, check the [type of values](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/valueType.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#valueType') the scale contains.

The *"continuous"* type is used by default when the scale displays numeric or date-time values. Although it is divided into intervals automatically, you can specify custom intervals using the [tickInterval](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/tickInterval '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/tickInterval/') and [minorTickInterval](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/minorTickInterval '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/minorTickInterval/') properties.

The *"logarithmic"* type can be set for numeric values. A logarithmic axis is useful when you visualize a dataset of rapidly-growing values. Each scale tick represents a particular value that is raised to the next power in turn. This particular value is specified by the [logarithmBase](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/logarithmBase.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#logarithmBase') property. For example, if you set this property to 5, the following ticks will be generated: 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup>, 5<sup>3</sup>, etc.

The scale will have the *"discrete"* type if it is built on string values. Values on this scale are called "categories". They can be generated automatically from the [data source](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#dataSource') or you can specify them explicitly using the [categories](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/categories.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#categories') property.

In addition, RangeSelector provides a scale of the *'semidiscrete'* type. Use it when you need to divide continuous data (numeric or date-time) into categories and allow the user to operate strictly with them. This scale type requires the [minRange](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/minRange '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/minRange/') property to be set. For example, the following code builds a semidiscrete scale on date-time values. This scale is divided into months, and the user operates with them as if they were categories.

    <!--JavaScript-->var rangeSelectorOptions = {
        // ...
        scale: {
            startValue: new Date(2015, 0, 1),
            endValue: new Date(2016, 0, 1),
            type: 'semidiscrete',
            minRange: 'month'
        }
    };

Another example: a semidiscrete scale built on numeric values. This time, the scale is divided into tens. 

    <!--JavaScript-->var rangeSelectorOptions = {
        // ...
        scale: {
            startValue: 0,
            endValue: 100,
            type: 'semidiscrete',
            minRange: 10
        }
    };

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/LogarithmicScale/"
}