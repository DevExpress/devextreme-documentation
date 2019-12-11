---
default: ['PDF', 'PNG', 'SVG']
acceptValues: 'GIF' | 'JPEG' | 'PDF' | 'PNG' | 'SVG'
type: Array<String>
---
---
##### shortDescription
Specifies a set of formats available for exporting into.

---
By default, you can export your widget into three formats: PNG, PDF and SVG. If you need to alter this set, assign an array of the required formats to the **exportFormat** option.