---
type: Object
---
---
##### shortDescription
Specifies adaptive layout options.

---
When adapting to a small screen or container size, the widget may hide its accessory elements, thus saving space for more valuable ones. The elements are being hidden in the following sequence.

1. [Title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title '{basewidgetpath}/Configuration/title')
2. [Export menu icon](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export')
3. [Legend](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/legend '{basewidgetpath}/Configuration/legend')
4. [Axis titles](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/title '{basewidgetpath}/Configuration/commonAxisSettings/title')
5. [Axis labels](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/label '{basewidgetpath}/Configuration/commonAxisSettings/label')
6. [Point labels](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label '{basewidgetpath}/Configuration/commonSeriesSettings/label') (can be saved by setting the **adaptiveLayout** | [keepLabels](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/adaptiveLayout/keepLabels.md '{basewidgetpath}/Configuration/adaptiveLayout#keepLabels') option to *true*)

The widget will begin to adapt when its container shrinks beyond the **height** and **width** values specified in the **adaptiveLayout** object.

<a href="https://jsfiddle.net/ChartJS/2m1pv4ag/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo on JSFiddle</a>