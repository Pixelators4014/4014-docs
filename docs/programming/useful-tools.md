# Useful Tools
These are some optional tools to check out that may make your life easier.
## FRC Specific
We use these tools in our repo.

- [wpilib](https://docs.wpilib.org/en/stable/index.html) - This is the base sdk which allows us to interact with FRC stuff.
- [pathplanner](https://pathplanner.dev/) - This allows us to do complex paths in auto
## IDES
These are the various IDEs that members have used successfully, listed in order of weight (helix takes less resources on your computer than zed, which is better than vscdoe, etc.)
- [helix](https://github.com/helix-editor/helix) - Terminal Based Editor
- [zed](https://github.com/zed-industries/zed) - Editor
- [wpilib vscode](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html) - Editor 
- [clion](https://www.jetbrains.com/clion/) - IDE

You don't need all of these, but having the wpilib vscode is a must when pushing code onto the robot.

Helix is great for ssh development and quick fixes, which is why it is probably installed on the Orin Nano.

CLion is arguably the best of them all, but it requires a lot of RAM and can be slow at times.

Zed is a good middle ground/starting point, but doesn't support windows yet.

Note that using autocomplete for clion or zed requires generating `compile_commands.json` and then opening the file via the editor/IDE.

## Terminal Specific
- [alacritty](https://github.com/alacritty/alacritty) - Terminal Emulator
- [termviz](https://github.com/carzum/termviz) - ros2 viz in terminal
- [zellij](https://github.com/zellij-org/zellij) - Terminal multiplexer (tmux but better)
## Other
- [netscanner](https://github.com/Chleba/netscanner) - Useful for network debugging
