Linking a DevExtreme project to another project means that files from the DevExtreme project are linked to the other project in the same manner as if you added these files as links one by another using the Visual Studio **Add | Existing item...** dialog. You may need to link DevExtreme projects to other projects during deployment by yourself.

To link an application built using a DevExtreme project template to another project, use the **Link to...** item in a context menu of the DevExtreme project. This menu item appears in the context menu of a DevExtreme project when there is a non-DevExtreme project in the current solution.

As an example, you can develop an application using one of the DevExtreme Project Templates, and then add To deploy the application as a UWP application (choose any of the **JavaScript | Windows | Universal** project templates in the **Add Project** dialog). Follow these steps to link the DevExtreme project to the UWP project using the **Link to...** dialog.

![UWP project template](/images/DevExtreme/LinkingProjectsUWPProject.png)

- Create a new folder within the added project (e.g. "www").

    ![Create www folder](/images/DevExtreme/LinkingProjectsWwwFolder.png)

- Right-click the DevExtreme project and choose **Link to...** in the invoked context menu.

    !["Link to" menu item](/images/DevExtreme/LinkingProjectsLinkToMenuItem.png)

- Within the opened dialog, choose the created folder ("www") within the newly added UWP project. Links to all the files of the DevExtreme project and the files of the projects that are referenced in the linked project will be added to the this folder of the project.

    !["Link to" dialog](/images/DevExtreme/LinkingProjectsLinkToDialog.png)

    If you are going to use win js API within your application, add the appropriate links within the index.html file located in the www folder. Additionally, you may need to reference the main.js file located in the js folder of the UWP project. View comments in this file for details.

    ![main.js](/images/DevExtreme/LinkingProjectsMainJs.png)