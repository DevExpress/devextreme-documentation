---
id: DataChange.insertAfterKey
type: any
---
---
##### shortDescription
A key that identifies a record after which a new record should be inserted. Applies only if the [type](/api-reference/_hidden/DataChange/type.md '{currentpath}/#type') is *"insert"*.

---
The following code inserts a new record after a record with key 10:

    <!-- tab: JavaScript -->
    changes.push({
        type: "insert",
        data: { ... },
        insertAfterKey: 10
    });

[important] Do not use **insertAfterKey** with [insertBeforeKey](/api-reference/_hidden/DataChange/insertBeforeKey.md '{currentpath}/#insertBeforeKey').

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomNewRecordPosition/"
}