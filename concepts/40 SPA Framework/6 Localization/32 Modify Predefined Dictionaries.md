In addition to the application dictionaries that include text/messages used only in a specific application, you can use the predefined dictionaries that come with DevExtreme. They include the captions and messages such as 'Back', 'Cancel', 'Select', 'Loading', 'Search' - these can be added to your app with a DevExtreme widget or layout. The predefined dictionaries are available in the **Lib\js\localization** folder in the DevExtreme zip archive or in the folder where you have installed DevExtreme, which is **C:\Program Files (x86)\DevExpress 16.2\DevExtreme\Sources** by default.

If the set of predefined dictionaries does not include a dictionary for a locale you need, you can create a dictionary file based on an existing dictionary data stored in the **Lib\js\localization** folder. Create a new file based on **dx.messages.en.js**, replacing the "en" locale identifier in it's name with the identifier of the required locale. For example, "es" (**dx.messages.es.js**). Open the newly created file for editing and replace the "en" locale identifier in the file content as well.

        {
            es: {
                "Yes": "Yes",
                "No": "No",
                . . .
            }
        }

- Provide an object containing the corresponding translation for the keys.

        {
            "es": {
                "Yes": "Si",
                "No": "No",
                . . .
            }
        }

After the *.js* file is updated, you can link it to your application and use in the same way as other dictionary files.

    <!--HTML-->
    <script type="text/javascript" src="js/dx.web.js"></script>
    <script type="text/javascript" src="js/localization/dx.messages.es.js"></script>