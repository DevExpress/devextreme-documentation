DevExtreme is supplied with the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') Store type, which is used to interact with OLAP servers using an XMLA standard. If you intended to use OLAP technology for analyzing your data with the **PivotGrid** widget, follow the steps below and you will learn how to configure the Microsoft Analysis Services and connect the **PivotGrid** widget to it. 

[note] If you use another OLAP server that supports an XMLA standard, refer to the documentation for this server and learn how to configure HTTP access to it, then jump to step 6 of the list below.

1.&nbsp;Install Microsoft Analysis Services. For details, refer to the <a href="https://msdn.microsoft.com/en-us/library/ms143764(v=sql.100" target="_blank">How to: Install Analysis Services by Using Setup</a>.aspx) MSDN article.
 
2.&nbsp;Install **SQL Server Data Tools ― Business Intelligence** for your version of Visual Studio (<a href="https://www.microsoft.com/en-us/download/details.aspx?id=36843" target="_blank">Visual Studio 2012 version</a>).
 
3.&nbsp;Create a new project and define a Cube. For details, refer to the <a href="https://msdn.microsoft.com/en-us/library/ms170208.aspx" target="_blank">Multidimensional Modeling</a> MSDN tutorial. If you would like to use sample data instead of your own, refer to the <a href="https://msdn.microsoft.com/en-us/library/hh403424.aspx" target="_blank">Install Sample Data and Projects</a> MSDN article.
 
4.&nbsp;Configure HTTP access to the Analysis Services. For details, refer to the <a href="https://technet.microsoft.com/en-us/library/gg492140.aspx" target="_blank">Configure HTTP Access to Analysis Services on Internet Information Services (IIS) 8.0</a> MSDN article.
 
5.&nbsp;Configure IIS to allow cross-domain access to the OLAP application created in step 4.     
     
[note] IIS configuration for cross-domain authenticated access is not considered in this article. For educational purposes, please use the *Anonymous* authentication type or configure the OLAP server at the same domain with the IIS server.

&emsp;5.1.&nbsp;Add the HTTP Response Headers. In the OLAP application, in the **Home** pane, double-click **HTTP Response Headers**. Add the following custom headers.
     
- *Name*: "Access-Control-Allow-Headers", *Value:* "Content-Type"        
- *Name:* "Access-Control-Allow-Methods", *Value:* "POST"        
- *Name:* "Access-Control-Allow-Origin" , *Value:* *&lt;the host from which you are going to access this server or "\*" for all hosts&gt;*        
<!---->

&emsp;5.2.&nbsp;While configuring HTTP access, you added an "OLAP" script map to the OLAP application (Step 3, items 6-8 of the <a href="https://technet.microsoft.com/en-us/library/gg492140.aspx" target="_blank">Configure HTTP Access to Analysis Services on Internet Information Services (IIS) 8.0</a> MSDN article). To make the cross-domain access work, make sure the "OPTIONSVerbHandler" is at the top of the **Handler Mappings** list. To access the list's order, click **View Ordered List...** from the **Actions** menu. If the "OPTIONSVerbHandler" is not at the top of the list, select the "OPTIONSVerbHandler" and use the **Move Up** command from the Actions menu to move it to the top. Also make sure the **OLAP** handler is located above other *.dll handlers (even the disabled ones). 

6.&nbsp;Configure the **PivotGrid**.**dataSource**.[store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/') object for using your OLAP server.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/OLAPDataSource/"
}
