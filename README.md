# Extension Uninstaller

Uninstall extensions by their extension identifiers defined in `settings.json`:

```json
{
    "extension-uninstaller.uninstall": [
        "publisherId.extensionId",
        "github.octocat"
    ]
}
```

Extensions will not be uninstalled if their extension identifiers are specified in `extension-uninstaller.skip`:

```json
{
    "extension-uninstaller.skip": [
        "publisherId.extensionId",
        "github.octocat"
    ]
}
```
