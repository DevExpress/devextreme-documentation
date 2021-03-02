#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/"
}

The Diagram component updates the bound data source and reloads the diagram content each time a user changes diagram data by the UI. If you modify the data source directly (beyond the Diagram), use [push services](/Documentation/Guide/Data_Binding/Data_Layer/Data_Modification/Integration_with_Push_Services/) to notify the component about data modifications. In this case, Diagram gets notifications about data source changes and reloads diagram content.

Handle the [requestLayoutUpdate](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#onRequestLayoutUpdate) event to make the Diagram recalculate and update the diagram layout each time the data is reloaded.

If you use [push services](/Documentation/Guide/Data_Binding/Data_Layer/Data_Modification/Integration_with_Push_Services/) to modify a data source's data and specify item key values (IDs in a data source) manually, subscribe to the **onInserting** data source event to assign the values. Otherwise, the Diagram generates GUID key values for items that are added from the toolbox, pasted, cloned, or returned after removing.