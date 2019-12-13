You can use a 3rd-party template engine, but only with jQuery. DevExtreme supports the following template engines out of the box:

- <a href="http://underscorejs.org/" target="_blank">Underscore</a>
- <a href="https://github.com/BorisMoore/jsrender" target="_blank">JsRender</a>
- <a href="http://mustache.github.io/" target="_blank">Mustache</a>
- <a href="http://twitter.github.io/hogan.js/" target="_blank">Hogan</a>
- <a href="http://handlebarsjs.com/" target="_blank">Handlebars</a>
- <a href="http://olado.github.io/doT/index.html" target="_blank">doT</a>

To use one of them, pass its name to the [DevExpress.setTemplateEngine(name)](/api-reference/50%20Common/utils/setTemplateEngine(name).md '/Documentation/ApiReference/Common/Utils/#setTemplateEnginename') method:

    <!--JavaScript-->
    DevExpress.setTemplateEngine("underscore");

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

You can also use other template engines, but you need to implement functions that compile and render templates in this case. See [DevExpress.setTemplateEngine(options)](/api-reference/50%20Common/utils/setTemplateEngine(options).md '/Documentation/ApiReference/Common/Utils/#setTemplateEngineoptions') for details.
