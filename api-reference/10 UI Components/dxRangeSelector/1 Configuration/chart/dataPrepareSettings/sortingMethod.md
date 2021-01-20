---
id: dxRangeSelector.Options.chart.dataPrepareSettings.sortingMethod
type: Boolean | function(a, b)
default: true
---
---
##### shortDescription
Specifies how to sort series points.

##### param(a): Object
A series point to be compared.

##### field(a.arg): Date | Number | String
The series point's argument.

##### field(a.val): Date | Number | String
The series point's value.

##### param(b): Object
A series point to be compared.

##### field(b.arg): Date | Number | String
The series point's argument.

##### field(b.val): Date | Number | String
The series point's value.

##### return: Number
Specifies whether *a* goes before *b*.

---
This option specifies the sorting manner of series points. When this option is set to **true**, the series points are sorted in ascending order by arguments. When this option is set to **false**, the order of the series points does not differ from the order in the data source.

In addition, you can order the series points per your requirements by specifying a compare function. This function accepts two parameters that represent two series points and should return the value on which the order will be based. The argument and value of these series points can be accessed using the **arg** and **val** fields correspondingly.

Assume that *a* and *b* are the parameters. If the function returns a value of less than 0, *a* comes before *b* in the resulting order. If the function returns a value greater than 0, *b* comes before *a* in the resulting order. If the function returns 0, *a* and *b* remain unchanged relative to each other.