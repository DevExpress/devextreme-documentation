Any DevExtreme widget must be placed in a container. This role is played by a `<div>` HTML element. Add a `<div>` to the `<body>` tag of your page. Make sure that this `<div>` has the `id` attribute specified.

    <!--HTML--><div id="buttonContainer"></div>

DevExtreme supplies a jQuery plugin for each widget. To create, for example, the [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget within the `buttonContainer` element, use the `dxButton()` plugin as the following code shows.

    <!--JavaScript-->$(function () {
		$("#buttonContainer").dxButton();
	});

To configure a widget, pass an object to the plugin as shown in the following code. Note that the properties of this object mirror the options of the widget.

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "Click me!",
            onClick: function () {
                alert("Hello world!");
            }
        });
    });

#####See Also#####
- [API Reference](/Documentation/ApiReference) | **WidgetName** | **Configuration**
- [Get and Set Options - jQuery](/Documentation/16_2/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options)

[tags]basics, jquery, create, configure, initialize, design time