---
id: PivotGridDataSourceField.dataType
acceptValues: 'date' | 'number' | 'string'
type: String
default: undefined
---
---
##### shortDescription
Casts field values to a specific data type.

---
If your data source stores, for example, numbers or dates as strings, specify the proper type using this option. Date-time values stored as strings should have one of the following formats: `"yyyy/MM/dd"`, `"yyyy/MM/dd HH:mm:ss"`, `"yyyy-MM-ddTHH:mm:ssx"`, or `"yyyy-MM-ddTHH:mm:ss"`.

#include common-ref-enum with {
    enum: "`PivotGridDataType`",
    values: "`String`, `Number`, and `Date`"
}