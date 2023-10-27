---
id: dxTabs.Options.iconPosition
type: Enums.TabsIconPosition
default: 'start', 'top' (Fluent, Material)
---
---
##### shortDescription
Specifies icon position relative to the text inside the tab.

---
The following values are available:

- *'start'*    
The icon appears before the text.

- *'end'*    
The icon appears after the text.

- *'top'*    
The icon appears above the text.

- *'bottom'*    
The icon appears below the text.

The alignment of content in a tab item directly depends on the **iconPosition** value. If a tab item has an icon and `iconPosition: 'top'` or `iconPosition: 'bottom'`, the content alignment is centered. If you set `iconPosition: 'start'` or `iconPosition: 'end'`, the content is aligned to the edge of the tab. 

The same applies if items do not include icons: content is aligned equally in all tab items.