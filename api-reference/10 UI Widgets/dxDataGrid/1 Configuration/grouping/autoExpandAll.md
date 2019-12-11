---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether groups appear expanded or not.

---
[note]Setting this option to **false** forces **DataGrid** to load data for all pages at once. It may be unnoticeable if you use a local data source, but in case of remote data sources, it is undesirable. To avoid the unnecessary loading of data, implement [remote grouping](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/').

#####See Also#####
- [Expand and Collapse Groups - User Interaction](/concepts/05%20Widgets/DataGrid/45%20Grouping/10%20User%20Interaction/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Expand_and_Collapse_Groups')
- [Expand and Collapse Groups - API](/concepts/05%20Widgets/DataGrid/45%20Grouping/20%20API/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Expand_and_Collapse_Groups')