---
id: CollectionWidget.Options.onItemDeleting
hidden: 
---
---
##### shortDescription
A function that is executed before a collection item is deleted from the data source.

---
You can cancel item deletion by setting the handler parameter's **cancel** field to **true**. This field also accepts a Promise (<a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native</a>), which enables you to perform an asynchronous action before an item is deleted.

---
##### jQuery

    <!-- tab: index.js -->
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

---

Note that the **onItemDeleted** and **onItemDeleting** handlers are not executed if an item is deleted from the data source without using the UI component's UI or API.