---
default: 'none'
acceptValues: 'none' | 'smallValueThreshold' | 'topN'
type: String
---
---
##### shortDescription
Specifies the segment grouping mode.

---
If you need to group specific chart segments into one, set the options of the **smallValuesGrouping** configuration object. Using the **mode** option of this object, you can define the grouping mode.

Use a *'topN'* mode to group all segments with an index that is equal to or greater than the value of the **topCount** option.

To group all segments with a value less than the value of the **threshold** option, set a *'smallValueThreshold'* mode.

To switch the grouping off, assign *'none'* to the **mode** option.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `SmallValuesGroupingMode` enum. This enum accepts the following values: `TopN`, `SmallValueThreshold` and `None`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsdoughnutseriesdoughnutwithtopnseries/"
}