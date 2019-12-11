---
default: undefined
acceptValues: 'year' | 'month' | 'day' | 'quarter' | 'hour' | 'minute' | 'second'
type: string | number
---
---
##### shortDescription
Specifies how header filter values should be combined into groups.

---
[note]When the column data type is "date", groups are organized in a hierarchy, and the **groupInterval** option indicates up to which level the hierarchy is formed. By default, this level is "day". This means that each group has the following structure: "year"->"months"->"days". 

To configure a data selector for numeric data, assign a number to this option. The number assigned is the maximum length of each group. The bigger the number, the less the quantity of the generated groups.

The data selector for dates is configured by assigning a *string* to this option.