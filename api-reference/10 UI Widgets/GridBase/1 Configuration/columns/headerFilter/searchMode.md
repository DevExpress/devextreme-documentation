---
default: 'contains'
acceptValues: 'contains' | 'startswith' | 'equals'
type: String
---
---
##### shortDescription
Specifies a comparison operation used to search header filter values.

---
#include common-ref-enum with {
    enum: "`CollectionSearchMode`",
    values: "`Contains`, `StartsWith`, and `Equals`"
}