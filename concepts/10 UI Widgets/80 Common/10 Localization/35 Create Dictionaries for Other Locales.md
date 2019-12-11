If the set of predefined dictionaries does not include a dictionary for a locale you need, do the following.

- Create a single-page application containing the following code that will create a dictionary file based on an existing dictionary data.

        <!--HTML-->
        <!DOCTYPE html>
        <html>
            <head>
                <script src="libs/js/jquery-2.2.3.js"></script>
                <script src="libs/js/dx.all.debug.js"></script>
                <!--<script src="libs/js/dx.web.debug.js"></script>-->
                <!--<script src="libs/js/dx.mobile.debug.js"></script>-->
                <script> 
                $(function() {
                    var data = { en: DevExpress.localization.message.getDictionary() },
                        dataString = encodeURIComponent(JSON.stringify(data, null, "\t"));
                    $("a").attr("href", "data:text/plain;charset=utf-8," + dataString);
                });
                </script>
            </head>
            <body>
            <a download="dx.all.en.json">Download localization messages JSON</a>
            <!--<a download="dx.web.en.json">Download localization messages JSON</a>-->
            <!--<a download="dx.mobile.en.json">Download localization messages JSON</a>-->
            </body>
        </html>

    This application will create the *dx.all.en.json* (*dx.web.en.json*, *dx.mobile.en.json*) file based on dictionary data loaded from the *dx.all.en.js* (*dx.web.en.js*, *dx.mobile.en.js*) library.
    The dictionary data can be obtained using the following method.

        <!--JavaScript-->
        DevExpress.localization.message.getDictionary();

- Open the application and click the "Download localization messages JSON" link, which will invoke the "Save As" dialog. Specify the file name (*dx.mobile.XX.json*, *dx.web.XX.json* or *dx.all.XX.json*) replacing XX with the identifier of the required locale. For example, *dx.mobile.es.json*. Save the file.

    [note]The suggested names for your dictionary files are not important. You can give them other names if required.

- Open the created file for editing and replace the "en" identifier with the identifier of the required locale. For example "es".

        {
            "es": {
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

After the *.json* file is updated, you can load its data using an AJAX request.

    <!--JavaScript-->
    $.when(
        $.get("dx.all.es.json")
    ).then(function(data){
        Globalize.loadMessages(data);
    });