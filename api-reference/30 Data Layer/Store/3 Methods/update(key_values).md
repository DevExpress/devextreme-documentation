---
##### shortDescription
Updates the data item specified by the key.

##### param(key): Object|String|Number
The key value of the item being updated.

##### param(values): Object
The object containing new values for the specified item.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the item has been updated.

---
<!--JavaScript-->
    store.update(key, values)
        .done(function(key, result) {
            // "key" contains the key of the updated item
            // "result" contains the updated item itself
        })
        .fail(function(error) {
            // handle error
        });