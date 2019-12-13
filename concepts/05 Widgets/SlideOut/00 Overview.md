The **SlideOut** widget is a classic slide-out menu paired with a view. An end user opens the menu by swiping away the view.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slideout/Overview/"
}

The following code adds a primitive **SlideOut** to your page.

    <!--HTML--><div id="slideOutContainer"></div>
    
    <!--JavaScript-->$(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: ["SuperLCD 42", "SuperLED 42", "SuperLED 50",
                         "SuperLCD 55", "SuperLCD 70", "DesktopLCD 19",
                         "DesktopLCD 21", "DesktopLED 21"],
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

    <!--CSS-->#slideOutContainer {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

Note that the [dataSource](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/dataSource/') option accepts an array of strings. An individual menu item will be generated for each of these strings. As an alternative, the **dataSource** option accepts an array of objects. In this case, each of these objects should posess the [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/items/#text') field, otherwise the menu item for it will be unnamed.

    <!--JavaScript-->var displays = [
        { text: "SuperLCD 42", price: "$1200" },
        { text: "SuperLED 42", price: "$1450" },
        { text: "SuperLED 50", price: "$1600" },
        { text: "SuperLCD 55", price: "$1350" },
        { text: "SuperLCD 70", price: "$4000" },
        { text: "DesktopLCD 19", price: "$160" },
        { text: "DesktopLCD 21", price: "$170" },
        { text: "DesktopLED 21", price: "$180" }
     ];

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: displays,
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

[note]The **SlideOut** contains the [List](/concepts/05%20Widgets/List/00%20Overview.md '/Documentation/Guide/Widgets/List/Overview/') widget in the slide-out menu. If you need to put another collection widget there, use the [SlideOutView](/concepts/05%20Widgets/SlideOutView/00%20Overview.md '/Documentation/Guide/Widgets/SlideOutView/Overview/') instead of the **SlideOut**.

#####See Also#####
#include common-link-configurewidget
- [SlideOut - Customize Menu Items](/concepts/05%20Widgets/SlideOut/05%20Customize%20Menu%20Items.md '/Documentation/Guide/Widgets/SlideOut/Customize_Menu_Items')
- [SlideOut - Group Menu Items](/concepts/05%20Widgets/SlideOut/08%20Group%20Menu%20Items.md '/Documentation/Guide/Widgets/SlideOut/Group_Menu_Items')
- [SlideOut - Customize the View](/concepts/05%20Widgets/SlideOut/10%20Customize%20the%20View.md '/Documentation/Guide/Widgets/SlideOut/Customize_the_View')
- [SlideOut - Open and Close the Menu Using the API](/concepts/05%20Widgets/SlideOut/15%20Open%20and%20Close%20the%20Menu%20Using%20the%20API.md '/Documentation/Guide/Widgets/SlideOut/Open_and_Close_the_Menu_Using_the_API')
- [SlideOut API Reference](/api-reference/10%20UI%20Widgets/dxSlideOut '/Documentation/ApiReference/UI_Widgets/dxSlideOut/')

[tags]slide-out menu, slideOut, navigation, collection container, collection widget, overview