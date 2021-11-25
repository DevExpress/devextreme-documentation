When [dataSource]({basewidgetpath}/Configuration/#dataSource) contains objects, you should define **valueExpr** to correctly identify data items. Otherwise, the component uses referential equality to compare objects that may result in unexpected behavior.

If you use a store, the **valueExpr** property should have the same value as the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') in the store.

#include uiwidgets-ref-valueExpr-functionnote