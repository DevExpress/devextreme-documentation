---
default: ''
type: String
---
---
##### shortDescription
The value to be assigned to the [name](https://www.w3schools.com/tags/att_input_name.asp) attribute of the underlying `<input>` element.

---
Specify this and [endName](/api-reference/10%20UI%20Widgets/dxRangeSlider/1%20Configuration/endName.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#endName') options if the widget lies within an HTML form that will be submitted.

If you configure the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), use this option to bind the widget to a model property. If this model property contains [Data Annotation validation attributes](https://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-6), you get the [client-side validation](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/01%20Overview.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/') enabled by default.

    <!--Razor C#-->@(Html.DevExtreme().RangeSlider()
        .StartName("StartModelProperty")
        .EndName("EndModelProperty")
    )

    <!--Razor VB-->@(Html.DevExtreme().RangeSlider() _
        .StartName("StartModelProperty") _
        .EndName("EndModelProperty")
    )