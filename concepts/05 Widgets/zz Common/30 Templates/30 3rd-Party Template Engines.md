You can choose a 3rd-party template engine if you do not use Angular, AngularJS, or Knockout. DevExtreme supports the following template engines out of the box:

- [Underscore](https://underscorejs.org)
- [JsRender](https://github.com/BorisMoore/jsrender)
- [Mustache](https://mustache.github.io)
- [Hogan](https://twitter.github.io/hogan.js)
- [Handlebars](https://handlebarsjs.com)
- [doT](https://olado.github.io/doT/index.html)

To use one of them, pass its name to the [DevExpress.ui.setTemplateEngine(name)](/api-reference/50%20Common/utils/ui/setTemplateEngine(name).md '/Documentation/ApiReference/Common/Utils/ui/#setTemplateEnginename') method:

    <!--JavaScript-->
    DevExpress.ui.setTemplateEngine("underscore");

    $(function() {
        $("#list").dxList({
            // ...
            itemTemplate: $("#itemTemplate")
        });
    })

    <!--HTML-->
    <div id="list"></div>
    <script type="text/html" id="itemTemplate">
        <!-- your Underscore template -->
    </script>

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/Item3RdPartyEngineTemplate/"
}

You can also use other template engines, but you need to implement functions that compile and render templates in this case. See [DevExpress.ui.setTemplateEngine(options)](/api-reference/50%20Common/utils/ui/setTemplateEngine(options).md '/Documentation/ApiReference/Common/Utils/ui/#setTemplateEngineoptions') for details.
