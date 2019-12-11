---
dep: minorTick\visible.md
default: true
type: Boolean
---
---
##### deprecated
Use the **minorTick** | **visible** option instead.

##### shortDescription
Indicates whether or not to show minor ticks on the scale.

---
A scale is divided by major and minor ticks by default. Major ticks have labels that display corresponding scale values. Major ticks cannot be positioned close to each other because of label overlap. Intermediate ticks are displayed between the major ticks. The intermediate ticks are called minor ticks. When the [snapToTicks](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/behavior/snapToTicks.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#snapToTicks') property is set to *true*, the sliders dock to both major and minor ticks.

To divide the scale by major ticks only, set the **showMinorTicks** property to *false*.

[note]Minor ticks are unavailable for a discrete scale.