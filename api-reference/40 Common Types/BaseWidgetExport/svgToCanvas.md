---
uid: viz/core/base_widget:BaseWidgetExport.svgToCanvas
type: function(svg, canvas) | undefined
default: undefined
---
---
##### shortDescription
A function that renders SVG markup on the HTML canvas. Required to export custom SVG elements (for example, [markerTemplate](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/legend/markerTemplate.md '{basewidgetpath}/Configuration/legend/#markerTemplate')).

##### param(svg): SVGElement
An SVG element that will be parsed.

##### param(canvas): HTMLCanvasElement
A container where the content of the SVG element is drawn.

##### return: Promise<void>
A Promise that is resolved after the HTML canvas content is rendered.

---
