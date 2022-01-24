
---

##### jQuery

    You can specify attributes to the component's root element directly in HTML code:

    <div id="my{WidgetName}" class="myClass"></div>

##### Angular

    You can specify attributes to the component's root element directly in HTML code:

    <dx-{widgetName} ... class="myClass">
    </dx-{widgetName}>

##### React

    You can specify attributes to the component's root element directly in HTML code:

    <{WidgetName} ... className="myClass" />

##### ASP.NET Core Control

    To add an attribute to an ASP.NET Core control, use its **OnInitialized** method:

    @(Html.DevExtreme().{WidgetName}()...
        .OnInitialized("(e) => e.element.addClass('myClass')")
    )

##### ASP.NET MVC Controls

    To add an attribute to an ASP.NET MVC control, use its **OnInitialized** method:

        @(Html.DevExtreme().{WidgetName}()...
        .OnInitialized("(e) => e.element.addClass('myClass')")
    )

---
