**Multi-Channel Application** is a project template for building an HTML/JS application based on the [DevExtreme SPA Framework](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework) and [DevExtreme widgets](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/UI_Widgets_Library). This project template is more helpful than the [Basic Application](/concepts/50%20VS%20Integration/0%20Project%20Templates/1%20Basic%20Application.md '/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application') project template in the following cases.

- **Creating a Multi-Channel Solution**  
    When you need to build different applications for desktop, iOS, Android, WindowsPhone8 and Windows8 using a shared code.

- **Creating an OData Bound Solution**  
    No matter which platforms you are going to support, the application will be bound to an OData service.

<a href="https://www.youtube.com/watch?v=Gxe6AXKDaso&index=4&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

When you select the **Multi-Channel Application** template in the **New Project** dialog, the DevExtreme Project Wizard runs. Using this wizard, you can create both a multi-channel solution and generate views for the entities from the specified OData service.

On the first page of the DevExtreme Project Wizard, choose the "channels" to be supported by the application by checking corresponding items.

![DevExtreme Project Wizard First Page](/images/DevExtreme/DevExtreme_ProjectWizard_1.png)

In the image above, the **Web** and **Mobile** "channels" are chosen. The **Win** items are disabled when you don't work on Windows8 or higher. The **WinPhone** item is disabled when you don't work on Windows8 or higher and don't have the *Windows Phone 8.0 Developer Tools* SDK installed.

[note]If you cannot create the WinPhone project because the required environment is not available, use the Mobile project template to get an application for WinPhone. Just develop the application using the corresponding styles and layouts, and then pack it for the WinPhone platform. For details, refer to the [Package for WinPhone](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/33%20Build%20Package%20for%20WinPhone.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_WinPhone') topic.

The next **Choose Layout** step in the wizard allows you to choose the [navigation layout](/Documentation/17_1/Guide/SPA_Framework/Built-in_Layouts/#Built-in_Layouts) to be used in the created applications by default.

![DevExtreme Project Wizard First Page](/images/DevExtreme/DevExtreme_ProjectWizard_ChooseLayout.png)

After making the choice, click **Next**. You will go to the **Choose Entities To Generate Views** step. If you do not have an OData service for your applications, you can click **Finish** without specifying anything. In this instance a multi-channel solution will be generated with sample views.

If you are going to bind the application to an OData service and generate application views for entities, specify your OData Service by entering its URL or choosing the one that is already [added to the current solution](/concepts/50%20VS%20Integration/0%20Project%20Templates/2%20WCF%20OData%20Service.md '/Documentation/Guide/VS_Integration/Project_Templates/#WCF_OData_Service') (if you add a DevExtreme project to a solution). Click **Discover**. A list of entities exposed by your service will be displayed. Check the entities for which you want to generate views. 

![DevExtreme Project Wizard Third Page](/images/DevExtreme/DevExtreme_ProjectWizard_3.png)

Press **Finish**.

The following projects are created for the corresponding "channels" selected in the wizard.

<img style="margin:0px auto;display:block" src="Content/images/doc/17_1/DevExtreme/MultiChannelAppStructure.png" alt="DevExtreme Project Structure" usemap="#appSructure" />
    
<map name="appSructure">
    <area shape="rect" coords="308,91,477,32" href="/Documentation/17_1/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application/Shared_Project" title="Shared Project" alt="Shared Project" />
    <area shape="rect" coords="128,197,237,139" href="/Documentation/17_1/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application/Desktop_Project" title="Desktop Project" alt="Desktop Project" />
    <area shape="rect" coords="268,197,377,139" href="/Documentation/17_1/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application/Mobile_Project" title="Mobile Project" alt="Mobile Project" />
    <area shape="rect" coords="408,197,517,139" href="/Documentation/17_1/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application/WinPhone_Project" title="Windows Phone 8 Project" alt="Windows Phone 8 Project" />
    <area shape="rect" coords="548,197,657,139" href="/Documentation/17_1/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application/Win_Project" title="Windows8 Project" alt="Windows8 Project" />
    <area shape="rect" coords="418,409,499,363" href="/Documentation/17_1/Guide/VS_Integration/Packaging_Tools#Prepare_Zip_for_PhoneGap_Build" title="Zip for PhoneGap Build" alt="Zip for PhoneGap Build" />
    <area shape="rect" coords="324,409,405,363" href="/Documentation/17_1/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_Android" title="Package for Android" alt="Package for Android" />            
    <area shape="rect" coords="232,409,312,363" href="/Documentation/17_1/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_iOS" title="Package for iOS" alt="Package for iOS" />
    <area shape="rect" coords="138,409,218,363" href="/Documentation/17_1/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_WinPhone" title="Package for Windows Phone8" alt="Package for Windows Phone 8" />
</map>

These projects have the structure of a [basic project template](/concepts/50%20VS%20Integration/0%20Project%20Templates/1%20Basic%20Application.md '/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application'). If you specified an OData service to be used as a data source, views will be generated for the entities. View **Models** will be located in the **db** folder of the [Shared](/concepts/50%20VS%20Integration/0%20Project%20Templates/15%20Multi-Channel%20Application/10%20Shared%20Project.md '/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application/Shared_Project') project. **Views** and **ViewModels** are the *.dxView* and JavaScript files that will be added to the **Views** folder of the generated projects. The *.dxView* file is the HTML file that can be opened using the [View Designer](/concepts/50%20VS%20Integration/1%20Design-Time%20Features '/Documentation/Guide/VS_Integration/Design-Time_Features/').
