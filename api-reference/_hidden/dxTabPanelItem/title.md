---
id: dxTabPanelItem.title
type: String
---
---
##### shortDescription
Specifies the item title text displayed on a corresponding tab.

---
[note]

In Angular, the **title**'s value can also be passed to browser tooltip. This happens because this option has the same name as the [HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) that specifies the tooltip's text.    
To avoid this behavior, wrap the property in square brackets and wrap the property value in single quotes:

    <!--HTML-->
    <dxi-item [title]="'Customers'"> 

[/note]
