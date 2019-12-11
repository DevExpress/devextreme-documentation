The **Form** widget can have a fixed number of columns in the layout...

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO"
            },
            colCount: 3
        });
    });

... or it can vary the number of columns depending on the width of the container. To enable the latter mode, assign *"auto"* to the [colCount](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCount') option and specify the minimum column width using the [minColWidth](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/minColWidth.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#minColWidth') option. In this case, the maximum number of columns the layout can fit equals to `floor(container_width / minColWidth)`. Note that [groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/') and [tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/') can also have their own multi-column layouts inside.

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                hireDate: new Date(2012, 04, 13),
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            colCount: "auto",
            minColWidth: 500,
            items: ["firstName", "lastName", {
                itemType: "tabbed",
                tabs: [{
                    title: "Info",
                    colCount: 3,
                    items: ["position", "hireDate", "city" ]
                }, {
                    title: "Contacts",
                    colCount: 2,
                    items: ["phone", "email"]
                }]
            }]
        });
    });