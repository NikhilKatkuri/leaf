import { getCurrentWindow } from '@tauri-apps/api/window';

class windowControls {
    private window = getCurrentWindow();
    public close() {
        this.window.close();
    }
    public minimize() {
        this.window.minimize();
    }
    public maximize() {
        this.window.toggleMaximize();
    }
    public async toggleFullscreen() {
        const isFullscreen = await this.window.isFullscreen();
        this.window.setFullscreen(!isFullscreen);
    }
}

export default windowControls;
