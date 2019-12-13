One common pitfall that occurs during communication with remote web services from JavaScript is the <a href="http://www.w3.org/Security/wiki/Same_Origin_Policy" target="_blank">Same-Origin Policy</a>. It is a security restriction enforced by web browsers that do not directly allow HTTP communication between different domains (not even between endpoints located at two different ports of the same website).

To consume a web service from JavaScript, the web service has to support the <a href="http://www.w3.org/TR/cors/" target="_blank">Cross-Origin Resource Sharing</a> feature, also known as **CORS**.

For read-only access, instead of CORS, a web service may support the JSONP (JSON with padding) technique. Built-in DevExtreme, Data Store classes support JSONP. For example, to connect to an OData service with JSONP support, use the **jsonp** configuration option.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "http://www.example.com",
        jsonp: true
    });