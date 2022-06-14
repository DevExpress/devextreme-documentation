$(() => {
    function showMessage(id) {
        DevExpress.ui.notify(
            {
                message: `Tab ${id} has been clicked!`,
                width: 250,
                position: {
                    my: 'bottom',
                    at: 'bottom',
                    of: '#container'
                }
            },
            'info',
            500
        );
    };

    $("#tabs").dxTabs({
        width: 300,
        items: [
            {
                badge: 'First'
            },
            {
                text: 'Second',
                disabled: true                
            },
            {
                icon: 'favorites',
                text: 'Third'                
            },
            {
                template: '<div id="fourth">Fourth</div>'
            }
        ],
        selectedIndex: 2,
        onItemClick(e) {
            showMessage(e.itemIndex + 1);
        },
        selectionMode: 'multiple'
    });

});