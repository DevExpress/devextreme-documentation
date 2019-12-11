The **Form** widget allows you to place custom content, for example, an image, under the group caption.

    <!--JavaScript-->
    $("#formContainer").dxForm({
        formData: {
            firstName: "John",
            lastName: "Heart"
        },
        colCount: 2,
        items: [{
            itemType: "group",
            caption: "Picture",
            template: function (data, itemElement) {
                itemElement.append("<img src='http://here/goes/the/picture.jpg'>");
            }
        }, {
            itemType: "group",
            caption: "Personal Data",
            items: ["firstName", "lastName"]
        }]
    });

#####See Also#####
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form - Organize Simple Items in Tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/')
- [Form - Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/')
- [Form - Add an Empty Space Between Simple Items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/')
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')