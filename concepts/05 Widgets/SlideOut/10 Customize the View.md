When it comes to customizing the view, you have two options to use: [itemTemplate](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#itemTemplate') and [contentTemplate](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#contentTemplate'). Which suits you best depends on whether the view itself reacts to changes in the menu in your use-case, or some other component inside the view does this.

The following code illustrates the first use-case. Here, each time a product is selected from the slide-out menu, the content of the view gets updated to display fresh `itemData`. If you must access `itemData` to update the view, it is a sure sign for you to use the [itemTemplate](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#itemTemplate') callback function. It is called each time the view slides in.

    <!--JavaScript-->var products = [{
        key: "Televisions",
        items: [
            { text: "SuperLCD 42", price: "$1200", src: "images/products/7.png" },
            { text: "SuperLED 42", price: "$1450", src: "images/products/5.png" },
            { text: "SuperLED 50", price: "$1600", src: "images/products/4.png" },
            { text: "SuperLCD 55", price: "$1350", src: "images/products/6.png" },
            { text: "SuperLCD 70", price: "$4000", src: "images/products/9.png" }
        ]
    }, {
        key: "Monitors",
        items: [
            { text: "DesktopLCD 19", price: "$160", src: "images/products/10.png" },
            { text: "DesktopLCD 21", price: "$170", src: "images/products/12.png" },
            { text: "DesktopLED 21", price: "$180", src: "images/products/13.png" }
       ]
    }];

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: products,
            menuGrouped: true,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var infoContainer = $("<div />").attr("id", "info");
                infoContainer.append(
                    $("<img />").attr("src", itemData.src),
                    $("<div />").text(itemData.price)
                );
                itemElement.append(infoContainer);
            },
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

In the second use-case, you have some component that gets updated each time a user selects a command on the slide-out menu. In the following example, this component is the [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/') widget. Note that it is the **List**, not **SlideOut** that is bound to the data source. Note also that the data source is not just a simple array, but a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object. This object provides an interface for processing data, in this example, for mapping and filtering the underlying array.

    <!--JavaScript-->var products = new DevExpress.data.DataSource({
        store: {
            type: "array",
            key: "key",
            data: [{
                key: "Televisions",
                items: [
                    { text: "SuperLCD 42", price: "$1200", src: "images/products/7.png" },
                    { text: "SuperLED 42", price: "$1450", src: "images/products/5.png" },
                    { text: "SuperLED 50", price: "$1600", src: "images/products/4.png" },
                    { text: "SuperLCD 55", price: "$1350", src: "images/products/6.png" },
                    { text: "SuperLCD 70", price: "$4000", src: "images/products/9.png" }
                ]
            }, {
                key: "Monitors",
                items: [
                    { text: "DesktopLCD 19", price: "$160", src: "images/products/10.png" },
                    { text: "DesktopLCD 21", price: "$170", src: "images/products/12.png" },
                    { text: "DesktopLED 21", price: "$180", src: "images/products/13.png" }
                ]
            }]
        },
        map: function (item) {
            return item.items;
        }
    });

    var innerListConfiguration = {
        dataSource: products,
        itemTemplate: function (itemData, itemIndex, itemElement) {
            var infoContainer = $("<span />").attr("id", "info");
            itemElement.append(
                $("<img />").attr("src", itemData.src)
                            .attr("height", 40).attr("width", 40)
                            .attr("align", "right")
                            .attr("vertical-align", "middle"),
                infoContainer.append(
                    $("<div />").text(itemData.text),
                    $("<div />").text(itemData.price)
                )
            );
        }
    };

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: ["All", "Televisions", "Monitors"],
            contentTemplate: function (viewContent) {
                // Creates the "List" widget
                $("<div />").dxList(innerListConfiguration)
                            .appendTo(viewContent);
            },
            onSelectionChanged: function (e) {
                // Filters list items depending on the selected menu command
                if(e.addedItems[0] == "All")
                    products.filter(null);
                else
                	products.filter("key", "=", e.addedItems[0]);
                products.load();
            },
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

As you can see in the code above, a markup for the **SlideOut** view is defined in the [contentTemplate](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#contentTemplate') function. Unlike **itemTemplate**, this function is called only once - when the **SlideOut** is being rendered.

#####See Also#####
- [SlideOut - Customize Menu Items](/concepts/05%20Widgets/SlideOut/05%20Customize%20Menu%20Items.md '/Documentation/Guide/Widgets/SlideOut/Customize_Menu_Items')
- [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer)
- [SlideOut Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slideout/Overview)
- [SlideOut API Reference](/api-reference/10%20UI%20Widgets/dxSlideOut '/Documentation/ApiReference/UI_Widgets/dxSlideOut/')

[tags]slide-out menu, slideOut, view appearance, customize, templates