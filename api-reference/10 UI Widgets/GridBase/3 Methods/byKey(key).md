---
id: GridBase.byKey(key)
---
---
##### shortDescription
Gets a data object with a specific key.

##### return: Promise<Object>
A Promise that is resolved after the data object is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(key): Object | String | Number
The data object's key.

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