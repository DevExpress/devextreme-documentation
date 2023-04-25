You can use the <a href="http://mustache.github.io/" target="_blank">Mustache</a> 3rd-party template engine. Call the [DevExpress.setTemplateEngine(options)](/api-reference/50%20Common/utils/setTemplateEngine(options).md '/Documentation/ApiReference/Common/Utils/#setTemplateEngineoptions') method and implement functions that compile and render templates:

    <!-- tab: index.js -->
    DevExpress.setTemplateEngine({
        compile: (element) => $(element).html(),
        render: (template, data) => Mustache.render(template, data),
    });

[tags] jquery