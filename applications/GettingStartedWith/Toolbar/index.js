$(() => {
    function showMessage(name) {
        DevExpress.ui.notify(
            {
                message: `${name} button has been clicked!`,
                width: 300,
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

    $("#toolbar").dxToolbar({
        width: 500,
        items: [
            {
                location: 'before',
                widget: 'dxButton',
                options: {
                    icon: 'back',
                    onClick() {
                        showMessage('Back');
                    }
                }
            },
            {
                location: 'before',
                template: '<div id="back">Go back</div>'
            },
            {
                location: 'center',
                widget: 'dxTextBox',
                options: {
                    placeholder: 'Search...',
                    showClearButton: true
                }
            },
            {
                location: 'center',
                widget: 'dxButton',
                options: {
                    icon: 'search',
                    onClick() {
                        showMessage('Search');
                    }
                }
            },
            {
                location: 'after',
                widget: 'dxButton',
                locateInMenu: 'auto',
                options: {
                    icon: 'info',
                    text: 'About',
                    onClick() {
                        showMessage('About');
                    }
                }
            },
            {
                location: 'after',
                locateInMenu: 'always',
                template: '<div id="greeting">Hi <b>User</b>!</div>'
            },
            {
                location: 'after',
                widget: 'dxButton',
                locateInMenu: 'always',
                options: {
                    icon: 'user',
                    text: 'Profile',
                    onClick() {
                        showMessage('Profile');
                    }
                }
            },
            {
                location: 'after',
                widget: 'dxButton',
                locateInMenu: 'always',
                options: {
                    icon: 'preferences',
                    text: 'Settings',
                    onClick() {
                        showMessage('Settings');
                    }
                }
            }
        ]
    });
});