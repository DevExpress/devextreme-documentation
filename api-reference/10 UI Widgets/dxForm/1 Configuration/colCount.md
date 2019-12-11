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

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            colCountByScreen: {
                xs: 2
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxo-col-count-by-screen [xs]="2"></dxo-col-count-by-screen>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

[/note]

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), you can specify this option using the `Mode` enum that accepts the value `Auto`.

#####See Also#####
- [Organize Simple Items In Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns/05%20Fixed%20and%20Floating%20Number%20of%20Columns.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/#Fixed_and_Floating_Number_of_Columns')