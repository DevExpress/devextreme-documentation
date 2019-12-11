To create a widget use the appropriate jQuery plugin. The options object passed to the plugin constructor specifies configuration options of the widget.

    import $ from 'jquery'
    import 'devextreme/ui/accordion'
    ...
    let $element = $('<div>').appendTo($container);
    let instance = $element.dxAccordion(options).dxAccordion('instance');
    ...

In the example above, the **$element** variable holds the HTML element associated with the widget. Data visualization widgets require this element to have the **display** style property set to "block". Additionally, some widgets (e.g. DataGrid) require the container to have defined size. Thus, place widget elements into a container element attached to the document (**$container** in the example above).
