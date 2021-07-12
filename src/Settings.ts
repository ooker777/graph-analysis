import { App, PluginSettingTab, Setting } from "obsidian";
import type GraphAnalysisPlugin from "src/main";

export class SampleSettingTab extends PluginSettingTab {
    plugin: GraphAnalysisPlugin;

    constructor(app: App, plugin: GraphAnalysisPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const plugin = this.plugin
        let { containerEl } = this;

        containerEl.empty();

        containerEl.createEl("h3", { text: "Debugging Options" });

        new Setting(containerEl)
            .setName("Debug Mode")
            .setDesc(
                "Toggling this on will enable a few console logs to appear when using the graph analysis view."
            )
            .addToggle((toggle) =>
                toggle
                    .setValue(plugin.settings.debugMode)
                    .onChange(async (value) => {
                        plugin.settings.debugMode = value;
                        await plugin.saveSettings();
                    })
            );

        new Setting(containerEl)
            .setName("Super Debug Mode")
            .setDesc("Toggling this on will enable ALOT of console logs")
            .addToggle((toggle) =>
                toggle
                    .setValue(plugin.settings.superDebugMode)
                    .onChange(async (value) => {
                        plugin.settings.superDebugMode = value;
                        await plugin.saveSettings();
                    })
            );
    }
}