---
default: 1
acceptValues: 'auto'
type: Number | String
---
---
##### shortDescription
The count of columns in the form layout.

---
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. To override this logic, specify the [colCountByScreen](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCountByScreen '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/colCountByScreen/') option.

    <!--JavaScript-->
    $(function(){
        $("#formContainer").dxForm({
            // ...
            colCountByScreen: {
                xs: 2
            }
        });
    });

[/note]

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `Mode` enum that accepts the value `Auto`.