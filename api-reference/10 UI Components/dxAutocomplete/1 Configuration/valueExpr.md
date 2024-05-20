When [dataSource]({basewidgetpath}/Configuration/#dataSource) contains objects, you should define **valueExpr** to correctly identify data items. Otherwise, the component uses referential equality to compare objects, which may result in unexpected behavior.

If you use a store, the **valueExpr** property should have the same value as the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') in the store. Alternatively, you can use `this` as a **valueExpr** but the **key** should be specified. Refer to the following article for more information: [Troubleshooting - A Drop-Down Editor Does Not Show Data](/Documentation/Guide/Troubleshooting/A_Drop-Down_Editor_Does_Not_Show_Data/).

Do not use `template` as a **valueExpr** value.

#include uiwidgets-ref-valueExpr-functionnote