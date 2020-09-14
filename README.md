# WBOT
This application was created for our Discord server.

# Getting Started
Install the latest docker from the link below.

|   SERVER   |                       LINK                       |
|  :------:  | :----------------------------------------------: |
|   CentOS   |  https://docs.docker.com/engine/install/centos/  |
|   Debian   |  https://docs.docker.com/engine/install/debian/  |
|   Fedora   |  https://docs.docker.com/engine/install/fedora/  |
|  Raspbian  |  https://docs.docker.com/engine/install/debian/  |
|   Ubuntu   |  https://docs.docker.com/engine/install/ubuntu/  |

# Usage

```
# Clone repository
git clone https://github.com/smpny7/wbot.git

# Change current directory
cd wbot

# Set environment variables as you like
mv .env.sample .env & vi .env

# Build the container
docker build -t wbot .

# Run the container
docker run -it -d --name wbot wbot
```