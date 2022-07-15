import * as vscode from 'vscode';

/**
 * Uninstall extensions by their extension identifiers specified in settings.json.
 *
 * @param context vscode.ExtensionContext
 */
function uninstallExtension(context: vscode.ExtensionContext) {

    // Get the extension name for current context
    const extName = context.extension.packageJSON['name'];
    try {

        // Get the configuration for this extension
        vscode.workspace.getConfiguration(extName)['uninstall'].map((each: string) => {

            // Remove matching extension
            if (vscode.extensions.getExtension(each) !== undefined) {
                vscode.commands.executeCommand('workbench.extensions.uninstallExtension', each);
            }
        });
    } catch (e) {
        console.error(e);
    }
}

export function activate(context: vscode.ExtensionContext) {
    uninstallExtension(context);
	vscode.extensions.onDidChange(() => { uninstallExtension(context); });
    vscode.workspace.onDidChangeConfiguration(() => { uninstallExtension(context); });
}

export function deactivate() {
    // Not used.
}
