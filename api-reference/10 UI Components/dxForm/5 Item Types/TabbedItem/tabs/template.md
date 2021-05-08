---
id: dxFormTabbedItem.tabs.template
type: template
default: undefined
---
---
##### shortDescription
The template to be used for rendering the tab content.

##### param(tabData): Object
A data object associated with the tab.

##### param(tabIndex): Number
The index of the tab in the [tabs](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabs '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/tabs/') array.

##### param(tabElement): DxElement
#include common-ref-elementparam with { element: "tab content" }

##### return: any
<!-- Description goes here -->

---
[note]A binding context of an item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object's fields directly. To access another binding context within an item template, use <a href="http://knockoutjs.com/documentation/binding-context.html" target="_blank">Knockout</a>/<a href="https://docs.angularjs.org/guide/scope" target="_blank">AngularJS</a> binding variables.

#####See Also#####
- [Custom Content within a Tab](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs/10%20Custom%20Content%20within%20a%20Tab.md '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Tabs/#Custom_Content_within_a_Tab')
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')