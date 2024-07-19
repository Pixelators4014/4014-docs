# Orin Nano

The [Orin Nano](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/) is a coprocessor that we use to get the robot's position and orientation, as well as object detection data.
It is connected to the robot's main computer through a custom UDP protocol. To develop on the Orin, you will need to ssh into it.
SSH, as of July of 2024, is offline due to the fact it is the off-season. 

## SSH Into Orin

### How to setup
Go to https://whatismyip.com/ and get the public IPv4 or IPv6 address (IPv4 is shorter and preferable).
Send it to #programming or similar on discord, with an username and password (the unix user).

Then people can ssh with this:

```shell
    ssh [username]@[ip]
```
and enter the password.

## Setting up an Orin

Ensure the Orin Nano has a SSD installed before proceeding.

If the Orin is brand new, or you wish to perform a factory reset, find a computer running Ubuntu and install the [Nvdia SDK Manager](https://developer.nvidia.com/sdk-manager). Then short the FC REC and GND pins (jumper wires are preferable, but I've used an alligator clip) before plugging the Orin nano in to the power. Next connect the computer and the Orin Nano by USB. The SDK Manager should install everything needed (be sure to install CUDA and the rest of the software). When flashing, be sure to flash to the SSD instead of the microSD.

After the flash is done disconnect the jumper cables and unplug the orin and reboot it. After that go through setup.

Then [https://github.com/Pixelators4014/pixelization_rs/blob/master/README.md#full-setup](https://github.com/Pixelators4014/pixelization_rs/blob/master/README.md#full-setup) should get you up and running after that.

The full documentation for this is at [https://github.com/Pixelators4014/pixelization_rs/blob/master/README.md](https://github.com/Pixelators4014/pixelization_rs/blob/master/README.md).
