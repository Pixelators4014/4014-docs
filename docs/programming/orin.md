# Orin Nano

The [Orin Nano](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/) is a coprocessor that we use to get the robot's position and orientation, as well as object detection data. It is connected to the robot's main computer through a Networktable. To develop on the Orin, you will need to ssh into it. There is an ngrok service (`/usr/local/bin/ngrok tcp 22`) and serveo service (`/usr/bin/ssh -R Alistairs-Autonomous-Astro-Artisan:22:localhost:22 serveo.net`) running on startup, which exposes its ssh to the internet with a TCP tunnel.

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

## Installing Isaac ROS

+ Restart Docker
```bash
sudo systemctl daemon-reload && sudo systemctl restart docker
```
+ Install Git LFS
```bash
sudo apt-get install git-lfs
```
```bash
git lfs install --skip-repo
```
+ Create a ROS 2 workspace for experimenting with Isaac ROS:
```bash
mkdir -p  ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```
+ Clone repos
```bash
cd ${ISAAC_ROS_WS}/src
```
```bash
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git && \
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam.git  && \
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_object_detection.git  && \
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_apriltag.git  && \
git clone https://github.com/Pixelators4014/jetson-localization.git  && \
git clone https://github.com/IntelRealSense/realsense-ros
```

## Running Isaac ROS

Once installed, you must open the docker container with the following command:
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
Then you need to install dependencies:
```bash
sudo apt-get install -y ros-humble-Isaac-ros-visual-slam \
ros-humble-Isaac-ros-yolov8 ros-humble-Isaac-ros-tensor-rt ros-humble-Isaac-ros-dnn-image-encoder \
ros-humble-Isaac-ros-detectnet ros-humble-Isaac-ros-triton ros-humble-Isaac-ros-dnn-image-encoder \
ros-humble-isaac-ros-apriltag
```
And then build the workspace:
```bash
cd /workspaces/isaac_ros-dev && \
colcon build --symlink-install && \
source install/setup.bash
```

## Running Code

Now you can run the run all node:
```bash
ros2 launch comms_node run_all.launch.py
```