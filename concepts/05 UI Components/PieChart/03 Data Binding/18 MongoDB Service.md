Use the third-party <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">devextreme-query-mongodb</a> extension to query data from MongoDB. This extension implements data processing on a server according to the protocol the PieChart uses. To access the server from the client, configure the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as described in the [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') article or use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method. This method is a part of the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> extension. The following code shows how to use this method.

#include data-binding-examples-mongodb with {
    key: "'ID'"
}

See <a href="https://community.devexpress.com/blogs/oliver/archive/2017/03/24/devextreme-real-world-patterns.aspx" target="_blank">this series of blog posts</a> for more information on using DevExtreme UI components in applications with MongoDB.
