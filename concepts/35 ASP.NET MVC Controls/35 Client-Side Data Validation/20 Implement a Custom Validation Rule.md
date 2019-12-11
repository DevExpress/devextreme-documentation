If the built-in validation rules do not meet your requirements, implement a custom one. These are the steps for you to follow.

1. In **ASP.NET MVC 5**, create a class that inherits from the [`ValidationAttribute`](https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute(v=vs.110).aspx) and [`IClientValidatable`](https://msdn.microsoft.com/en-us/library/system.web.mvc.iclientvalidatable(v=vs.118).aspx). In this class, override the [`IsValid`](https://msdn.microsoft.com/en-us/library/dd730022(v=vs.110).aspx) method and implement the [`GetClientValidationRules`](https://msdn.microsoft.com/en-us/library/gg416550(v=vs.118).aspx) method. Note that the latter method returns an object of the [`ModelClientValidationRule`](https://msdn.microsoft.com/en-us/library/system.web.mvc.modelclientvalidationrule(v=vs.118).aspx) type. The [`ValidationType`](https://msdn.microsoft.com/en-us/library/system.web.mvc.modelclientvalidationrule.validationtype(v=vs.100).aspx) property of this object should be set to *"custom"*, and the [`ValidationParameters`](https://msdn.microsoft.com/en-us/library/system.web.mvc.modelclientvalidationrule.validationparameters(v=vs.100).aspx) collection should be given a new entry called *"validationcallback"*, which binds a JavaScript function to the validation rule. This function will be declared in step 3.
        
        <!--C#-->
        using System.Collections.Generic;
        using System.ComponentModel.DataAnnotations;
        using System.Web.Mvc;
        namespace ApplicationName.Models
        {
            public class VerifyAgeAttribute : ValidationAttribute, IClientValidatable
            {
                public VerifyAgeAttribute()
                    : base("The value of the {0} field is not valid") {
                }
                protected override ValidationResult IsValid(object value, ValidationContext validationContext)
                {
                    DateTime? dateToCheck = (DateTime?)value;
                    if(dateToCheck <= DateTime.Now.AddYears(-21)) {
                        return ValidationResult.Success;
                    }
                    return new ValidationResult(this.FormatErrorMessage(validationContext.DisplayName));
                }
                public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata,
                    ControllerContext context)
                {
                    var rule = new ModelClientValidationRule();
                    rule.ErrorMessage = FormatErrorMessage(metadata.GetDisplayName());
                    // Binds the "verifyAge" JavaScript function to the validation rule
                    rule.ValidationParameters.Add("validationcallback", "verifyAge");
                    // "ValidationType" should always be "custom"
                    rule.ValidationType = "custom";
                    yield return rule;
                }
            }
        }

        <!--VB-->
        Imports System.Collections.Generic
        Imports System.ComponentModel.DataAnnotations
        Imports System.Web.Mvc

        Namespace Models
            Public Class VerifyAgeAttribute
                Inherits ValidationAttribute
                Implements IClientValidatable
                Public Sub New()
                    MyBase.New("The value of the {0} field is not valid")
                End Sub
                Protected Overrides Function IsValid(value As Object, validationContext As ValidationContext) As ValidationResult
                    Dim DateToCheck As Date? = CType(value, Date?)
                    If DateToCheck <= Now.AddYears(-21) Then
                        Return ValidationResult.Success
                    End If
                    Return New ValidationResult(FormatErrorMessage(validationContext.DisplayName))
                End Function
                Public Iterator Function IClientValidatable_GetClientValidationRules(metadata As ModelMetadata, context As ControllerContext)
                                As IEnumerable(Of ModelClientValidationRule) Implements IClientValidatable.GetClientValidationRules
                    Dim Rule = New ModelClientValidationRule()
                    Rule.ErrorMessage = FormatErrorMessage(metadata.GetDisplayName())
                    ' Binds the "verifyAge" JavaScript function to the validation rule
                    Rule.ValidationParameters.Add("validationcallback", "verifyAge")
                    ' "ValidationType" should always be "custom"
                    Rule.ValidationType = "custom"
                    Yield Rule
                End Function
            End Class
        End Namespace

    In **ASP.NET Core MVC**, create a class that inherits from the [`ValidationAttribute`](https://docs.microsoft.com/en-us/dotnet/core/api/system.componentmodel.dataannotations.validationattribute) and [`IClientModelValidator`](https://docs.microsoft.com/en-us/aspnet/core/api/microsoft.aspnetcore.mvc.modelbinding.validation.iclientmodelvalidator). In this class, implement the following methods. 

    - `AddValidation`   
    Adds the custom validation attribute to the collection of validation attributes.

    - `MergeAttribute`      
    Checks that the key of the custom validation attribute is unique within the collection of validation attributes. Note that the key must begin with the *"data-val-custom-"* prefix. The key that ends with *"validationcallback"* must point to a JavaScript function implementing the validation logic. This function will be declared in step 3.

    - `IsValid`     
    Validates data on the server to insure it against invalid values when JavaScript is switched off on the client.

    <!--->

        <!--C#-->
        using System.Collections.Generic;
        using System.ComponentModel.DataAnnotations;
        using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
        namespace ApplicationName.Models
        {
            public class VerifyAgeAttribute : ValidationAttribute, IClientModelValidator
            {
                public VerifyAgeAttribute()
                    : base("The value of the {0} field is not valid") {
                }
                public void AddValidation(ClientModelValidationContext context) {
                    MergeAttribute(context.Attributes, "data-val-custom-verifyage",
                            FormatErrorMessage(context.ModelMetadata.GetDisplayName()));
                    MergeAttribute(context.Attributes, "data-val-custom-verifyage-validationcallback", "verifyAge");
                }
                bool MergeAttribute(IDictionary<string, string> attributes, string key, string value) {
                    if(attributes.ContainsKey(key)) {
                        return false;
                    }
                    attributes.Add(key, value);
                    return true;
                }
                protected override ValidationResult IsValid(object value, ValidationContext validationContext) {
                    DateTime? date = (DateTime?)value;
                    if(date <= DateTime.Now.AddYears(-21)) {
                        return ValidationResult.Success;
                    }
                    return new ValidationResult(this.FormatErrorMessage(validationContext.DisplayName));
                }
            }
        }

2. Attach the custom attribute to a model property.

        <!--C#-->
        using System.ComponentModel.DataAnnotations;
        namespace ApplicationName.Models {
            public class Person {
                // ...
                [VerifyAge(ErrorMessage = "Persons under 21 are not allowed")]
                public DateTime? BirthDate { get; set; }
            }
        }

        <!--VB-->
        Imports System.ComponentModel.DataAnnotations
        Namespace Models
            Public Class Person
                ' ...
                <VerifyAge(ErrorMessage:="Persons under 21 are not allowed")>
                Public Property BirthDate() As Date?
            End Class
        End Namespace

3. In the view, declare a JavaScript function that implements all validation logic.

        <script>
            function verifyAge(options) {
                return options.value && new Date(Date.now()).getFullYear() - options.value.getFullYear() >= 21;
            }
        </script>

To use the custom validation rule, create a DevExtreme editor for the model property from step 2 in the same view where the JavaScript function is declared. The following code shows how to create the DevExtreme [NumberBox](/api-reference/10%20UI%20Widgets/dxNumberBox '/Documentation/ApiReference/UI_Widgets/dxNumberBox/').

    <!--Razor C#-->
    @model ApplicationName.Models.Person

    @(Html.DevExtreme().DateBoxFor(model => model.BirthDate))

    <!--Razor VB-->
    @ModelType ApplicationName.Models.Person

    @(Html.DevExtreme().DateBoxFor(Function(model) model.BirthDate))

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Mvc/Light/"
}

#####See Also#####
- [Client-Side Validation - Overview](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/01%20Overview.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/')

[tags]asp.net mvc controls, client-side data validation, data annotations, custom validation rule, custom validation attribute