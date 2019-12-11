Despite being a superstructure over JavaScript widgets, controls get the best from Razor syntax, but still, in some cases, Razor appears to be short of certain capabilities. In these cases, we recommend you utilize pure JavaScript backed with jQuery. Regarding templates, prefer the JavaScript function over the Razor block when you need to access JavaScript variables or implement sophisticated logic inside the template.

Short JavaScript functions can be declared inline with the method's name using the `new JS()` expression.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .Columns(columns => {
            columns.Add()
                .CellTemplate(new JS("function (element, cellInfo) { element.addClass('data-grid-custom-cell') }"))
                // ...
        })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .Columns(Sub(columns)
            columns.Add() _
                .CellTemplate(New JS("function (element, cellInfo) { element.addClass('data-grid-custom-cell') }")) _
                ' ...
        End Sub)
    )

Multi-line JavaScript functions should be declared in an external script and then referred to from the method's name using the same `new JS()` expression.

    <!--Razor C#-->
    @(Html.DevExtreme().List()
        .ItemTemplate(new JS("list_itemTemplate"))
        // ...
    )

    <!--Razor VB-->
    @(Html.DevExtreme().List() _
        .ItemTemplate(New JS("list_itemTemplate"))
        ' ...
    )

<!---->

    <script>
        function list_itemTemplate(data, index, element) {
            element.append(
                $("<img />").attr("src", data.imgSrc)
            );
        }
    </script>