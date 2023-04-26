You can use the <a href="http://mustache.github.io/" target="_blank">Mustache</a> 3rd-party template engine. Call the [DevExpress.setTemplateEngine(options)](/api-reference/50%20Common/utils/setTemplateEngine(options).md '/Documentation/ApiReference/Common/Utils/#setTemplateEngineoptions') method and implement functions that `compile` and `render` templates:

    <!-- tab: index.js -->
    DevExpress.setTemplateEngine({
        compile: (element) => $(element).html(),
        render: (template, data) => Mustache.render(template, data),
    });

If you assign a function that returns a string to a template, the `compile` callback receives a text node as an argument. In this case, the `compile` callback needs to contain additional logic that determines if an argument is a template element or a text node:

- If an argument is a template element, call `$(element).html()`. 

- Otherwise, append the node to an element: `$('<div>').append(element).html()`.

[tags] jquery