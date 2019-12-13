#include common-troubleunderstanding-note with {
    technology: "jQuery",
    docsLink: "https://learn.jquery.com/"
}

Make sure you linked all the required resources before creating a widget:

- **Link Resources**: [Local Scripts](/concepts/00%20Getting%20Started/01%20Installation/10%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') | [CDN Services](/concepts/00%20Getting%20Started/01%20Installation/05%20CDN%20Services '/Documentation/Guide/Getting_Started/Installation/CDN_Services/') | [NuGet Package](/concepts/00%20Getting%20Started/01%20Installation/10%20NuGet%20Package.md '/Documentation/Guide/Getting_Started/Installation/NuGet_Package/') | [npm Package](/concepts/00%20Getting%20Started/01%20Installation/01%20npm%20Package '/Documentation/Guide/Getting_Started/Installation/npm_Package/')

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
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/').[Configuration](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/')
- [Get and Set Options - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options')

[tags]basics, jquery, create, configure, initialize, design time
