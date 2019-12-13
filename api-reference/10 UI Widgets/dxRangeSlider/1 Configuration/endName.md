---
id: dxRangeSlider.Options.endName
type: String
default: ''
---
---
##### shortDescription
The value to be assigned to the <a href="http://www.w3schools.com/tags/att_input_name.asp" target="_blank">name</a> attribute of the underlying `<input>` element.

---
Specify this and [startName](/api-reference/10%20UI%20Widgets/dxRangeSlider/1%20Configuration/startName.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#startName') options if the widget lies within an HTML form that will be submitted.

If you configure the widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, use this option to bind the widget to a model property. If this model property contains <a href="https://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-6" target="_blank">Data Annotation validation attributes</a>, you get the <a href="https://docs.devexpress.com/AspNetCore/400576/devextreme-based-controls/concepts/data-validation" target="_blank">client-side validation</a> enabled by default.

    <!--Razor C#-->@(Html.DevExtreme().RangeSlider()
        .StartName("StartModelProperty")
        .EndName("EndModelProperty")
    )

    <!--Razor VB-->@(Html.DevExtreme().RangeSlider() _
        .StartName("StartModelProperty") _
        .EndName("EndModelProperty")
    )