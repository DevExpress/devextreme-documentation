---
type: Object
---
---
##### shortDescription
Specifies adaptive layout options.

---
When adapting to small container size, the widget may hide its accessory elements, thus saving space for more valuable ones. The elements are being hidden in the following sequence.

1. [Title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title '{basewidgetpath}/Configuration/title/')
2. [Export menu icon](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export/')
3. [Legend](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/legend '{basewidgetpath}/Configuration/legend/')
4. [Item labels](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label '{basewidgetpath}/Configuration/label/') (can be saved by setting the **adaptiveLayout**.[keepLabels](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/adaptiveLayout/keepLabels.md '{basewidgetpath}/Configuration/adaptiveLayout/#keepLabels') option to **true**)

To specify the widget's size small enough for the layout to begin adapting, use the **height** and **width** options of the **adaptiveLayout** object.

<a href="https://jsfiddle.net/ChartJS/j1v235o8/" class="button orange small fix-width-155" target="_blank">View Demo on JSFiddle</a>