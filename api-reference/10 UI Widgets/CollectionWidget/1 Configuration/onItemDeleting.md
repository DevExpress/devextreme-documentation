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

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.itemData): Object
The data of the item to be removed.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number|Object
The item's index.

##### field(e.cancel): Boolean|Promise<void>
Allows you to cancel the item deletion.

---
You can cancel item deletion by setting the handler parameter's **cancel** field to **true**. This field also accepts a Promise ([jQuery](https://api.jquery.com/Types/#Promise) or [native](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)), which enables you to perform an asynchronous action before an item is deleted.

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