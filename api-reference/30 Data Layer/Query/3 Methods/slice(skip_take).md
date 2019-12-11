---
##### shortDescription
Limits the data item count.

##### param(skip): Number
Specifies the count of the items to skip.

##### param(take): Number
Optional. Specifies the count of the items to pick out. If this argument is not specified, all non-skipped items will be picked out.

##### return: Object
The current Query object.

---
The following example demonstrates how to pick 5 to 15 items from the Query.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).slice(5, 10).toArray();