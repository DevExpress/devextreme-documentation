---
id: dxTabPanelItem.title
type: String
---
---
##### shortDescription
Specifies the item title text displayed on a corresponding tab.

---
If tab titles are too long to be dispayed in full, you can handle them in one of multiple ways with CSS. To learn how to display long tab titles, refer to the following example:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-tabpanel-display-a-long-title"
}

---
##### Angular


[note]

In Angular, the **title**'s value can also be passed to the browser tooltip. This happens because this property has the same name as the [HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) that specifies the tooltip's text.    
To avoid this behavior, wrap the property in square brackets and wrap the property value in single quotes:

    <!--HTML-->
    <dxi-tab-panel-item [title]="'Customers'">


[/note]


---