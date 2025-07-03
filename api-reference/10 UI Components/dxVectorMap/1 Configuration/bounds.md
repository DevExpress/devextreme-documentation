---
id: dxVectorMap.Options.bounds
type: Array<Number>
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Specifies the positioning of a map in geographical coordinates.

---
To display a specific part of a map, specify coordinates in the **bounds** property. Specify an array of four values in the `[minLongitude, maxLatitude, maxLongitude, minLatitude]` order.

Refer to the following image to see how these values are applied to a map:

![ChartMargin ChartJS](/images/ChartJS/VectorMapBounds.png)

[note]

If your [dataSource](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#dataSource) range is larger than the default data range of the component ([-180 to 180] longitude and [-90 to 90] latitude), note the following specifics:

- VectorMap adjusts the default **bounds** value to fit data in the component viewport.
- To ensure **bounds** is applied correctly, specify the [projection](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/projection/) property. For more information about specifying a custom projection, refer to the following demo:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/CustomProjection"
}

[/note]