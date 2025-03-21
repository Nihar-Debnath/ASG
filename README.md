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

pm2 start --interpreter /home/ubuntu/.nvm/versions/node/v22.14.0/bin/bun /home/ubuntu/ASG/bin.ts

cat /var/log/cloud-init-output.log # or 
vi /var/log/cloud-init-output.log  
```