$(() => {
    const employee = {
        ID: 1,
        FirstName: "John",
        LastName: "Heart",
        Position: "CEO",
        BirthDate: "1964/03/16",
        HireDate: "1995/01/15",
        Notes:
            "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
        Address: "351 S Hill St., Los Angeles, CA",
        Phone: "360-684-1334",
        Email: "jheart@dx-email.com"
    };
    const $output = $("<div>Output:</div>");
    $("#splitter").dxSplitter({
        width: 500,
        height: 400,
        separatorSize: 5,
        items: [
            {
                size: "285px",
                template() {
                    const $form = $("<div id='form'/>");
                    $form.dxForm({
                        formData: employee,
                        onFieldDataChanged(e) {
                            $output.append(`<div>${e.value}</div>`);
                        }
                    });
                    return $form;
                }
            },
            {
                splitter: {
                    separatorSize: 5,
                    orientation: "vertical",
                    items: [
                        {
                            size: "80%",
                            template() {
                                return $output;
                            }
                        },
                        {
                            collapsible: true,
                            minSize: "40px",
                            template() {
                                const $button = $("<div/>");
                                $button.dxButton({
                                    text: "Clear all entries",
                                    onClick() {
                                        $("#form").dxForm("reset");
                                        $output.empty();
                                        $output.append("<div>Output:</div>");
                                    }
                                });
                                return $button;
                            }
                        },
                        {
                            collapsed: true,
                            collapsible: true,
                            text: "All rights are reserved ©",
                            maxSize: "30px"
                        }
                    ]
                }
            }
        ]
    });
});
