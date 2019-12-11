---
##### shortDescription
Gets a data object with a specific key.

##### param(key): Object|String|Number
The data object's key.

##### return: Promise<Object>
A Promise that is resolved after the data object is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

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