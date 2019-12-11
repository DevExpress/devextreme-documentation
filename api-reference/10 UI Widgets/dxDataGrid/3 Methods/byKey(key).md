---
##### shortDescription
Allows you to obtain a data object by its key.

##### param(key): Object|String|Number
The key value of the required data object.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the data object has been loaded.

---
The following code snippet demonstrates how to get a data object whose key equals **15**.

    <!--JavaScript-->
    dataGridInstance.byKey(15).done(function(dataObject) {
            // process 'dataObject'
        }).fail(function(error) {
            // handle error
        });