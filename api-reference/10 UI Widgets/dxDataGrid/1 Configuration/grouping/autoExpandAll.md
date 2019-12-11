---
default: true
type: boolean
---
---
##### shortDescription
Specifies whether groups appear expanded or not.

---
[note]Setting this option to *false* forces **DataGrid** to load data for all pages at once. It may be unnoticeable if you use a local data source, but in case of remote data sources, it is undesirable. To avoid the unnecessary loading of data, implement [remote grouping](/concepts/10%20UI%20Widgets/70%20Data%20Grid/012%20Use%20Custom%20Store/10%20Remote%20Operations/30%20Advanced%20Remote%20Operations/10%20Remote%20Grouping.md '/Documentation/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/#Remote_Operations/Advanced_Remote_Operations/Remote_Grouping').

#####See Also#####
- [DataGrid - Expanding and Collapsing Groups](/concepts/10%20UI%20Widgets/70%20Data%20Grid/040%20Grouping/050%20Expanding%20and%20Collapsing%20Groups.md '/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/#Expanding_and_Collapsing_Groups')