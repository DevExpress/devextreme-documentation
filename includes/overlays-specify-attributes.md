You can specify attributes to the component's root element directly in HTML code:

- jQuery

    <div id="my{WidgetName}" class="myClass"></div>

- Angular

    <dx-{widgetName} ... class="myClass"></dx-popup>

- React

    <{WidgetName} ... className="myClass" />

To add an attribute to an ASP.NET Core and MVC control, use its **OnInitialized** method:

    @(Html.DevExtreme().{WidgetName}()...
        .OnInitialized("(e) => e.element.addClass('myClass')")
    )