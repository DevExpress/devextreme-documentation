---
default: 'auto'
acceptValues: 'auto' | 'onClick'
type: String
---
---
##### shortDescription
Specifies when to apply a filter.

---
By default, a filter applies automatically when a user finishes typing a string in a filter row cell. Alternatively, you can give a user the opportunity to apply a filter at a required time. To do this, assign *'onClick'* to the **applyFilter** option. In this case, a filter will be applied by a click on the *"Apply Filter"* button.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `GridApplyFilterMode` enum. This enum accepts the following values: `Auto` and `OnClick`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridfilteringandsortingfiltering/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>