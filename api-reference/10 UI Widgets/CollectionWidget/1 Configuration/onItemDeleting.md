---
EventForAction: ..\4 Events\itemDeleting.md
hidden: 
default: null
type: function
---
---
##### shortDescription
A handler for the [itemDeleting](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemDeleting.md '{basewidgetpath}/Events/#itemDeleting') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item to be removed.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
Specifies the index of the item being deleted.

##### return: Promise
A Promise of the jQuery Deferred object resolved if the item deletion is confirmed and rejected if deletion is canceled.

---
You can use this option to add a confirmation dialog displayed when a widget item is deleted.

    <!--JavaScript-->
    var widgetOptions = {
        onItemDeleting: function(e) {
            return DevExpress.ui.dialog.confirm("Do you really want to delete the item?");
        })
    }

Assign a function to perform a custom action before a collection item is deleted.

Note that the **itemDeleting** event is raised only if an item is being deleted using the appropriate method of the widget or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** option, the widget entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.