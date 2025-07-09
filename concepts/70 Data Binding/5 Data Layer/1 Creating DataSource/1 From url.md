If you pass a string to the DataSource constructor, the DataSource will access the data returned by the AJAX request to the URL specified by this string.

    <!--JavaScript-->const dataSource = new DevExpress.data.DataSource("http://www.example.com/dataservices/jsondata");

You can also use a JSONP callback parameter.

    <!--JavaScript-->const dataSource = new DevExpress.data.DataSource("http://www.example.com/dataservices/jsonpdata?callback=?");

#####See Also#####
- [Load Data in Raw Mode](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode')