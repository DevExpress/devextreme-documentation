The **Toast** widget provides four predefined appearances controlled by the [type](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type') option. The **type** can be *"info"*, *"warning"*, *"error"* or *"success"*, depending on the mood of the message that the **Toast** displays. You can specify this message using the [message](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/message.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#message') option.

    $(function() {
        $("#toastContainer").dxToast({
            type: "success", // or "info" | "warning" | "error"
            message: "Completed successfully!"
        });
    });

If you need to define the **Toast** content completely, specify a template for it. You can simply put this template inside the **Toast** container...

    <!--HTML--><div id="toastContainer">
        <p style="background-color:green">Toast content</p>
    </div>

... or you can combine the HTML markup for the template in the [contentTemplate](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#contentTemplate') function. Note that this function will be called only once - when the **Toast** appears for the first time.

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            type: "custom",
            contentTemplate: function () {
                return $("<p />").text("Toast content")
                                 .css("background-color", "green");
            }
        });
    });

[note]To avoid rendering issues, always set the [type](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type') option to *"custom"* when you use a custom template.

If you need to render different templates depending on a specific condition, define them inside the **Toast** container using the DevExtreme [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. To switch the templates on-the-fly, change the value of the [contentTemplate](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#contentTemplate') option.

    <!--HTML--><div id="toastContainer">
        <div data-options="dxTemplate: { name: 'green' }">
            <p style="background-color:green">Green template</p>
        </div>
        <div data-options="dxTemplate: { name: 'blue' }">
            <p style="background-color:blue">Blue template</p>
        </div>
    </div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->$(function() {
        var toast = $("#toastContainer").dxToast({
            type: "custom",
            contentTemplate: 'green'
        }).dxToast("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Toast Template", 
            onClick: function (e) {
                if (toast.option("contentTemplate") == "green") {
                    toast.option("contentTemplate", "blue");
                } else {
                    toast.option("contentTemplate", "green");
                }
                toast.show();
            } 
        });
    });

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [Toast - Resize and Relocate](/concepts/05%20Widgets/Toast/15%20Resize%20and%20Relocate.md '/Documentation//Guide/Widgets/Toast/Resize_and_Relocate/')
- [Toast Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-toast-overview)
- [Toast API Reference](/api-reference/10%20UI%20Widgets/dxToast '/Documentation/ApiReference/UI_Widgets/dxToast/')

[tags]toast, overlay, template, customize the content, content template