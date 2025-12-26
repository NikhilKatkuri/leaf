import { Menu } from '@tauri-apps/api/menu';

const menu = await Menu.new({
    items: [
        {
            id: 'quit',
            text: 'Quit',
            action: () => {
                console.log('quit pressed');
            },
        },
        {
            id: 'check_item',
            text: 'Check Item',
            checked: true,
        },
        {
            type: 'Separator',
        },
        {
            id: 'disabled_item',
            text: 'Disabled Item',
            enabled: false,
        },
        {
            id: 'status',
            text: 'Status: Processing...',
        },
    ],
});

menu.setAsAppMenu().then(async (res) => {
    console.log('menu set success', res);

    // Update individual menu item text
    const statusItem = await menu.get('status');
    if (statusItem) {
        await statusItem.setText('Status: Ready');
    }
});
