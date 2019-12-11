The **Button** widget provides five predefined appearances controlled by the [type](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type') option. The **type** can be *"normal"*, *"default"*, *"back"*, *"danger"* or *"success"*. Choose the proper type depending on the commands that the **Button** performs.

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "danger", // or "normal" | "back" | "danger" | "success"
            text: "Delete",
            onClick: function (e) {
                // ...
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

Apart from plain text, the **Button** can display an icon. DevExtreme provides [built-in icons](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/') that change their appearance depending on the platform. Certainly, you can [use an external icon library](/concepts/60%20Themes/30%20Icon%20Library/3%20Use%20External%20Icon%20Libraries.md '/Documentation/Guide/Themes/Icon_Library/#Use_External_Icon_Libraries') or even [standalone icons](/concepts/60%20Themes/30%20Icon%20Library/5%20Alternative%20to%20the%20Icon%20Library.md '/Documentation/Guide/Themes/Icon_Library/#Alternative_to_the_Icon_Library'). To specify the icon, set the [icon](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#icon') option.

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "danger",
            text: "Delete",
            icon: "remove",
            onClick: function (e) {
                // ...
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

If you need to define the **Button** content completely, specify a template for it. You can simply put this template inside the **Button** container...

    <!--HTML--><div id="buttonContainer">
        <i style="color:green">Refresh</i>
    </div>

... or you can combine the HTML markup for the template in the [template](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/template.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template') function.

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            template: function (e) {
                return $("<i />").text("Refresh")
                                 .css("color", "green");
            },
            onClick: function (e) {
                // ...
            }
        });
    });

If you need to render different templates depending on a specific condition, define them inside the **Button** container using the DevExtreme [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. To switch the templates on-the-fly, change the value of the [template](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/template.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template') option.

    <!--HTML--><div id="buttonContainer">
        <div data-options="dxTemplate: { name: 'withIcon' }">
            <span class="dx-icon-refresh"></span>
            <span>Refresh</span>
        </div>
        <div data-options="dxTemplate: { name: 'withLoadingIndicator' }">
            <span>
                <img id="loadingIndicator" src="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg" />
            </span>
            <span>Refresh</span>
        </div>
    </div>

<!---->

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            template: "withIcon",
            onClick: function (e) {
            	e.component.option("template", "withLoadingIndicator");
                setTimeout(function() {
                	e.component.option("template", "withIcon");
                }, 2000)
            }
        });
    });

<!---->

    <!--CSS-->#buttonContainer {
        height: 50px;
        width: 100px
    }

    #buttonContainer > div > span {
        vertical-align: middle
    }

    #loadingIndicator {
        height: 14px;
        width: 14px;
    }

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [Button API Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/dxAccordion/')

[tags]button, appearance, customize, templates, type, icon