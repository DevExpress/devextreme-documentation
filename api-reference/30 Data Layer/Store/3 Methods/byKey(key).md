---
##### shortDescription
Returns the data item specified by the key.

##### param(key): object|string|number
Specifies the key value of the required items.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the item has been loaded.

---
The following example demonstrates how to get an item whose key property value equals **15**.

    <!--JavaScript-->
    store.byKey(15).done(function(dataItem) {
            // process 'dataItem'
        }).fail(function(error) {
            // handle error
        });