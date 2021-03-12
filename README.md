# SAP OpenUI5

## Install
```
npm install --global @ui5/cli
npm init
```

## Run
```
npm start
```

## Build
```
npm run-script build
```

## Run Build
```
npm run-script runbuild
```

## Deploy
Create a file ".env" in the folder "src"
```
UI5_TASK_NWABAP_DEPLOYER__SERVER=http://host:port
UI5_TASK_NWABAP_DEPLOYER__CLIENT=100
UI5_TASK_NWABAP_DEPLOYER__USER=login
UI5_TASK_NWABAP_DEPLOYER__PASSWORD=password
```
And run deploy
```
npm run-script deploy
```