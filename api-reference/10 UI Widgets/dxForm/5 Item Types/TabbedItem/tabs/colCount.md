---
id: dxFormTabbedItem.tabs.colCount
type: Number
default: 1
---
---
##### shortDescription
The count of columns in the tab layout.

---
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. Specify the [colCountByScreen](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs/colCountByScreen '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/colCountByScreen/') option to override this logic.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "tabbed",
                tabs: [{
                    // ...
                    colCountByScreen: {
                        xs: 2
                    }
                },
                // ...
                ],
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxi-item
            itemType="tabbed">
            <dxi-tab ... >
                <dxo-col-count-by-screen [xs]="2"></dxo-col-count-by-screen>
            </dxi-tab>
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

- [Columns within a Tab](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs/05%20Columns%20within%20a%20Tab.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/#Columns_within_a_Tab')