You can use a 3rd-party template engine of your choice. The example below shows how to set up the <a href="http://mustache.github.io/" target="_blank">Mustache</a> template engine. Call the [DevExpress.setTemplateEngine(options)](/api-reference/50%20Common/utils/setTemplateEngine(options).md '/Documentation/ApiReference/Common/Utils/#setTemplateEngineoptions') method and implement functions that `compile` and `render` templates:

---

##### jQuery 

    <!-- tab: index.js -->
    DevExpress.setTemplateEngine({
        compile: (element) => $(element).html(),
        render: (template, data) => Mustache.render(template, data),
    });

    $(function() {
        $("#list").dxList({
            // ...
            itemTemplate: $("#itemTemplate")
        });
    })

    <!-- tab: index.html -->
    <div id="list"></div>
    <script type="text/html" id="itemTemplate">
        <!-- your Mustache template -->
    </script>

---

If you assign a function that returns a string to a template, the `compile` callback receives a text node as an argument. In this case, do the following:

1. Implement additional logic that determines if an argument is a template element or a text node.

2. If an argument is a template element, call `$(element).html()`. 

3. Otherwise, append the node to an element: `$('<div>').append(element).html()`.

[tags] jquery