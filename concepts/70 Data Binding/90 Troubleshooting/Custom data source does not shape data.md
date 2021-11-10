**Issue**: You configured a DataSource that contains an underlying CustomStore. When you try to sort, filter, group, or otherwise shape data in the UI or programmatically, the operations do not apply.

**Solution**:       
The troubleshooting process depends on whether you want to shape data on the server or on the client.

With server-side data shaping, the communication between the CustomStore and the server is organized as follows:

1. The CustomStore sends data processing settings to the server.
1. The server applies these settings to data and returns the processed dataset (you should write the server-side code for this).

To resolve the issue in question, ensure that both steps are performed correctly. Check that the CustomStore's **load** function sends data processing settings to the server as shown in the following help topic: [Server-Side Data Processing](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/#Load_Data/Server-Side_Data_Processing). Check that your server-side code applies the settings and returns the processed dataset.

If your server is not configured to shape data, you can shape it on the client. For this, enable the raw load mode in the CustomStore as described in the following help topic: [Client-Side Data Processing](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/#Load_Data/Client-Side_Data_Processing). Note that in this mode, the DataSource loads the entire dataset to the client. As this may decrease performance, we do not recommend that you use the raw load mode with large datasets.
