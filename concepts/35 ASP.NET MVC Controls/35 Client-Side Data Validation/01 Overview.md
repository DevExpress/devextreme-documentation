Client-side data validation allows you to validate input values _before_ sending them to the server and without reloading the page. DevExtreme ASP.NET MVC Controls validate input values using model properties' [Data Annotation validation attributes](https://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-6). The following validation attributes are supported:

- `[Required]`
- `[StringLength]`
- `[Range]`
- `[RegularExpression]`
- `[Compare]`
- `[Display]` *
- `[DisplayName]` *
- `[Custom]`

<div style="font-size:12px;margin-bottom:10px;">
    * - Supported only for controls configured using <a href="/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Specifying_the_Options/Strongly-Typed_Helpers">strongly-typed helpers</a>.
</div>

[note] We also provide the `[DevExtremeRequired]` attribute that adopts the HTML5 validation behavior: it considers **false** an invalid Boolean value, whereas the standard `[Required]` accepts both **true** and **false**. You can find more details in [this blog post](https://community.devexpress.com/blogs/aspnet/archive/2017/09/18/devextreme-mvc-client-side-validation-required-attribute-changes-17-1-6.aspx).

Model properties that have one or several of these attributes can be validated. For example, a `Person` model contains a `FirstName` property that has three validation attributes:

    <!--C#-->
    using System.ComponentModel.DataAnnotations;

    namespace ApplicationName.Models {
        public class Person {
            [Required(ErrorMessage = "First name is required")]
            [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Do not use digits in the first name")]
            [StringLength(int.MaxValue, MinimumLength = 2, ErrorMessage = "First name must have at least 2 symbols")]
            public string FirstName { get; set; }
        }
    }

    <!--VB-->
    Imports System.ComponentModel.DataAnnotations

    Namespace ApplicationName.Models
        Public Class Person
            <Required(ErrorMessage:="First name is required")>
            <RegularExpression("^[a-zA-Z\s]+$", ErrorMessage:="Do not use digits in the first name")>
            <StringLength(Integer.MaxValue, MinimumLength:=2, ErrorMessage:="First name must have at least 2 symbols")>
            Public Property FirstName() As String
        End Class
    End Namespace

To apply these validation attributes to a DevExtreme editor, create this editor using a `EditorFor` method. Substitute "Editor" in `EditorFor` with the editor's name. For example, to create the DevExtreme [TextBox](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/') editor, call the `TextBoxFor` method:

    <!--Razor C#-->
    @model ApplicationName.Models.Person

    @(Html.DevExtreme().TextBoxFor(model => model.FirstName))

    <!--Razor VB-->
    @ModelType ApplicationName.Models.Person

    @(Html.DevExtreme().TextBoxFor(Function(model) model.FirstName))

As an alternative, you can use a more explicit syntax for binding an editor to a model property and applying validation attributes. Pass the property's name to the `Name` method and an initial value to the `Value` method. The previous and following code samples produce the same result: 

    <!--Razor C#-->
    @model ApplicationName.Models.Person

    @(Html.DevExtreme().TextBox()
        .Name("FirstName")
        .Value(Model.FirstName)
    )

    <!--Razor VB-->
    @ModelType ApplicationName.Models.Person

    @(Html.DevExtreme().TextBox() _
        .Name("FirstName") _
        .Value(Model.FirstName)
    )

[note] Use the `StartName` and `EndName` methods instead of the `Name` method for the [RangeSlider](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider') control.

The input value is validated each time the [change](https://developer.mozilla.org/en-US/docs/Web/Events/change) event is raised by default. To change the DOM event that triggers validation, set the [valueChangeEvent](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/valueChangeEvent.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#valueChangeEvent') option.

    <!--Razor C#-->
    @(Html.DevExtreme().TextBoxFor(model => model.FirstName)
        .ValueChangeEvent("keyup")
    )

    <!--Razor VB-->
    @(Html.DevExtreme().TextBoxFor(Function(model) model.FirstName) _
        .ValueChangeEvent("keyup")
    )

[note]

If the `[Range]` attribute should limit a date or time range, use the `RangeAttribute` [overload that accepts a type](https://msdn.microsoft.com/en-us/library/cc679255(v=vs.110).aspx) as the first argument. The date/time values must be set as strings. See an example in the following code:

    <!--C#-->
    namespace ApplicationName.Models {
        public class Person {
            // ...
            [Range(typeof(DateTime), "1/1/1901", "1/1/2016")]
            public DateTime BirthDate { get; set; }
        }
    }    

    <!--VB-->
    Imports System.ComponentModel.DataAnnotations

    Namespace Models
        Public Class Person
            ' ...
            <Range(GetType(DateTime), "1/1/1901", "1/1/2016")>
            Public Property BirthDate() As DateTime
        End Class
    End Namespace

[/note]

#####See Also#####
- [ASP.NET MVC Controls - Fundamentals](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/')
- [Client-Side Validation - Validate a Group of Editors](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/05%20Validate%20a%20Group%20of%20Editors.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Validate_a_Group_of_Editors')
- [Client-Side Validation - Implement a Custom Validation Rule](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/20%20Implement%20a%20Custom%20Validation%20Rule.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Implement_a_Custom_Validation_Rule')
- [Client-Side Validation - Validate and Submit an HTML Form](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/25%20Validate%20and%20Submit%20an%20HTML%20Form.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Validate_and_Submit_an_HTML_Form/')
- [Client-Side Validation - Validate and Submit the Form Control](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/28%20Validate%20and%20Submit%20the%20Form%20Control.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Validate_and_Submit_the_Form_Control/')

[tags]asp.net mvc controls, client-side data validation, data annotations, validation attributes
