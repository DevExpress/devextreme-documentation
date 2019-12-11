---
hidden: 
type: eventType
---
---
##### shortDescription
Raised before an item is deleted from the data source.

##### param(e): object
Information about the event.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.itemData): object
The data of the to-be-deleted item.

##### field(e.itemElement): jQuery
The item's container.

##### field(e.itemIndex): number | object
The index of the to-be-deleted item.

##### field(e.cancel): boolean | Promise
Allows you to cancel the item deletion.

---
Main article: [onItemDeleting](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemDeleting.md '{basewidgetpath}/Configuration/#onItemDeleting')

#####See Also#####
- **Handle Events**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')