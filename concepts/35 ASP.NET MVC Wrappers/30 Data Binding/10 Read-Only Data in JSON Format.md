A server-side wrapper can access [JSON](https://www.json.org) data returned from a resource by an AJAX request. For this purpose, pass the URL of the resource to the `DataSource()` method. This URL may specify an absolute or a relative path to the resource.

    @(Html.DevExtreme().SelectBox()
        .DataSource("http://www.example.com/dataservices/jsondata")
    )

<!--------------------->

    @(Html.DevExtreme().SelectBox()
        .DataSource(@Url.Content("~/dataservices/jsondata"))
    )
    
Also, you can use a JSONP callback parameter supported by [jQuery.ajax()](https://api.jquery.com/jQuery.ajax).

    @(Html.DevExtreme().SelectBox()
        .DataSource("http://www.example.com/dataservices/jsonpdata?callback=?")
    )