---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether to enable two-way data binding.

---
Two-way data binding ensures that the UI tracks changes made in the data source by a 3rd-party component, and vice versa. This way, the widget and its data source stay synchronized. 
If you implement two-way data binding in the widget on your own using the [cellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate') and/or [editCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') options, make sure to set the **twoWayBindingEnabled** option to **false**.

[note] The widget provides two-way data binding through Knockout, Angular or AngularJS resources, so make sure to [add these libraries](/concepts/00%20Getting%20Started/01%20Installation/00%20DevExtreme%20Dependencies.md '/Documentation/Guide/Getting_Started/Installation/DevExtreme_Dependencies/') to your app.