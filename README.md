# ASG


### Clone this repo in vm:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc

nvm install --lts
npm install -g bun 
npm install -g pm2

git clone https://github.com/Nihar-Debnath/ASG.git

cd ASG

which bun # this will give you the path of the bun runner, copy it and paste it into the pm2 command

pm2 start --interpreter <bun path> /home/ubuntu/ASG/index.ts

cat /var/log/cloud-init-output.log # or 
vi /var/log/cloud-init-output.log  
```