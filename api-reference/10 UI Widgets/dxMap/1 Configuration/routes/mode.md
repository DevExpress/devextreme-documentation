---
default: 'driving'
acceptValues: 'driving' | 'walking'
type: String
---
---
##### shortDescription
Specifies a transportation mode to be used in the displayed route.

---
#include common-ref-enum with {
    enum: "`GeoMapRouteMode`",
    values: "`Driving` and `Walking`"
}