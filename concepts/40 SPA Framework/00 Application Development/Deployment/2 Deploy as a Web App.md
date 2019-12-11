Since an application built using the DevExtreme SPA framework is a static web page, you can deploy it as an ordinary web page with the referenced files.

**DevExtreme Mobile**/**DevExtreme Web**

To deploy a DevExtreme project to a web server, copy the project content manually. As an example, the following steps will help you deploy a DevExtreme application to IIS.

- Add the contents of your DevExtreme application project or the output folder of your DevExtreme project to the deployed project folder.

- In the IIS Manager, add a connection to the application that is now contained in the deployed project folder.

- Ensure that the *index.html* file (or other file that serves as the main page in the application such as app.html) is contained in the list of default documents. To do this, select your project in the Connections list and open the Default Document list. Add a file corresponding to your main page to the list, if there is none.

- If you deploy an application created using a [DevExtreme project template](/concepts/50%20VS%20Integration/0%20Project%20Templates '/Documentation/Guide/VS_Integration/Project_Templates/'), there are files with the *.dxview* extension in the project. Add this type to the list of MIME types. For this purpose, select your project in the Connections list and open the MIME Types Page. Right-click the page and choose **Add...**. Specify *.dxView* as the file extension name and *text/html* as the MIME type. Click **OK**.

The application is now ready to be run in a browser by typing the required URL (the one that you specified for your application in the IIS Manager) in the browser's address bar.

**DevExtreme Complete**

DevExtreme comes with the **Link to...** Visual Studio dialog. This dialog adds files from the [DevExtreme project](/concepts/50%20VS%20Integration/0%20Project%20Templates '/Documentation/Guide/VS_Integration/Project_Templates/') to another specified project as links (as if you *added* these files *as links* one by another using the Visual Studio **Add** | **Existing item...** dialog). This allows you to "link" a DevExtreme project to another web project (e.g., an ASP.NET project) once and to deploy the "parent" web project using standard Visual Studio procedures when required. To learn more on how to use the **Link to...** Visual Studio dialog, refer to the [Linking DevExtreme Projects](/concepts/50%20VS%20Integration/4%20Linking%20DevExtreme%20Projects '/Documentation/Guide/VS_Integration/Linking_DevExtreme_Projects/') article.

At the same time, you can deploy a DevExtreme application to a web server by copying project content ("\bin\Debug" or "\bin\Release") manually, as described above, if "linking" to another web project does not suite your needs.

