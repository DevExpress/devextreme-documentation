To change the [Form configuration](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/') at runtime, call the [option(optionName, optionValue)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#optionoptionName_optionValue') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    $(function() {
        var form = $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            }
        }).dxForm("instance");

        $("#checkBoxContainer").dxCheckBox({
            text: 'Disable the Form',
            value: false,
            onValueChanged: function (e) {
                form.option("disabled", e.value);
            }
        });
    });

With Angular, bind the option to change to a component or element property.

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [disabled]="disableForm.value">
    </dx-form>
    <dx-check-box #disableForm
        text="Disable the Form"
        [value]="false">
    </dx-check-box>

    <!--TypeScript-->
    import { DxFormModule, DxCheckBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            phone: "+1(213) 555-9392",
            email: "jheart@dx-email.com"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxCheckBoxModule
        ],
        // ...
    })

#####See Also#####
- [Get and Set Options - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/')
- **Change Options**: [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Change_Options/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')

[tags]form, widget options, change option