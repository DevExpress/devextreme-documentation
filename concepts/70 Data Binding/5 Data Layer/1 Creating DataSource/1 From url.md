If you pass a string to the DataSource constructor, the DataSource will access the data returned by the AJAX request to the URL specified by this string.

    <!--JavaScript-->var dataSource = new DevExpress.data.DataSource("http://www.example.com/dataservices/jsondata");

You may also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax" target="_blank">jQuery.ajax()</a>.

    <!--JavaScript-->var dataSource = new DevExpress.data.DataSource("http://www.example.com/dataservices/jsonpdata?callback=?");

#####See Also#####
- [Load Data in Raw Mode](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode)