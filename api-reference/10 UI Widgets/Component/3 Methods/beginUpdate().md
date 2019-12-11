---
##### shortDescription
Prevents the component from refreshing until the **endUpdate()** method is called.

---
The **beginUpdate()** and **endUpdate()** methods allow you to apply several modifications to the component. After the **beginUpdate()** method is called, the component does not update the UI until the **endUpdate()** method is called. The usage of these methods prevents excessive component updating when you are changing multiple component settings at once.