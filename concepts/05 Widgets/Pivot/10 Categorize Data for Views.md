Because as a rule, the **Pivot** presents categorized lists, you need to form them in code. For example, assume that you have the following array named `contacts`.

    <!--JavaScript-->
    var contacts = [
        { name: "Barbara J. Coggins", phone: "512-964-2757", email: "barbarajsoggins@rhyta.com", category: "Family" },
        { name: "Carol M. Das", phone: "360-684-1334", email: "carolmdas@jourrapide.com", category: "Friends" },
        { name: "Janet R. Skinner", phone: "520-573-7903", email: "janetrskinner@jourrapide.com", category: "Work" },
        // . . .
    ];

The `contacts` array will be used as a data source for all views, but depending on the view, different [filters](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') will be applied to it.

    <!--JavaScript-->
    $(function() {
        $("#pivotContainer").dxPivot({
            items: [{
                title: "All",
                listData: new DevExpress.data.DataSource({
                    store: contacts, sort: "name"
                })
            }, {
                title: "Family",
                listData: new DevExpress.data.DataSource({
                    store: contacts, sort: "name", filter: ["category", "=", "Family"]
                })
            },
            // . . .
            ],
            height: "auto",
            itemTemplate: function (itemData, itemIndex, itemElement) {
                $("<div>").dxList({
                    dataSource: itemData.listData,
                    itemTemplate: function (itemData, itemIndex, itemElement) {
                        itemElement.append(
                            $("<div />").text(itemData.name);
                            $("<div />").text(itemData.phone);
                            $("<div />").text(itemData.email);
                        )
                    }
                }).appendTo(itemElement);
            }
        });
    });

Note that the **Pivot** in this example employs DevExtreme's own **DataSource** object to filter data. To learn more about this and other data-processing capabilities of this object, see the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') article.

#####See Also#####
- [Pivot - Customize Item Appearance](/concepts/05%20Widgets/Pivot/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Pivot/Customize_Item_Appearance')
- [Pivot Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-pivot-overview/ios7)
- [Pivot API Reference](/api-reference/10%20UI%20Widgets/dxPivot '/Documentation/ApiReference/UI_Widgets/dxPivot/')

[tags]pivot, categorize, list, filter
