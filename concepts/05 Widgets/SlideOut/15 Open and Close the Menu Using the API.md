To open or close the **SlideOut** menu programmatically, call the [showMenu()](/api-reference/10%20UI%20Widgets/dxSlideOut/3%20Methods/showMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Methods/#showMenu') or [hideMenu()](/api-reference/10%20UI%20Widgets/dxSlideOut/3%20Methods/hideMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Methods/#hideMenu') method. You can do the same thing using the [toggleMenuVisibility(showing)](/api-reference/10%20UI%20Widgets/dxSlideOut/3%20Methods/toggleMenuVisibility(showing).md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Methods/#toggleMenuVisibilityshowing') method. Pass **true** or **false** to this method to open or close the menu, respectively. For example, the following code shows how to close the slide-out menu when a user selects a command on it.

    <!--JavaScript-->var products = [
        { text: "SuperLCD 42", price: "$1200" },
        { text: "SuperLED 42", price: "$1450" },
        { text: "SuperLED 50", price: "$1600" },
        { text: "SuperLCD 55", price: "$1350" },
        { text: "SuperLCD 70", price: "$4000" }
    ];

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: products,
            onItemClick: function (e) {
                e.component.hideMenu();
                // ---------- or ----------
                e.component.toggleMenuVisibility(false);
            }
        });
    });

In this code, the slide-out menu is being closed from within the **SlideOut** widget. If another component should open or close the slide-out menu, call the methods in a different manner. The following example shows how a click on a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') can open the **SlideOut** menu. 

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "Open the slide-out menu"
            onClick: function (e) {
                $("#slideOutContainer").dxSlideOut("showMenu");
                // ---------- or ----------
                $("#slideOutContainer").dxSlideOut("toggleMenuVisibility", true);
            }
        });
    });

#####See Also#####
- [SlideOut Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slideout/Overview)
- [SlideOut API Reference](/api-reference/10%20UI%20Widgets/dxSlideOut '/Documentation/ApiReference/UI_Widgets/dxSlideOut/')

[tags]slide-out menu, slideOut, open, show, close, hide