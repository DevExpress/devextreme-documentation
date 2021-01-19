---
id: dxTreeList.Options.scrolling.mode
acceptValues: 'standard' | 'virtual'
type: String
default: 'virtual'
---
---
##### shortDescription
Specifies the scrolling mode.

---
The following scrolling modes are available in the UI component:

- **Standard**      
Rows are rendered at once or by pages if [paging](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/paging '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/paging/') is enabled. Scrolling appears only if all the rows cannot fit into the UI component's height.

- **Virtual**       
This mode is an alternative to paging where pages are rendered when they get into the viewport and removed once they leave it. Use this mode if a user should be able to scroll data by pages.

Regardless of the scrolling mode, you can use the **paging**.[pageSize](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/paging/#pageSize') property to specify the number of rows on a page.

#include common-ref-enum with {
    enum: "`TreeListScrollingMode`",
    values: "`Standard` and `Virtual`"
}
