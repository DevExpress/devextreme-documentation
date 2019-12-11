If the set of predefined dictionaries does not include a dictionary for a locale you need, you can create a dictionary file based on existing dictionary data stored in the **[Sources]/Lib/js/localization** folder within the DevExtreme zip archive or in the folder where you have installed DevExtreme.

Create a new file based on **dx.messages.en.js**, replacing the "en" locale identifier in its name with the identifier of the required locale. For example, "es" (**dx.messages.es.js**). Open the newly created file for editing and replace the "en" locale identifier in the file content as well.

        {
            es: {
                "Yes": "Yes",
                "No": "No",
                . . .
            }
        }

- Provide an object containing the corresponding translation for keys.

        {
            es: {
                "Yes": "Si",
                "No": "No",
                . . .
            }
        }

After the *.js* file is updated, you can link it to your application and use in the same way as other dictionary files.

    <!--HTML-->
    <script type="text/javascript" src="js/dx.web.js"></script>
    <script type="text/javascript" src="js/localization/dx.messages.es.js"></script>

In the modular approach, you can define a dictionary in a json file created on the base of the **en.json** located in the **npm_modules/devextreme/localization/messages** folder. Rename it replacing the "en" identifier with the required locale identifier ("es.json"), replace the identifier within the created file and provide an object containing the translation for keys as described above.