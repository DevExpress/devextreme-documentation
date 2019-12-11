---
type: function
---
---
##### shortDescription
The user implementation of the [remove(key)](/api-reference/30%20Data%20Layer/Store/3%20Methods/remove(key).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey') method.

##### param(key): object|string|number
The key value of the item being removed.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the item has been removed.

---
The method passed to this option should return either the [jQuery.Deferred](https://api.jquery.com/jQuery.Deferred) promise or **jQuery.Deferred** compatible object.