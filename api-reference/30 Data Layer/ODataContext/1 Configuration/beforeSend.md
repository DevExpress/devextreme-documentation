---
type: function()
---
---
##### shortDescription
A function used to customize a web request before it is sent.

---
The method passed to this option should take on a **request** object as a parameter, which provides the following fields.

- **async** - specifies whether the request is asynchronous or synchronous
- **method** - a string representing the request method ("GET", "POST", "PATCH", or "MERGE")
- **url** - the request URL
- **params** - the additional request parameters
- **payload** - the request body; for example, when updating an item, this property holds the value object
- **headers** - an object holding the request headers
- **timeout** - the request timeout