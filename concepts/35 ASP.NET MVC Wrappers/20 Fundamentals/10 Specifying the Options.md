DevExtreme ASP.NET MVC Wrappers mirror the [options of the client-side widgets](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') with only one difference: instead of the lower camel case usual in JavaScript, wrapper methods use the upper camel case common in .NET. For example:

<div class="simple-table" style="font-size:14px; font-style:normal; text-align:center">
  <table>
    <thead>
    <tr>
      <th>Widget Option</th>
      <th>Wrapper Method</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td style="font-style:normal">dataSource</td>
      <td>DataSource</td>
    </tr>
    <tr>
      <td style="font-style:normal">tooltip</td>
      <td>Tooltip</td>
    </tr>
    <tr>
      <td style="font-style:normal">showColumnHeaders</td>
      <td>ShowColumnHeaders</td>
    </tr>
    </tbody>
  </table>
</div>

Wrapper methods are called using a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface). In Visual Studio, IntelliSense prompts you the names of available methods, their accepted values and short descriptions.

![DevExtreme HTML5 ASPNET MVCWrappers](/images/Common/MvcWrappers/fluent-interface.png)

To specify a simple widget option, call the corresponding wrapper method and pass the required option value.

    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .ID("submitButton") // sets the "id" attribute of the widget container
        .Text("submit") // sets the button text
        .Width(100) // sets the button width
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Button() _
        .ID("submitButton") _
        .Text("submit") _
        .Width(100)
    )

[note]Specifying the `ID` option is not necessary, however, you may need it if you plan to access the widget JavaScript API at runtime (to [call a method](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/17%20Calling%20Methods.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Calling_Methods'), for example). The value of the `ID` option should meet certain requirements. It must always be unique in the context of a page. If a partial view is loaded multiple times, each instance of this partial view must render all widgets with unique IDs. Also, the value of the `ID` option should meet the [requirements for the `id` attribute in HTML5](https://www.w3.org/TR/html5/dom.html#the-id-attribute).

Nested options are configured using lambda expressions. A lambda parameter starts a new chain of methods that specify the nested options.

    <!--Razor C#-->
    @(Html.DevExtreme().Chart()
        .Legend(l => l // configures the chart legend (l - lambda parameter)
            .Visible(false) // hides the legend in the chart
        )
        .Tooltip(t => t // configures the tooltip (t - lambda parameter)
            .Enabled(true) // enables the tooltip
            .Font(f => f // configures the tooltip's text (f - lambda parameter)
                .Color("blue") // paints the tooltip's text in blue
            )
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Chart() _
        .Legend(Sub(l)
            l.Visible(False)
        End Sub) _
        .Tooltip(Sub(t)
            t.Enabled(True) _
             .Font(Sub(f)
                 f.Color("blue")
             End Sub)
        End Sub)
    )

Options that represent collections of items are configured using lambda expressions as well, but in this case, the lambda parameter performs the role of an item factory. Its `Add()` method adds a new item to the collection and then returns it for further configuration by the chain that follows.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .Columns(columns => { // specifies a collection of columns
            columns.Add() // adds the "CustomerID" column
                .DataField("CustomerID");
                
            columns.Add() // adds the "OrderDate" column
                .DataField("OrderDate")
                .DataType(GridColumnDataType.Date);
        })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .Columns(Sub(columns)
            columns.Add() _
                .DataField("CustomerID")
                
            columns.Add() _
                .DataField("OrderDate") _
                .DataType(GridColumnDataType.Date)
        End Sub)
    )

Options that accept a predefined set of values are specified by .NET enums. Refer to the description of a particular option to learn if this option accepts a enum. 

    <!--Razor C#-->
    @(Html.DevExtreme().DateBox()
        .Type(DateBoxType.DateTime) // sets the type using the DateBoxType .NET enum
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DateBox() _
        .Type(DateBoxType.DateTime) ' sets the type using the DateBoxType .NET enum
    )
    
More examples on each case are available in our [technical demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/AjaxRequest/Mvc/Light) and [sample applications](/concepts/35%20ASP.NET%20MVC%20Wrappers/10%20Prerequisites%20and%20Installation/20%20Sample%20Applications/00%20Sample%20Applications.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Prerequisites_and_Installation/#Sample_Applications').