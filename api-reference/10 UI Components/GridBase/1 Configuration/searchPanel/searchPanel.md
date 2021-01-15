---
id: GridBase.Options.searchPanel
type: Object
---
---
##### shortDescription
Configures the search panel.

---
The search panel allows searching for values in several columns at once. The UI component searches against only those columns whose [allowSearch](/api-reference/_hidden/GridBaseColumn/allowSearch.md '{basewidgetpath}/Configuration/columns/#allowSearch') property is set to **true**.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid SearchPanel](/images/DataGrid/visual_elements/search_panel.png)

To make the search panel visible, set the **searchPanel**.[visible](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/searchPanel/visible.md '{basewidgetpath}/Configuration/searchPanel/#visible') property to **true**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/Filtering/"
}

#####See Also#####
- [Search Panel](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/#Search_Panel')
- [searchByText(text)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/searchByText(text).md '{basewidgetpath}/Methods/#searchByTexttext')