Specify the widget's **integrationOptions** option to provide two-way binding and template support.

    DevExpress.ui.dxAccordion(element, {
        ...
        integrationOptions: {
            watchMethod: ...
            templates: ...
            createTemplate: ...
        }
    })

The **integrationOptions** configuration object contains the following fields:

- **watchMethod**

 This field accepts the following function:

        function(expressionGetter, callback, watchOptions)

 Where

 - **expressionGetter** - An expression being watched. Accepts a function or string.

 - **callback** - A callback is called when the watcher is first set and each time it detects a value is changed for the expressionGetter during the internal evaluation loop.

 - **watchOptions** - An object containing two Boolean fields:

     - **skipImmediate** - Specifies whether to skip the first value comparison.

     - **deep** - Specifies whether the watcher uses deep or shallow comparison.

 - The method should return a function that is called when watchers related to the widget are deleted.

- **templates**

 This field holds a map of the templates that are added when the widget is initialized. Item keys should correspond to template names. Item values should be objects that contain render functions.

        templates: {
            itemTemplate: {
                render: function (renderData){
                    // 'renderData' includes the following fields:
                    // 'model' - data to be applied on markup
                    // 'itemIndex' - index of item in collection (or id in hierarchical collections)
                    // 'container' - append rendered markup to this element
                    ...
                }
            }
        }

 The **render** function should return an HTML element containing the rendered template.

- **createTemplate**

 A function that processes a custom template. It accepts an HTML markup or a DOM node passed to a widget's **...Template** option and returns an object with a render function.

        createTemplate: function(source) {
            var template = Hogan.compile(source);
            return {
                render: function(args) {
                    return template.render(args.data);
                }
            };
        }

In some cases, templates are removed at runtime, for example, when items are updated. To delete resources allocated to removed templates, handle to the **dxremove** event.

    integrationOptions: {
        templates: {
            "item": {
                render: function(args) {
                    var div = document.createElement("div");
                    new Button(div ,{
                        text: args.model
                    });
                    var intervalId = setInterval(function() {
                        console.log(args.model);
                    }, 500);
                    DevExpress.events.on(div, "dxremove", function() {
                        clearInterval(intervalId);
                    });
                    args.container.appendChild(div);
                    return div;
                }
            }
        }
    }
