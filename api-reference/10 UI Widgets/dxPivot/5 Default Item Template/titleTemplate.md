---
type: template
---
---
##### shortDescription
A template used for rendering the item title.

##### return: String|Node|jQuery
A template name or container.

---
[note]An item title template's binding context is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object's fields directly (see the code above). To access another binding context within an item title template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Item Appearance](/concepts/05%20Widgets/Pivot/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Pivot/Customize_Item_Appearance/')