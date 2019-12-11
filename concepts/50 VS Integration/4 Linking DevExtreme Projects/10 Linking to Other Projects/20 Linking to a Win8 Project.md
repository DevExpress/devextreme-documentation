If you develop a DevExtreme application using one of the DevExtreme project templates and then add a Win8 project to the solution to turn your application into a Win8 application, you need to link the DevExtreme project to the added Win8 project. This process is common for scenarios where you need to deploy a DevExtreme project to an external project. Details on this process are described in the [Linking to Other Projects](/concepts/50%20VS%20Integration/4%20Linking%20DevExtreme%20Projects/10%20Linking%20to%20Other%20Projects '/Documentation/Guide/VS_Integration/Linking_DevExtreme_Projects/#Linking_to_Other_Projects') topic. 

When deploying a DevExtreme project to a Win8 project, you have to perform several additional steps after linking the projects.

1. The main application page in a Win8 project must include references to WinJS libraries. Since you cannot modify the linked *index.html* file and add the required references to it, do the following.

- Open the *default.html* file. The important references to WinJS libraries are located under the following comment:  

			<!--HTML--><!-- WinJS references -->

		Copy this block of references to a temporary file.

- Replace the *default.html* file content with content from the linked *index.html* file.
- Paste the block of important references to WinJS libraries back to the *default.html* file, but place it anywhere above references to DevExtreme libraries.
- Remove the linked *index.html* file from the Win8 project.

2. In the *default.html* file, find a block of **"dx-theme"** links to [DevExtreme themes](/concepts/60%20Themes/10%20Predefined%20Themes/0%20Themes%20in%20DevExtreme%20Apps.md '/Documentation/Guide/Themes/Predefined_Themes/#Themes_in_DevExtreme_Apps'). Since your application will use a single *dx.win8.black.css*/*dx.win8.white.css* theme only, a classic HTML link must be used instead.

- Remove all elements with the **rel="dx-theme"** tag from the *default.html* file.
- Add a standard link to the *dx.win8.black.css*/*dx.win8.white.css* theme instead. This theme is the only one that is applicable to Win8 applications.

3. If you build an application that resembles a native Win8 application, root application views should have the [Navbar](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/1%20Navbar%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Navbar_Layout') layout and other views - the [Split](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/3%20Split%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Split_Layout') layout. For this purpose, DevExtreme supplies a ready-to-use ["split" layout set](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/7%20Ready-to-Use%20Layout%20Sets.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Ready-to-Use_Layout_Sets'). Check the following.

- Ensure that you apply the "split" layout set to the [HtmlApplciation](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object (see the *index.js* file).

- Make sure that the **Empty**, **Navbar** and **Split** layouts used in the "split" layout set are contained in the linked **layouts** folder within the Win8 project.

		If the **Empty**, **Navbar** and **Split** folders are absent, replace the linked **layouts** folder with a manually created one. Add the mentioned folders to the **layouts** folder (you can find these folders within your [DevExtreme package](/concepts/Common/07%20DevExtreme%20Packages '/Documentation/Guide/Common/DevExtreme_Packages/')).

- Check that the linked/added layouts are referenced in the *default.html* file.