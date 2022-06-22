import * as vscode from 'vscode';

function uninstallExtension(context: vscode.ExtensionContext) {
    const extName = context.extension.packageJSON['name'];
    try {
        vscode.workspace.getConfiguration(extName)['uninstall'].map((each: string) => {
            if (vscode.extensions.getExtension(each) !== undefined) {
                vscode.commands.executeCommand("workbench.extensions.uninstallExtension", each);
            }
        });
    } catch (e) {
        console.error(e);
    }
}

export function activate(context: vscode.ExtensionContext) {
    uninstallExtension(context);
	vscode.extensions.onDidChange(() => {uninstallExtension(context);});
    vscode.workspace.onDidChangeConfiguration(() => {uninstallExtension(context);});
}

export function deactivate() {}
