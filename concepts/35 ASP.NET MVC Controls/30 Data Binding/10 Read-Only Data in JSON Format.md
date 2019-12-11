A server-side control can access [JSON](https://www.json.org) data returned from a resource by an AJAX request. For this purpose, the lambda parameter of the `DataSource()` method exposes the `StaticJson()` method. It opens a chain of methods configuring access to JSON data.

    <!--Razor C#-->
    @(Html.DevExtreme().SelectBox()
        .DataSource(ds => ds
            .StaticJson()
            .Url("http://www.example.com/dataservices/jsondata")
            .Key("ID")
            .CacheAllData(true) // loads all data at once and saves it in cache; true by default
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().SelectBox() _
        .DataSource(Function(ds)
            Return ds.StaticJson() _
                   .Url("http://www.example.com/dataservices/jsondata") _
                   .Key("ID") _
                   .CacheAllData(True) ' loads all data at once and saves it in cache; true by default
        End Function)
    )

Besides accepting absolute URLs, which is shown in the previous code, the `Url()` method can accept virtual paths. 

    <!--Razor C#-->
    @(Html.DevExtreme().SelectBox()
        .DataSource(ds => ds
            .StaticJson()
            .Url(@Url.Content("~/dataservices/jsondata"))
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().SelectBox() _
        .DataSource(Function(ds)
            Return ds.StaticJson() _
                   .Url(Url.Content("~/dataservices/jsondata"))
        End Function)
    )
   
You can also use a JSONP callback parameter supported by [jQuery.ajax()](https://api.jquery.com/jQuery.ajax).

    <!--Razor C#-->
    @(Html.DevExtreme().SelectBox()
        .DataSource(ds => ds
            .StaticJson()
            .Url("http://www.example.com/dataservices/jsonpdata?callback=?")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().SelectBox() _
        .DataSource(Function(ds)
            Return ds.StaticJson() _
                   .Url("http://www.example.com/dataservices/jsonpdata?callback=?")
        End Function)
    )

In addition, the `DataSource()` method has several overloads for configuring access to JSON data more briefly. Using them, you can specify the data's URL...

    <!--Razor C#-->
    @(Html.DevExtreme().SelectBox()
        .DataSource("http://www.example.com/dataservices/jsondata")
    )

    <!--Razor VB-->
    @(Html.DevExtreme().SelectBox() _
        .DataSource("http://www.example.com/dataservices/jsondata")
    )

... or the URL and the key field.

    <!--Razor C#-->
    @(Html.DevExtreme().SelectBox()
        .DataSource("http://www.example.com/dataservices/jsondata", "ID")
    )

    <!--Razor VB-->
    @(Html.DevExtreme().SelectBox() _
        .DataSource("http://www.example.com/dataservices/jsondata", "ID")
    )