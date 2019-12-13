---
id: dxForm.Options.items
type: Array<dxFormSimpleItem, dxFormGroupItem, dxFormTabbedItem, dxFormEmptyItem, dxFormButtonItem>
default: undefined
---
---
##### shortDescription
Holds an array of form items.

---
#include common-demobutton-named with {
    name: "Simple Items",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}
#include common-demobutton-named with {
    name: "Grouped and Tabbed Items",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields/"
}
#include common-demobutton-named with {
    name: "Button Item",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

When using the widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, declare the items as follows:

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
            rootItems.AddButton() // Adds a button item
                .ButtonOptions(b => b.Text("Register")
                    .Type(ButtonType.Success)
                    .UseSubmitBehavior(true)
                );
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
            ' Adds a button item
            rootItems.AddButton() _
                .ButtonOptions(Sub(b)
                    b.Text("Register") _
                     .Type(ButtonType.Success) _
                     .UseSubmitBehavior(True)
                End Sub)
        End Sub)
    )