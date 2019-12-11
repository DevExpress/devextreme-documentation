---
##### shortDescription
Enables the component to refresh after the **beginUpdate()** method call.

---
The **beginUpdate()** and **endUpdate()** methods allow you to apply several modifications to the component. After the **beginUpdate()** method is called, the component does not update the UI until the **endUpdate()** method is called. The usage of these methods prevents excessive component updating when you change multiple component setting at once.