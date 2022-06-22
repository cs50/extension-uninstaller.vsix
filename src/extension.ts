import * as vscode from 'vscode';

function uninstallExtension() {
    const denyList = ['github.copilot', 'github.copilot-nightly', 'TabNine.tabnine-vscode'];
    try {
        for (let i = 0; i < denyList.length; i++) {
            vscode.commands.executeCommand("workbench.extensions.uninstallExtension", denyList[i]);
        }
    } catch (error) {
        console.log(error);
    }
}

export function activate(context: vscode.ExtensionContext) {
    uninstallExtension();
	vscode.extensions.onDidChange(() => {uninstallExtension();});
}

export function deactivate() {}
