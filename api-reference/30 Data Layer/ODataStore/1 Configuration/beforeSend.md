---
type: function
---
---
##### shortDescription
A function used to customize a web request before it is sent.

##### param(options): object
Specifies the request parameters.

##### field(options.url): string
The request URL.

##### field(options.async): boolean
Specifies whether the request is asynchronous or synchronous.

##### field(options.method): string
A string that specifies the request method ("GET", "POST", "PATCH", or "MERGE").

##### field(options.timeout): number
The request timeout.

##### field(options.params): object
The additional request parameters.

##### field(options.payload): object
The request body; for example, when updating an item, this property holds the values object.

##### field(options.headers): object
An object holding the request headers.

---
