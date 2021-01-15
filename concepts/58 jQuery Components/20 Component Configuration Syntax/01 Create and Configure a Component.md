Any DevExtreme UI component must be placed in a container. This role is played by a `<div>` HTML element. Add a `<div>` to the `<body>` tag of your page. Make sure that this `<div>` has the `id` attribute specified.

    <!--HTML--><div id="buttonContainer"></div>

DevExtreme supplies a jQuery plugin for each UI component. To create, for example, the [Button](/api-reference/10%20UI%20Components/dxButton '/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/'') UI component within the `buttonContainer` element, use the `dxButton()` plugin as the following code shows.

    <!--JavaScript-->$(function () {
		$("#buttonContainer").dxButton();
	});

To configure a UI component, pass an object to the plugin as shown in the following code. Properties of this object mirror the properties of the UI component.

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "Click me!",
            onClick: function () {
                alert("Hello world!");
            }
        });
    });

#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Button](/api-reference/10%20UI%20Components/dxButton '/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/'').[Configuration](/api-reference/10%20UI%20Components/dxButton '/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/''Configuration/)

[tags]basics, jquery, create, configure, initialize, design time
