# Vscode + window Terminal集成git-Bash终端


### 1.Vscode集成git-Bash终端

使用`ctrl + shift + p`打开设置,再点开右上角的`settings.json`,填入下列配置
<center>{{< image src="/images/img/20211214154842.png" caption="">}}</center>

```sh
"terminal.integrated.profiles.windows": {
    "Git-Bash": {
      "path": "F:\\Git\\bin\\bash.exe"
    }
 }
```

设置默认终端可以使用下列语句：

```sh
"terminal.integrated.defaultProfile.windows": "Git-Bash"
```

### 2.windows Terminal集成git-Bash终端
在`settings.json`中的`profile/list`中添加下列内容
```
{
  "backgroundImage": null,
  "closeOnExit": "graceful",
  "commandline": "F:\\Git\\bin\\bash.exe --login", // 修改bash.exe所在的路径
  "font": 
   {
       "face": "Fira Code Retina",
       "size": 15
   },
  "guid": "{f323ab3c-9641-4904-a3a6-dc4e4992b6ae}",
  "hidden": false,
  "historySize": 9001,
  "icon": "D:\\Microsoft VS Code\\resources\\app\\extensions\\git\\resources\\icons\\git.png", // 注意修改为自己电脑上安装的vscode路径
  "name": "Git Bash",
  "startingDirectory": "D:\\desktop" # 自定义启动时所在路径
}
```

我的`settings.json`的所有内容:
```
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "actions": 
    [
        {
            "command": 
            {
                "action": "copy",
                "singleLine": false
            },
            "keys": "ctrl+c"
        },
        {
            "command": "paste",
            "keys": "ctrl+v"
        },
        {
            "command": "find",
            "keys": "ctrl+shift+f"
        },
        {
            "command": 
            {
                "action": "splitPane",
                "split": "auto",
                "splitMode": "duplicate"
            },
            "keys": "alt+shift+d"
        }
    ],
    "copyFormatting": "none",
    "copyOnSelect": false,
    "defaultProfile": "{f323ab3c-9641-4904-a3a6-dc4e4992b6ae}",
    "initialCols": 100,
    "initialRows": 25,
    "launchMode": "default",
    "profiles": 
    {
        "defaults": {},
        "list": 
        [
            {
                "colorScheme": "Cobalt Neon",
                "commandline": "powershell.exe",
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "hidden": false,
                "name": "Windows PowerShell"
            },
            {
                "colorScheme": "Whimsy",
                "commandline": "cmd.exe",
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "hidden": false,
                "name": "Command Prompt"
            },
            {
                "colorScheme": "Cobalt Neon",
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure"
            },
            {
                "bellStyle": "none",
                "colorScheme": "Campbell",
                "experimental.retroTerminalEffect": false,
                "font": 
                {
                    "face": "Cascadia Code PL",
                    "size": 13
                },
                "guid": "{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}",
                "hidden": false,
                "intenseTextStyle": "bright",
                "name": "Ubuntu-20.04",
                "padding": "2",
                "source": "Windows.Terminal.Wsl",
                "startingDirectory": "//wsl$/Ubuntu-20.04/home/zhangfp"
            },
            {
                "backgroundImage": null,
                "closeOnExit": "graceful",
                "commandline": "F:\\Git\\bin\\bash.exe --login", // 修改
                "font": 
                {
                    "face": "Fira Code Retina",
                    "size": 15
                },
                "guid": "{f323ab3c-9641-4904-a3a6-dc4e4992b6ae}",
                "hidden": false,
                "historySize": 9001,
                "icon": "D:\\Microsoft VS Code\\resources\\app\\extensions\\git\\resources\\icons\\git.png",
                "name": "Git Bash",
                "startingDirectory": "D:\\desktop"
            }
        ]
    },
    "schemes": 
    [
        {
            "background": "#0C0C0C",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#012456",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell Powershell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#142838",
            "black": "#142631",
            "blue": "#8FF586",
            "brightBlack": "#FFF688",
            "brightBlue": "#3C7DD2",
            "brightCyan": "#6CBC67",
            "brightGreen": "#8FF586",
            "brightPurple": "#8230A7",
            "brightRed": "#D4312E",
            "brightWhite": "#8FF586",
            "brightYellow": "#E9F06D",
            "cursorColor": "#FFFFFF",
            "cyan": "#8FF586",
            "foreground": "#8FF586",
            "green": "#3BA5FF",
            "name": "Cobalt Neon",
            "purple": "#781AA0",
            "red": "#FF2320",
            "selectionBackground": "#FFFFFF",
            "white": "#BA46B2",
            "yellow": "#E9E75C"
        },
        {
            "background": "#282C34",
            "black": "#282C34",
            "blue": "#61AFEF",
            "brightBlack": "#5A6374",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B6C2",
            "brightGreen": "#98C379",
            "brightPurple": "#C678DD",
            "brightRed": "#E06C75",
            "brightWhite": "#DCDFE4",
            "brightYellow": "#E5C07B",
            "cursorColor": "#FFFFFF",
            "cyan": "#56B6C2",
            "foreground": "#DCDFE4",
            "green": "#98C379",
            "name": "One Half Dark",
            "purple": "#C678DD",
            "red": "#E06C75",
            "selectionBackground": "#FFFFFF",
            "white": "#DCDFE4",
            "yellow": "#E5C07B"
        },
        {
            "background": "#FAFAFA",
            "black": "#383A42",
            "blue": "#0184BC",
            "brightBlack": "#4F525D",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B5C1",
            "brightGreen": "#98C379",
            "brightPurple": "#C577DD",
            "brightRed": "#DF6C75",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#E4C07A",
            "cursorColor": "#4F525D",
            "cyan": "#0997B3",
            "foreground": "#383A42",
            "green": "#50A14F",
            "name": "One Half Light",
            "purple": "#A626A4",
            "red": "#E45649",
            "selectionBackground": "#FFFFFF",
            "white": "#FAFAFA",
            "yellow": "#C18301"
        },
        {
            "background": "#002B36",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#FFFFFF",
            "cyan": "#2AA198",
            "foreground": "#839496",
            "green": "#859900",
            "name": "Solarized Dark",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#FDF6E3",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#002B36",
            "cyan": "#2AA198",
            "foreground": "#657B83",
            "green": "#859900",
            "name": "Solarized Light",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#FFFFFF",
            "cyan": "#06989A",
            "foreground": "#D3D7CF",
            "green": "#4E9A06",
            "name": "Tango Dark",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#FFFFFF",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#000000",
            "cyan": "#06989A",
            "foreground": "#555753",
            "green": "#4E9A06",
            "name": "Tango Light",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#000080",
            "brightBlack": "#808080",
            "brightBlue": "#0000FF",
            "brightCyan": "#00FFFF",
            "brightGreen": "#00FF00",
            "brightPurple": "#FF00FF",
            "brightRed": "#FF0000",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFF00",
            "cursorColor": "#FFFFFF",
            "cyan": "#008080",
            "foreground": "#C0C0C0",
            "green": "#008000",
            "name": "Vintage",
            "purple": "#800080",
            "red": "#800000",
            "selectionBackground": "#FFFFFF",
            "white": "#C0C0C0",
            "yellow": "#808000"
        },
        {
            "background": "#29283B",
            "black": "#535178",
            "blue": "#65AEF7",
            "brightBlack": "#535178",
            "brightBlue": "#65AEF7",
            "brightCyan": "#43C1BE",
            "brightGreen": "#5ECA89",
            "brightPurple": "#AA7FF0",
            "brightRed": "#EF6487",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FDD877",
            "cursorColor": "#FFFFFF",
            "cyan": "#43C1BE",
            "foreground": "#B3B0D6",
            "green": "#5ECA89",
            "name": "Whimsy",
            "purple": "#AA7FF0",
            "red": "#EF6487",
            "selectionBackground": "#FFFFFF",
            "white": "#FFFFFF",
            "yellow": "#FDD877"
        }
    ],
    "windowingBehavior": "useExisting"
}
```
