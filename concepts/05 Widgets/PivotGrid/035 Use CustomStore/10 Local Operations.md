By default, the widget performs all the operations locally. In the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function of the pivot grid data source, you can just define from what web service return data.

    <!--JavaScript-->
    var pivotGridDataSource = {
        load: function(){
            return  $.getJSON('http://mydomain.com/MyDataService');
        }
    }

In this case, all operations (filtering, grouping and summary calculation) are performed on the client side.

[note]Using local operations may affect grid performance if the data set is large enough (the number of records is about one million).
