Use the **Project Converter** tool for the Visual Studio projects that were created using [DevExtreme Project Templates](/concepts/50%20VS%20Integration/0%20Project%20Templates '/Documentation/Guide/VS_Integration/Project_Templates/').

There are two ways of accessing the Project Converter.

- Open your solution/project in Visual Studio. Right click the solution/project to display the context menu and choose **Upgrade DevExtreme Solution to the Latest Version...** (or equivalently **Upgrade DevExtreme Project to the Latest Version...**).

    ![Invoke Project Converter](/images/DevExtreme/ProjectConverterFromMenu.png)

- Run the **ProjectConverter.exe** program from the folder where DevExtreme is installed. By default, it is located in the "...\Program Files (x86)\DevExpress 17.1\DevExtreme\Tools\DevExtreme HTML JS\" folder.

Specify the path to the project(s) to be upgraded in the **Project folder** text box.

![Project Converter](/images/DevExtreme/ProjectConverter.png)

Review the advanced options. Check **Process Subdirectories** if you also want to upgrade files in any subdirectories. Check **Create Backup Files** to create copies of the original files that are about to be upgraded (Project Converter will add a .bak extension to the file names of the copies), so that you can recreate the original project should you encounter any problems.

[note]We recommend that you check **Create Backup Files** if you have **customized layouts or stylesheets** in your projects. By doing so, you will be able to extract your customized layouts or stylesheets from those file copies to merge with the new versions.

Finally, click **Upgrade** and the **Project Converter** will upgrade your project(s) to the new version.

 