---
##### shortDescription
Gets the selected rows' data objects.

##### param(mode): String
*"all"*, *"excludeRecursive"*, or *"leavesOnly"*.

##### return: Array<any>
The selected rows' data objects.

---
Below is an example of a **TreeList** with several selected rows:

![Selection in the DevExtreme TreeList widget](/images/treelist/getselectedrowkeys.png)

The **getSelectedRowsData(mode)** method called for this **TreeList** returns different results depending on the **mode** argument:

- *"all"*        
Returns all the selected rows' data objects.

        getSelectedRowsData("all") // returns data objects with the following keys: 2, 5, 8, 9, 6, 10, and 4

- *"excludeRecursive"*        
Excludes recursively selected rows' data objects.

        getSelectedRowsData("excludeRecursive") // returns data objects with the following keys: 2, 6, 10, and 4

- *"leavesOnly"*          
Returns only leaves' data objects.

        getSelectedRowsData("leavesOnly") // returns data objects with the following keys: 8, 9, 6, 10, and 4

[note][Calculated values](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue') cannot be obtained because this method gets data objects from the data source.

#####See Also#####
#include common-link-callmethods
- [getSelectedRowKeys(mode)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowKeys(mode).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowKeysmode')