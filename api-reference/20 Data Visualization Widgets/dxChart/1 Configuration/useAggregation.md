---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether or not to filter the series points depending on their quantity.

---
By default, a chart displays all series points. But there may be situations when displaying all the series points may affect chart performance. In this case, it is better to aggregate the series points rather than display all of them. For this purpose, set the **useAggregation** option to **true**. The aggregation is based on the [median filter](https://en.wikipedia.org/wiki/Median_filter) algorithm.

#####See Also#####
- **Points Aggregation Demo**: [Financial Charts](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregationFinancialChart/jQuery/Light) | [Line Charts](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregation/jQuery/Light)