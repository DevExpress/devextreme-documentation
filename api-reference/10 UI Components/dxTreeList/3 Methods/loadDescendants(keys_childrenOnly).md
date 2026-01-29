---
id: dxTreeList.loadDescendants(keys, childrenOnly)
---
---
##### shortDescription
Loads specified node descendants. Affects all descendants when **childrenOnly** is set to `false` (default) and only direct descendants when **childrenOnly** is set to `true`. Takes effect only if data has [plain structure](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataStructure') and  **remoteOperations**.[filtering](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/remoteOperations/filtering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/#filtering') is set to **true**. Does not load/reload cached data.

##### return: Promise<void>
A Promise that is resolved after data is loaded.

##### param(keys): Array<any>
Node keys.

##### param(childrenOnly): Boolean
Pass **true** to load only children; **false** to load all specified node descendants.          
**false** by default.

---
