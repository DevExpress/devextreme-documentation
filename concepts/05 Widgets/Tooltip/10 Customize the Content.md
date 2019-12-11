If you need to define the **Tooltip** content, specify a template for it. You can simply put this template inside the **Tooltip** container...

    <!--HTML--><div id="tooltipContainer">
        <p>Tooltip content</p>
    </div>

... or you can combine the HTML markup for the template in the [contentTemplate](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#contentTemplate') function. Note that this function will be called only once - when the **Tooltip** appears for the first time.

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            contentTemplate: function () {
                return $("<p />").text("Tooltip content");
            }
        });
    });

If you need to render different templates depending on a specific condition, define them inside the **Tooltip** container using the DevExtreme [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. To switch the templates on-the-fly, change the value of the [contentTemplate](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#contentTemplate') option.

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="buttonContainer"></div>
    <div id="tooltipContainer">
        <div data-options="dxTemplate: { name: 'template1' }">
            <p>First template</p>
        </div>
        <div data-options="dxTemplate: { name: 'template2' }">
            <p>Second template</p>
        </div>
    </div>

<!---->

    <!--JavaScript-->$(function() {
        var tooltip = $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            contentTemplate: 'template1'
        }).dxTooltip("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                if (tooltip.option("contentTemplate") == "template1") {
                    tooltip.option("contentTemplate", "template2");
                } else {
                    tooltip.option("contentTemplate", "template1");
                }
            } 
        });
    });

<!---->

    <!--CSS-->#buttonContainer {
        display: block;
        width: 200px
    }

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [Tooltip - Resize and Relocate](/concepts/05%20Widgets/Tooltip/15%20Resize%20and%20Relocate.md '/Documentation//Guide/Widgets/Tooltip/Resize_and_Relocate/')
- [Tooltip Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-tooltip-overview)
- [Tooltip API Reference](/api-reference/10%20UI%20Widgets/dxTooltip '/Documentation/ApiReference/UI_Widgets/dxTooltip/')

[tags]tooltip, overlay, template, customize the content, content template