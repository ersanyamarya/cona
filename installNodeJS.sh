#!/bin/sh

cd ~/
mkdir Installs
cd Installs
echo "Downloading NodeJS 8.9.0"
wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv6l.tar.gz

tar -xzf node-v8.9.0-linux-armv6l.tar.gz
cd node-v8.9.0-linux-armv6l
sudo cp -R * /usr/local/
cd ~/Installs
rm node-v8.9.0-linux-armv6l.tar.gz
echo 'Verify NodeJS installation'
cd ~/
node -v
npm -v