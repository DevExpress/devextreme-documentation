Follow these steps to add a view to your project.

- Right-click the **Views** folder in a DevExtreme project and choose **Add** | **New Item...**. The **Add New Item** dialog will be invoked.

	![Add New Item](/images/DevExtreme/AddNewItem.png)

- Select the **View** template, give it a name and press **Add**. The **.dxView**, **.js** and **.css** files will be added to the project and links to them will be added in the application page (see the *index.html* file). The *.dxView* file is an HTML file that can be opened using a [Designer](/concepts/50%20VS%20Integration/1%20Design-Time%20Features '/Documentation/Guide/VS_Integration/Design-Time_Features/').

	If you use an OData service in your project, the **View Creation Wizard** will run after you press **Add** in the **Add New Item** dialog.

	![View Creation Wizard](/images/DevExtreme/ViewCreationWizard.png)

	As you can see, you can choose to create an empty view or generate a view for an entity from your OData service. In the latter case, the wizard will help you choose an entity and view type.

	![View Creation Wizard](/images/DevExtreme/ViewCreationWizard2.png)

- Make the newly added view specific to a certain device(s) (optionally). To learn how to do this, refer to the [Device Specific Markup](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Device_Specific_Markup) article.

[note]The JavaScript functions of the Views created by the wizard are generated within the namespace specified by the project's **Root namespace** option. To use a custom namespace, follow the instructions given in the [Set a Custom Namespace](/concepts/50%20VS%20Integration/0%20Project%20Templates/35%20Set%20a%20Custom%20Namespace.md '/Documentation/Guide/VS_Integration/Project_Templates/#Set_a_Custom_Namespace') topic.
