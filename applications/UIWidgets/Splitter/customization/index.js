$(() => {
    $("#splitter").dxSplitter({
        separatorSize: 4,
        items: [
            {
                collapsible: false,
            }, {
                splitter: {
                    separatorSize: 4,
                    orientation: 'vertical',
                    items: [
                        {
                            collapsible: false,
                        },
                        {
                            collapsible: false,
                        },
                    ]
                }
            }
        ]
    });
});
