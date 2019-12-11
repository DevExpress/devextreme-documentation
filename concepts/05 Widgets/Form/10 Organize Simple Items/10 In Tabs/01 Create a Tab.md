The **Form** widget allows you to organize items in tabs. In the context of the **Form**, tabs are called ["tabbed items"](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/'). A tabbed item can contain [simple items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/'), other tabs, [groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/') or [empty items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/'). To create a tabbed item, assign *"tabbed"* to the [itemType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/itemType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#itemType') option. To specify the collection of tabs, use the [tabs](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/') array. To define items displayed within an individual tab, use its [items](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#items') array. 

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                hireDate: new Date(2012, 04, 13),
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["name", {
                itemType: "tabbed",
                tabs: [{
                    title: "Info",
                    items: ["position", "hireDate", "city"]
                }, {
                    title: "Contacts",
                    items: ["phone", "email"]
                }]
            }]
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>