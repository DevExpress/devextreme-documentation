---
##### shortDescription
Allows you to obtain a data object by its key.

##### param(key): Object|String|Number
The key value of the required data object.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the data object has been loaded.

---
The following code shows how to get a data object whose key is 15.

    <!--JavaScript-->
    widgetInstance.byKey(15).done(function(dataObject) {
            // process "dataObject"
        }).fail(function(error) {
            // handle error
        });

#####See Also#####
#include common-link-callmethods
- [instance()](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance')