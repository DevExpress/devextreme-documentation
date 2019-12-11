---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether groups appear expanded or not.

---
[note]Setting this option to *false* forces **DataGrid** to load data for all pages at once. It may be unnoticeable if you use a local data source, but in case of remote data sources, it is undesirable. To avoid the unnecessary loading of data, implement [remote grouping](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/').

#####See Also#####
- [DataGrid - Expanding and Collapsing Groups](/concepts/05%20Widgets/DataGrid/040%20Grouping/050%20Expanding%20and%20Collapsing%20Groups.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#Expanding_and_Collapsing_Groups')