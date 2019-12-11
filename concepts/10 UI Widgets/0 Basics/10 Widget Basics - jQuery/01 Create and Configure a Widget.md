All widgets must be placed in a container. This role is played by a `<div>` HTML element. Add a `<div>` to the `<body>` tag of your page. Make sure that this `<div>` has the `id` attribute specified.

    <!--HTML--><div id="buttonContainer"></div>

DevExtreme supplies a jQuery plugin for each widget.

To create, for example, the **Button** widget within the `buttonContainer` element, use the `dxButton()` plugin as the following code shows.

    <!--JavaScript-->$(function () {
		$("#buttonContainer").dxButton();
	});

To configure a widget, pass a configuration object as the plugin parameter. The properties of this object represent the widget's configuration options. To specify them, set the required values to the configuration object's properties.

    <!--JavaScript-->$(function () {
        var showHelloWorld = function () {
            alert("Hello world!");
        };

        $("#buttonContainer").dxButton({
            onClick: showHelloWorld,
            text: "Click me!"
        });
    });

#####See Also#####
- [Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') | **WidgetName** | **Configuration** - describes all options of a specific DevExtreme widget.