To provide two-way binging and template support, pass a properly configured object to the **integrationOptions** option of the widget.

    $element.dxAccordion({
        ...
        integrationOptions: {
            watchMethod: ...
            templates: ...
            createTemplate: ...
        }
    })

The integrationOptions configuration object contains the following fields.

- **watchMethod**

 This field accepts the following function.

        function(expressionGetter: ExpressionGetter, callback: CallbackFn, options?: WatchOptions): DisposeFn

 Where

 - **ExpressionGetter** - An expression being watched. Accepts a function or string.

 - **CallbackFn** - A callback called when the watcher is first set, and then each time the expressionGetter's value change has been detected during the digest loop.

 - **WatchOptions** - An object containing two Boolean fields:

     - **skipImmediate** - Specifies whether to skip the first value comparison.

     - **deep** - Specifies whether the watcher uses deep or shallow comparison.

 - **DisposeFn** - A function called when watchers related to the widget are disposed of.

Most of DevExtreme widgets allow you to adjust their appearance using templates. You can specify a template by the name, using a function, or define markup. Use the following fields to provide template support.

- **templates**

 This field holds an array of named templates that are added when the widget is being initialized. An item key should correspond to the template name. The item value should be the following object.

        {
            render: function(renderData: RenderData): JQuery { ... }
        }

 Where 

        interface RenderData {
            model: any; // Data to be applied on markup
            itemIndex: any; // Index of item in collection (or id in hierarchical collections)
            container: any; // Append rendered markup to this element
        }

 The function should return a jQuery element containing the rendered template.

- **createTemplate**

 Define this method to support the capability to specify a template using a function or markup. This method should accept an HTML string or DOM passed to a **...Template** option of the widget and return a jQuery element containing the rendered template.

In some cases, a widget can remove markup created by the template's **render()** method, e.g. item templates are removed when items are updated. If you need to dispose of resources allocated by the removed template (e.g. event handlers), subscribe to the **dxremove** event.

    integrationOptions: {
        templates: {
            "item": {
                render: function(args) {
                    var $div = $("<div>").dxButton({
                        text: args.model
                    });
                    var intervalId = setInterval(function() {
                        console.log(args.model);
                    }, 500);
                    $div.on("dxremove", function() {
                        clearInterval(intervalId);
                    });
                    args.container.append($div);
                    return $div;
                }
            }
        }
    }
