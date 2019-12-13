---
id: dxFormGroupItem.colCount
type: Number
default: 1
---
---
##### shortDescription
The count of columns in the group layout.

---
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. Specify the [colCountByScreen](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/colCountByScreen '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/colCountByScreen/') option to override this logic.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "group",
                items: [ ... ],
                colCountByScreen: {
                    xs: 2
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxi-item
            itemType="group"
            [items]="[ ... ]">
            <dxo-col-count-by-screen [xs]="2"></dxo-col-count-by-screen>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
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

#####See Also#####
- [Columns within a Group](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups/05%20Columns%20within%20a%20Group.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/#Columns_within_a_Group')