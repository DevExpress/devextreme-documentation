---
id: CollectionWidget.Options.onItemDeleting
type: function(e)
default: null
hidden: 
---
---
##### shortDescription
A function that is executed before a collection item is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
Allows you to cancel the item deletion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.itemData): Object
The data of the item to be removed.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
You can cancel item deletion by setting the handler parameter's **cancel** field to **true**. This field also accepts a Promise (<a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native</a>), which enables you to perform an asynchronous action before an item is deleted.

    <!--JavaScript-->
    const widgetOptions = {
        onItemDeleting: function(e) {
            const d = $.Deferred();
            DevExpress.ui.dialog.confirm("Do you really want to delete the item?")
                .done(function(value) { 
                    d.resolve(!value);
                })
                .fail(d.reject);
            e.cancel = d.promise();
        }
    }

Note that the **onItemDeleted** and **onItemDeleting** handlers are not executed if an item is deleted from the data source without using the UI component's UI or API.