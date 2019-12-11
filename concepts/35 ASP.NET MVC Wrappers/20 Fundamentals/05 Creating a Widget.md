To create any DevExtreme widget, begin with calling the `DevExtreme()` [HtmlHelper](https://msdn.microsoft.com/en-us/library/system.web.mvc.htmlhelper(v=vs.118).aspx) extension method. Then, call the builder method corresponding to the widget you want to create.

    @(Html.DevExtreme()
        .Button() // creates the **Button** widget
    )