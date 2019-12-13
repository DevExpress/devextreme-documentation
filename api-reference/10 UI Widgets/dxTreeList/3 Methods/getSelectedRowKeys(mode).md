---
id: dxTreeList.getSelectedRowKeys(mode)
---
---
##### shortDescription
Gets the selected rows' keys.

##### return: Array<any>
Keys of selected rows. The keys are stored in the order the user selects rows.

##### param(mode): String
*"all"*, *"excludeRecursive"*, or *"leavesOnly"*.

---
Below is an example of a **TreeList** with several selected rows:

![Selection in the DevExtreme TreeList widget](/images/treelist/getselectedrowkeys.png)

The **getSelectedRowKeys(mode)** method called for this **TreeList** returns different results depending on the **mode** argument:

- *"all"*        
Returns all the selected rows' keys.

        getSelectedRowKeys("all") // returns [2, 5, 8, 9, 6, 10, 4]

- *"excludeRecursive"*        
Excludes recursively selected rows' keys.

        getSelectedRowKeys("excludeRecursive") // returns [2, 6, 10, 4]

- *"leavesOnly"*          
Returns only leaves' keys.

        getSelectedRowKeys("leavesOnly") // returns [8, 9, 6, 10, 4]

#####See Also#####
#include common-link-callmethods
- [getSelectedRowsData(mode)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowsData(mode).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowsDatamode')