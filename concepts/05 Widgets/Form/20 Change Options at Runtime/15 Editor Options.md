To change the options of an editor, get its instance first using the [getEditor(dataField)](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/getEditor(dataField).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#getEditordataField') method. After that, call the **option(optionName, optionValue)** or **option(optionName, options)** method of this instance. This approach is more typical of jQuery. 

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
            text: 'Disable the First Name Editor',
            value: false,
            onValueChanged: function (e) {
                form.getEditor("firstName")
                    .option("disabled", e.value);
            }
        });
    });

[note]The **getEditor(dataField)** method is available for visible form items only.

With Angular, bind the option to change in the [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions') object to a component or element property.
    
    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="firstName" [editorOptions]="{ disabled: disableFirstName.value }"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="phone"></dxi-item>
        <dxi-item dataField="email"></dxi-item>
    </dx-form>
    <dx-check-box #disableFirstName
        text="Disable the First Name Editor"
        [value]="false">
    </dx-check-box>

    <!--TypeScript-->
    import { DxFormModule, DxCheckBoxModule } from "devextreme-angular";
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
#include common-link-callmethods
- [Form - Change Item Options at Runtime](/concepts/05%20Widgets/Form/20%20Change%20Options%20at%20Runtime/10%20Item%20Options.md '/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Item_Options/')
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')

[tags]form, get editor, change editor options