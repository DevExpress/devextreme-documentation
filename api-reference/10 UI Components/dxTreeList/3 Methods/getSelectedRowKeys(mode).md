---
id: dxTreeList.getSelectedRowKeys(mode)
---
---
##### shortDescription
Gets selected row keys.

##### return: Array<any>
Selected row keys. Keys are stored in the order users select rows.

##### param(mode): String
*"all"*, *"excludeRecursive"*, or *"leavesOnly"*.

---
Below is an example of a TreeList with several selected rows:

![Selection in the DevExtreme TreeList](/images/treelist/getselectedrowkeys.png)

The **getSelectedRowKeys(mode)** method called for this TreeList returns different results depending on the **mode** argument:

- *"all"*        
Returns all selected row keys.

        getSelectedRowKeys("all") // returns [2, 5, 8, 9, 6, 10, 4]

- *"excludeRecursive"*        
Excludes keys in recursively selected rows.

        getSelectedRowKeys("excludeRecursive") // returns [2, 6, 10, 4]

- *"leavesOnly"*          
Returns keys of the end nodes ("leaves") only.

        getSelectedRowKeys("leavesOnly") // returns [8, 9, 6, 10, 4]

[note] If remote operations are enabled, **getSelectedRowKeys** retrieves selection from currently loaded rows only.

#####See Also#####
#include common-link-callmethods
- [getSelectedRowsData(mode)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/getSelectedRowsData(mode).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#getSelectedRowsDatamode')