---
id: VisualRange.length
type: Number | Object | Enums.TimeInterval | undefined
inherits: VizTimeInterval
default: undefined
---
---
##### shortDescription
The range's length.

---
If the axis/scale displays numbers, set this property to a number:

    length: 100 // a hundred axis/scale values

If the axis/scale displays date-time values, set it to an accepted string value or object that contains a field described further in this section:

    length: 'day' // one day
    length: { days: 2 } // two days
