---
id: dxBarGauge.Options.legend.markerTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies an SVG element that serves as a custom legend item marker.

##### param(legendItem): BarGaugeLegendItem
Information about a legend item.

##### param(element): SVGGElement
A marker's container.

##### return: String | SVGElement | jQuery
One of the following:

- Template name
- SVG markup as a string
- SVGElement
- jQuery element that contains an SVGElement

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomLegendMarkers/"
}

#include dataviz-ref-legend-markertemplate