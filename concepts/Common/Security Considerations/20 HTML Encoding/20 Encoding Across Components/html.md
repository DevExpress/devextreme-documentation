Items in collection widgets ([List](), [SelectBox](), [Toolbar]()) can apply appearance based on data source fields (see the [Default Templates]() article). [html]() is one of such fields. It specifies item markup. Its values are not encoded. Ensure they does not contain malicious code or use the [text]() field as an alternative. Unlike **html** values, **text** values are encoded.

The following example illustrates how the **html** field can lead to a potential vulnerability: <a href="https://codepen.io/romantsukanov/pen/gOMvydM?editors=1010" target="_blank">HTML Encoding in List</a>. In this example, the **text** and **html** fields have identical values that contain unsafe HTML, but **html** lines are commented out:


    <!-- tab: JavaScript -->
    var products = [{
        "id": 1,
        "text": "<img src=1 onerror=alert('XSS') \/>",
        // "html": "<img src=1 onerror=alert('XSS') \/>"
    }, {
        "ID": 2,
        "text": "<script>alert('XSS')<\/script>",
        // "html": "<script>alert('XSS')<\/script>"
    }, {
        "id": 3,
        "text": "Product 1"
        // "html": "Product 1"
    }];

When **html** is commented out, **text** applies. You can see that its values are interpreted as text and simply displayed:

%IMAGE%

Uncomment the **html** lines, and you will see an alert pop-up window. This is because unsafe HTML was interpreted as script and executed:

%IMAGE%