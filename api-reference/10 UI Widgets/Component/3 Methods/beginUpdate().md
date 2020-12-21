---
id: Component.beginUpdate()
---
---
##### shortDescription
Prevents the UI component from refreshing until the [endUpdate()](/api-reference/10%20UI%20Widgets/Component/3%20Methods/endUpdate().md '{basewidgetpath}/Methods/#endUpdate') method is called.

---
The **beginUpdate()** and **endUpdate()** methods prevent the UI component from excessive updates when you are changing multiple UI component settings at once. After the **beginUpdate()** method is called, the UI component does not update its UI until the **endUpdate()** method is called.

#####See Also#####
#include common-link-callmethods