---
id: dxChart.Options.tooltip.customizeTooltip
type: function(pointInfo) | undefined
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Allows you to change tooltip appearance.

##### param(pointInfo): dxChartPointInfo
Information on the series point being pressed or hovered over with the mouse pointer.

##### return: Object
The tooltip's text or markup and appearance settings.

---
#include dataviz-customize-tooltip-return

**dxChartPointInfo** is a union of multiple types that changes based on the hovered/pressed point's series type. Refer to the following topics for additional information:

- [CommonPointInfo](/api-reference/10%20UI%20Components/dxChart/9%20Types/CommonPointInfo '{basewidgetpath}/Types/CommonPointInfo/')
- [StackedPointInfo](/api-reference/10%20UI%20Components/dxChart/9%20Types/StackedPointInfo '{basewidgetpath}/Types/StackedPointInfo/')
- [BubblePointInfo](/api-reference/10%20UI%20Components/dxChart/9%20Types/BubblePointInfo '{basewidgetpath}/Types/BubblePointInfo/')
- [CandleStickPointInfo](/api-reference/10%20UI%20Components/dxChart/9%20Types/CandleStickPointInfo '{basewidgetpath}/Types/CandleStickPointInfo/')
- [RangePointInfo](/api-reference/10%20UI%20Components/dxChart/9%20Types/RangePointInfo '{basewidgetpath}/Types/RangePointInfo/')