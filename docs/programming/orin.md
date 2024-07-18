# Orin Nano

The [Orin Nano](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/) is a coprocessor that we use to get the robot's position and orientation, as well as object detection data. It is connected to the robot's main computer through a custom UDP protocol. To develop on the Orin, you will need to ssh into it. There is an ngrok service (`/usr/local/bin/ngrok tcp 22`) and serveo service (`/usr/bin/ssh -R Alistairs-Autonomous-Astro-Artisan:22:localhost:22 serveo.net`) running on startup, which exposes its ssh to the internet with a TCP tunnel.

## SSH Into Orin

You must connect to them with the following commands:
- Ngrok
```bash
ssh -p NGROK_PORT USER@NGROK_IP
```
- Serveo
```bash
ssh -J serveo.net USER@SERVEO_NICKNAME
```

## Setting up an Orin

If the Orin is brand new, or you wish to perform a factory reset, find a computer running Ubuntu and install the [Nvdia SDK Manager](https://developer.nvidia.com/sdk-manager). Then short the FC REC and GND pins (jumper wires are preferable, but I've used an alligator clip) before plugging the Orin nano in to the power. Next connect the computer and the Orin Nano by USB. The SDK Manager should install everything needed (be sure to install CUDA and the rest of the software). When flashing, be sure to flash to the SSD instead of the microSD.

After the flash is done disconnect the jumper cables and unplug the orin and reboot it. After that go through setup.

Then [https://github.com/Pixelators4014/pixelization_rs/blob/master/README.md#full-setup](https://github.com/Pixelators4014/pixelization_rs/blob/master/README.md#full-setup) should get you up and running after that.
