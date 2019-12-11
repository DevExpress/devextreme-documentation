For displaying tabs, the **Form** uses the [TabPanel](/concepts/05%20Widgets/TabPanel/00%20Overview.md '/Documentation/Guide/Widgets/TabPanel/Overview/') widget. Therefore, you can specify any [options of the TabPanel](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/') in the [tabPanelOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabPanelOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#tabPanelOptions') object.

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                // ...
            },
            items: ["firstName", "lastName", {
                itemType: "tabbed",
                tabPanelOptions: {
                    height: 250,
                    onTitleClick: function () {
                        // ...
                    }
                },
                tabs: [ ... ]
            }]
        });
    });

#####See Also#####
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form - Organize Simple Items in Groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/')
- [Form - Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/')
- [Form - Add an Empty Space Between Smple Items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/')
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')