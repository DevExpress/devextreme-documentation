---
type: object
---
---
##### shortDescription
Specifies chart segment grouping options.

---
If you need to group specific chart segments into one, use the options of the **smallValuesGrouping** configuration object.

You can group segments in two different modes. Use a *'topN'* mode to group all segments that have an index that is equal to or greater than the value of the **topCount** option. To group all segments with the value less than the value of the **threshold** option, use a *'smallValueThreshold'* mode.

By default, the resulting segment is called *"others"*. To change this name, specify the **groupName** option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartspieseriespiegroupingsmallvalues/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>