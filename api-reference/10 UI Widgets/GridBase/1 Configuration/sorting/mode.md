---
id: GridBase.Options.sorting.mode
acceptValues: 'multiple' | 'none' | 'single'
type: String
default: 'single'
---
---
##### shortDescription
Specifies the sorting mode.

---
The following selection modes are available in the widget:

- **Single**        
Rows can be sorted by values of a single column only.

- **Multiple**      
Rows can be sorted by values of several columns.

#include common-ref-enum with {
    enum: "`GridSortingMode`",
    values: "`None`, `Single`, and `Multiple`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/MultipleSorting/"
}