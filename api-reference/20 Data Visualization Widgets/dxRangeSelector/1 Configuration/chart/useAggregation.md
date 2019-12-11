---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether or not to filter the series points depending on their quantity.

---
By default, the **RangeSelector** chart displays all series points. But there may be situations when displaying all series points may affect chart performance. In this case, it is better to aggregate the series points rather than display all of them. For this purpose, set the **useAggregation** option to *true*. The aggregation is based on the [median filter](https://en.wikipedia.org/wiki/Median_filter) algorithm.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesresamplepoint/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>