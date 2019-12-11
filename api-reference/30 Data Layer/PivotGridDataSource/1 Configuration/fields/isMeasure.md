---
default: undefined
type: boolean
---
---
##### shortDescription
Specifies whether the field should be treated as a Data Field.

---
Use this option to specify what [areas](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') are available for the field to be placed into. 

You can deny end-users the option of putting the field into the *"row"*, *"column"* and *"filter"* areas by setting this option to *true*.

If this option is set to *false*, the field is treated as a dimension attribute and could not be placed into the *"data"* area.

By default, the field has no area restrictions.