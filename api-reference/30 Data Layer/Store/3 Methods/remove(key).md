---
##### shortDescription
Removes the data item specified by the key.

##### param(key): object|string|number
The data item key value.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the item has been removed.

---
<!--JavaScript-->
    store.remove(key)
        .done(function() {
            // handle success
        })
        .fail(function(error) {
            // handle error
        });