---
EventForAction: ..\4 Events\itemDeleting.md
hidden: 
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **itemDeleting** event. Executed before an item is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
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
To cancel item deletion, assign *true* to the **cancel** field of the handler parameter. To perform an asynchronous action before deleting an item, assign a [jQuery.Promise](https://api.jquery.com/Types/#Promise) to the **cancel** field. The item will be deleted once the Deferred object of this Promise is resolved. The code below adds a confirmation dialog displayed before the item is deleted.

    <!--JavaScript-->
    var widgetOptions = {
        onItemDeleting: function(e) {
            var d = $.Deferred();
            DevExpress.ui.dialog.confirm("Do you really want to delete the item?")
                .done(function(value) { 
                    d.resolve(!value);
                })
                .fail(d.reject);
            e.cancel = d.promise();
        }
    }

Note that the **onItemDeleted** and **onItemDeleting** handlers are not executed if an item is deleted from the data source without using the widget's UI or API.