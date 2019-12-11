---
default: undefined
type: Array<dxFormSimpleItem, dxFormGroupItem, dxFormTabbedItem, dxFormEmptyItem>
---
---
##### shortDescription
Holds an array of form items.

---
The array passed to this option can hold items of the following types.

- [Simple](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/')  
 A standard item consisting of a label and an editor widget used to specify a value of the associated data field. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/jQuery/Light).

- [Group](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/')  
 An item representing a container of another form items. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields/jQuery/Light).

- [Tabbed](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/')  
 An item representing a tabbed container of another form items. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields/jQuery/Light).

- [Empty](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/')  
 An empty item used to add a space between neighboring items.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), declare the items in the following manner.

    <!--Razor C#-->@(Html.DevExtreme().Form()
        .FormData(Model.Data)
        .Items(rootItems => {
            rootItems.AddSimple().DataField("EmployeeID"); // Adds a simple item
            rootItems.AddEmpty(); // Adds an empty item
            rootItems.AddGroup().Caption("General Info") // Adds a group item
                .Items(groupItems => {
                    groupItems.AddSimple().DataField("FirstName");
                    // ...
                });
            rootItems.AddTabbed() // Adds a tabbed item
                .Tabs(tabs => {
                    tabs.Add().Title("Address")
                        .Items(addressItems => {
                            addressItems.AddSimple().DataField("Country");
                            // ...
                        });
                    tabs.Add().Title("Phone")
                        // ...
                });
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Form() _
        .FormData(Model.Data) _
        .Items(Sub(rootItems)
            rootItems.AddSimple().DataField("EmployeeID") ' Adds a simple item
            rootItems.AddEmpty() ' Adds an empty item
            ' Adds a group item
            rootItems.AddGroup().Caption("General Info") _
                .Items(Sub(groupItems)
                    groupItems.AddSimple().DataField("FirstName")
                    ' ...
                End Sub)
            ' Adds a tabbed item
            rootItems.AddTabbed() _
                .Tabs(Sub(tabs)
                    tabs.Add().Title("Address") _
                        .Items(Sub(addressItems)
                            addressItems.AddSimple().DataField("Country")
                            ' ...
                        End Sub)
                    tabs.Add().Title("Phone")
                        ' ...
                End Sub)
        End Sub)
    )