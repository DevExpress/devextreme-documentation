---
id: dxDiagram.Options.nodes.customDataExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a node's custom data.

##### param(data): any
The current node's data object.

##### return: any
A node's custom data.

##### param(value): any
When the function is called as a setter, returns the node's new custom data; when the function is called as a getter, returns `undefined`.

---
This property links custom data from a data source to a diagram node. The node contains the linked data copied from the data source. Changes in the data are reflected in the diagram history. You can use the UI to undo and redo these changes.

    <!--JavaScript-->
    // ...
    customDataExpr(obj, value) {
        if (value === undefined) {
            return {
            Full_Name: obj.Full_Name,
            Prefix: obj.Prefix,
            Title: obj.Title,
            City: obj.City,
            State: obj.State,
            Email: obj.Email,
            Skype: obj.Skype,
            Mobile_Phone: obj.Mobile_Phone,
            };
        }
        obj.Full_Name = value.Full_Name;
        obj.Prefix = value.Prefix;
        obj.Title = value.Title;
        obj.City = value.City;
        obj.State = value.State;
        obj.Email = value.Email;
        obj.Skype = value.Skype;
        obj.Mobile_Phone = value.Mobile_Phone;
        return null;
    },
    // ...

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/jQuery/Light/"
}
