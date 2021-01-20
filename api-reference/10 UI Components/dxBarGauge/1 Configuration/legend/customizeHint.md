---
id: dxBarGauge.Options.legend.customizeHint
type: function(arg)
---
---
##### shortDescription
Specifies the hint that appears when a user hovers the mouse pointer over a legend item.

##### param(arg): Object
Information on the bar and its corresponding legend item.

##### field(arg.item): BarGaugeBarInfo
Information on the bar.

##### field(arg.text): String
The legend item's text.

##### return: String
The text to be displayed in the hint.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the bar that corresponds to the legend item.