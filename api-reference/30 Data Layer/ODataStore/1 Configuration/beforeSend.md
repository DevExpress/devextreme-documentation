---
type: function(options)
---
---
##### shortDescription
A function used to customize a web request before it is sent.

##### param(options): Object
Specifies the request parameters.

##### field(options.url): String
The request URL.

##### field(options.async): Boolean
Specifies whether the request is asynchronous or synchronous.

##### field(options.method): String
A string that specifies the request method ("GET", "POST", "PATCH", or "MERGE").

##### field(options.timeout): Number
The request timeout.

##### field(options.params): Object
The additional request parameters.

##### field(options.payload): Object
The request body; for example, when updating an item, this property holds the values object.

##### field(options.headers): Object
An object holding the request headers.

---
