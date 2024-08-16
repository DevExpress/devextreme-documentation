---
id: DataChange.key
type: any
---
---
##### shortDescription
The key of the row being created, updated, or removed.

---

The **key** property supports a simple and composite keys.


    <!-- tab: JavaScript -->changes.push({
        type: 'update',
        data: { FirstName : 'name1', LastName: 'name2' }

        key: 1 // simple key
        // or ...
        key: {ID: 1, SecondID: 2} // composite key
    });
