DevExtreme enables you to use an alternative template engine to customize the appearance of widget elements. Pass the name of the required template engine to the [DevExpress.ui.setTemplateEngine(name)](/api-reference/50%20Common/utils/ui/setTemplateEngine(name).md '/Documentation/ApiReference/Common/Utils/ui/#setTemplateEnginename') method to define which engine to use. DevExtreme supports the following template engines out of the box.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)
- [JsRender](https://github.com/BorisMoore/jsrender)
- [Mustache](https://mustache.github.io)
- [Hogan](https://twitter.github.io/hogan.js)
- [Underscore](https://underscorejs.org)
- [Handlebars](https://handlebarsjs.com)
- [doT](https://olado.github.io/doT/index.html)

<!---->

    <!--JavaScript-->
    DevExpress.ui.setTemplateEngine("underscore");

If DevExtreme does not support your required template engine, call the [DevExpress.ui.setTemplateEngine(options)](/api-reference/50%20Common/utils/ui/setTemplateEngine(options).md '/Documentation/ApiReference/Common/Utils/ui/#setTemplateEngineoptions') method to define a custom template engine. The **options** argument should be an object containing the following fields.

- **compile**  
Holds a function that compiles a template.

- **render**  
Holds a function that renders a template.

[note]To define a template in the jQuery approach, use the **script** element. The **div** element can be used only with Knockout and AngularJS built-in template engines.

You can define a template out of the widget element. For example, if you use a single template in several widgets.

    <!--HTML-->
    <div id="gallery"></div>
    <script type="text/html" id="item-template">
        <div>
            <img src="<%= Image %>" />
            <div class="item-price">
                <%= Globalize.format(Price, "c0") %>
            </div>
            <div>
                <%= Address %>
            </div>
        </div>
    </script>

<!---->

    <!--JavaScript-->
    DevExpress.ui.setTemplateEngine("underscore");

    $("#gallery").dxGallery({
        dataSource: gallery,
        itemTemplate: $("#item-template")
    });

If a template is used only in a single widget, you can define it within the widget element using the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component.

    <div id="gallery">
        <script type="text/html" id="item-template" data-options="dxTemplate: {name: 'galleryItem'}">
            <div>
                <img src="<%= Image %>" />
                <div class="item-price">
                    <%= Globalize.format(Price, "c0") %>
                </div>
                <div>
                    <%= Address %>
                </div>
            </div>
        </script>
    </div>

<!---->

    <!--JavaScript-->
    DevExpress.ui.setTemplateEngine("underscore");

    $("#gallery").dxGallery({
        dataSource: gallery,
        itemTemplate: "galleryItem"
    });