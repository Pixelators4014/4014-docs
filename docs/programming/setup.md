# Setup Guide

## Sign Up For Github

We use GitHub to host our code and manage our project. You must sign up for a GitHub account to contribute to the project. Here is [the signup link](https://github.com/signup?user_email=&source=form-home-signup).

## Install Git

- Windows

Install [Git For Windows](https://git-scm.com/download/win)


- Macos (Through Brew)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
```

- Linux or Other

You know how to do it.

## Clone repo

```bash
git clone https://github.com/Pixelators4014/2024
```

## Setup Editor

- Visual Studio Code (Recommended For Easiest Setup)

Use the [WPIlib installation guide](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html), and select VSCode.

- Any Other IDE

Go through the [WPIlib install guide](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html). Once you have the tools (namely gradle) installed, build the compile commands:
```bash
./gradlew generateCompileCommands
```
This will generate a file called `compile_commands.json` in `build/TargetedCompileCommands/linuxathenarelease/compile_commands.json`. Most LSPs and IDEs use the file to provide code completion and other features. It must be at the project's root for them to see it. You can either move it or create a symlink. On Unix systems, you can create a symlink with the following command:
```bash
ln -s build/TargetedCompileCommands/linuxathenarelease/compile_commands.json compile_commands.json
```
On Windows, it would be:
```cmd
mklink compile_commands.json build\TargetedCompileCommands\linuxathenarelease\compile_commands.json
```