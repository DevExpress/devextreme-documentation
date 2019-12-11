Scaffolding helps you automate implementing a controller that follows the [guidelines](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding/07%20ASP.NET%20MVC%20and%20Web%20API%20Controllers/00%20ASP.NET%20MVC%20and%20Web%20API%20Controllers.md '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/#ASPNET_MVC_and_Web_API_Controllers') and is compatible with DevExtreme controls.

The scaffolded API controller contains REST actions that perform CRUD operations on entities from the selected data context. Follow the instructions below to scaffold such a controller:

1. In **Solution Explorer**, right-click the Controllers folder. On the invoked menu, point to **Add** and then click **Controller...** or **New Scaffolded Item...**.

    ![DevExtreme ASP.NET MVC Controls - Add New Scaffolded Item in Context Menu](/images/Common/MvcWrappers/scaffolding_new-item.png)

2. In the **Add Scaffold** window, choose **DevExtreme Web API Controller with actions, using Entity Framework** for an ASP.NET MVC 5 app or **DevExtreme API Controller with actions, using Entity Framework** for an ASP.NET Core MVC app and click **Add**.

    ![DevExtreme ASP.NET MVC Controls - Add Scaffold Window](/images/Common/MvcWrappers/scaffolding_add-scaffold-window.png)

3. In the **Add Controller** window, select the data context and model for which to generate the controller, enter the controller's name, and click **Add**.

    ![DevExtreme ASP.NET MVC Controls - Add Controller Window](/images/Common/MvcWrappers/scaffolding_add-controller-window.png)

    [note] If your project does not contain a data context, generate it by following the [Entity Framework Code First to an Existing Database](https://msdn.microsoft.com/library/jj200620(v=vs.113).aspx) walkthrough for Entity Framework or the [Getting Started with EF Core on ASP.NET Core with an Existing Database](https://docs.microsoft.com/ef/core/get-started/aspnetcore/existing-db) walkthrough for Entity Framework Core.

Finally, scaffold a DevExtreme control that works with the controller.
