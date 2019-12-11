---
default: 'enlargeTickInterval'
acceptValues: 'ignore' | 'enlargeTickInterval'
type: string
---
---
##### shortDescription
Specifies the overlap resolving algorithm to be applied to axis labels.

---
When labels overlap each other, you can specify how these labels will be displayed by setting the **overlappingBehavior** option.

The following values are possible.

* **ignore**   
Leave the labels overlapped.
* **enlargeTickInterval**   
Leave the labels as they are, but enlarge the axis tick intervals so that the labels do not overlap.