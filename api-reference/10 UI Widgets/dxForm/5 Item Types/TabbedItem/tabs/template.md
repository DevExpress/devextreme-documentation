---
default: undefined
type: template
---
---
##### shortDescription
The template to be used for rendering the tab content.

##### param(tabData): object
A data object associated with the tab.

##### param(tabIndex): number
The index of the tab in the [tabs](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/') array.

##### param(tabElement): object
The HTML element of the tab's content.

---
[note]A binding context of an item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object's fields directly. To access another binding context within an item template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Custom Content within a Tab](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs/10%20Custom%20Content%20within%20a%20Tab.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/#Custom_Content_within_a_Tab')
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')