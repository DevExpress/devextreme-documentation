---
id: dxTreeList.loadDescendants(keys)
---
---
##### shortDescription
Loads a specific node's descendants. Takes effect only if data has the [plain structure](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/010%20Use%20Plain%20Data.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Plain_Data/') and  **remoteOperations** | [filtering](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations/filtering.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/#filtering') is **true**.

##### return: Promise<void>
A Promise that is resolved after data is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(keys): Array<any>
Node keys.

---
