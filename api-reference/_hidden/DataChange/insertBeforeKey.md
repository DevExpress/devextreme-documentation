---
id: DataChange.insertBeforeKey
type: any
---
---
##### shortDescription
A key that identifies the record before which a new record should be inserted. Applies only if the [type](/api-reference/_hidden/DataChange/type.md '{currentpath}/#type') is *"insert"*.

---
The following code inserts a new record before a record with key 5:

    <!-- tab: JavaScript -->
    changes.push({
        type: "insert",
        data: { ... },
        insertBeforeKey: 5
    });

[important] Do not use **insertBeforeKey** with [insertAfterKey](/api-reference/_hidden/DataChange/insertAfterKey.md '{currentpath}/#insertAfterKey').

#####See Also#####
- [newRowPosition](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/newRowPosition.md '{basewidgetpath}/Configuration/editing/#newRowPosition')