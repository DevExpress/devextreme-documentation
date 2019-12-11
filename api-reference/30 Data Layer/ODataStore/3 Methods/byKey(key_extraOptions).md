---
##### shortDescription
Returns the data item specified by the key.

##### param(key): Object|String|Number
Specifies the key value of the required items.

##### param(extraOptions): Object
An object specifying additional options.

##### field(extraOptions.expand): String|Array
An array of the strings that represent the names of the navigation properties to be loaded synchronously with the requested data item (see <a href="/Documentation/16_2/Guide/Data_Layer/Data_Source_Examples/#OData/Associations">Associations</a>).

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the item has been loaded.

---
