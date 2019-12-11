By default, the **Popup** is displayed in a windowed mode. To show it full-screen, assign **true** to the [fullScreen](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/fullScreen.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#fullScreen') option. 

    <!--JavaScript-->
    $(function() {
		$("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true, 
            fullScreen: true
        });
    });

To define the **Popup** content, specify a template for it. You can simply put this template inside the **Popup** container...

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>

... or you can combine the HTML markup for the template in the [contentTemplate](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate') function. Note that this function will be called only once - when the **Popup** appears for the first time.

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            contentTemplate: function () {
                return $("<div />")
                    .dxButton({ 
                        text: 'Click me',
                        onClick: function () {
                            // ...
                        }
                    });
            }
        });
    });

If you need to render different templates depending on a specific condition, define them inside the **Popup** container using the DevExtreme [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. To switch the templates on-the-fly, change the value of the [contentTemplate](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate') option.

    <!--HTML-->
    <div id="buttonContainer"></div>
    <div id="popupContainer">
        <div data-options="dxTemplate: { name: 'template1' }">
            <p>First template</p>
        </div>
        <div data-options="dxTemplate: { name: 'template2' }">
            <p>Second template</p>
        </div>
    </div>

    <!--JavaScript-->
    $(function() {
        var popup = $("#popupContainer").dxPopup({
            title: "Popup Title",
            contentTemplate: 'template1'
        }).dxPopup("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                if (popup.option("contentTemplate") == "template1") {
                    popup.option("contentTemplate", "template2");
                } else {
                    popup.option("contentTemplate", "template1");
                }
                popup.show();
            } 
        });
    });

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [Popup - Customize the Title](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/10%20Customize%20the%20Title.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Title/')
- [Popup - Specify Toolbar Items](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/20%20Specify%20Toolbar%20Items.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/')
- [Popup - Color the Shading of the Background](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/30%20Color%20the%20Shading%20of%20the%20Background.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Color_the_Shading_of_the_Background/')
- [Popup Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popup-overview)
- [Popup API Reference](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/')

[tags]popup, overlay, template, customize the content, content template