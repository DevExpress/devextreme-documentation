[note]In MVC projects, you can configure the same features using [server-side wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'). See [this topic](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/25%20Validate%20and%20Submit%20an%20HTML%20Form.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_and_Submit_an_HTML_Form/') for details.

Commonly, editors nested into an HTML form are supposed to be validated on the client and then submitted to the server. The **Button** widget supports this scenario out of the box. Place the **Button** on the HTML form and set the [useSubmitBehavior](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/useSubmitBehavior.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#useSubmitBehavior') option to *true*.

    <!--HTML--><form action="/Login" method="post">
        <div id="login"></div>
        <div id="password"></div>
        <div id="validateAndSubmit"></div>
    </form>

<!---->

    <!--JavaScript-->$(function() {
		$("#login").dxTextBox({
    		name: "Login"
        }).dxValidator({
    		validationRules: [
        		{ type: "required" }
            ]
        });
    
        $("#password").dxTextBox({
    		name: "Password",
    		mode: "password"
        }).dxValidator({
    		validationRules: [
        		{ type: "required" }
            ]
        });
    
        $("#validateAndSubmit").dxButton({
            text: "Submit",
            type: "success",
            useSubmitBehavior: true
        });
    });

Note that the [name](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#name') option of the **TextBox** widgets in the previous code specifies the [name](https://www.w3schools.com/tags/att_input_name.asp) attribute of the underlying `<input>` element.

DevExtreme editors may belong to different [validation groups](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/'). To specify which group the **Button** must validate, use the [validationGroup](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup') option. If you do not set this option, the **Button** validates all editors whose validation group is not specified.

[note]Although the **Button** may validate different validation groups, it always submits a definite HTML form - the one in which it is nested. To avoid mixing up validated and submitted values, we recommend that a single HTML form contain only a single validation group.

#####See Also#####
- [ASP.NET MVC Wrappers - Validate and Submit an HTML Form](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/25%20Validate%20and%20Submit%20an%20HTML%20Form.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_and_Submit_an_HTML_Form/')
- [Form - Validate and Submit](/concepts/05%20Widgets/Form/40%20Validate%20and%20Submit%20the%20Form.md '/Documentation/Guide/Widgets/Form/Validate_and_Submit_the_Form/')
- [Button Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-button-icons)
- [Button API Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/dxAccordion/')

[tags]button, validate a form, submit a form, submit editors