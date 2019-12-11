---
default: undefined
type: Number
---
---
##### shortDescription
Specifies the order in which grid columns conceal when the widget adapts to the screen or container size.

---
While adapting, the widget hides columns according to their hiding priority. A zero-based index assigned to the **hidingPriority** option designates this priority. The lower the index is, the higher the probability that the widget hides this column. 

[note]Specifying **hidingPriority** for at least one column enables the column hiding feature and cancels the default hiding priorities, that is, columns without priority set explicitly are not hidden.

#####See Also#####
- [columnHidingEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled') 
- [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping')

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/GridColumnsHidingPriority/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=JHUSz3S0cWw&index=2&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>