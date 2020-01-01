# api
## Free domain names
1. Add env folder in root. Setup index.json in env folder
    - Template goes like this 
        ```{
           "development": {
            "MONGODB_USER": "api",
            "MONGODB_PW": "XXXXXXXXXXXXXXXXXX",
            "MONGODB_URI": "XXXXXXXXXXXXXXXXXX"            
        }, 
            "production": {      
            "MONGODB_USER": "api",
            "MONGODB_PW": "XXXXXXXXXXXXXXXX",
            "MONGODB_URI": "XXXXXXXXXXXXXXXXXXXXXX"
            "SERVER_PORT": "XXXX"
        }```
}
2. setup dependencies npm install
3. setup MongoDB database 
    - Database list goes here - https://gist.github.com/tbrianjones/5992856/
    - or request access to me at aniketchopade@gmail.com
4. run npm start
5. curl localhost:1234/providers/<domain-name>

## Currency Conversion
1. Add env folder in root. Setup index.json in env folder
    - Template goes like this 
        ```{
           "development": {
            "MONGODB_USER": "api",
            "MONGODB_PW": "XXXXXXXXXXXXXXXXXX",
            "MONGODB_URI": "XXXXXXXXXXXXXXXXXX"            
        }, 
            "production": {      
            "MONGODB_USER": "api",
            "MONGODB_PW": "XXXXXXXXXXXXXXXX",
            "MONGODB_URI": "XXXXXXXXXXXXXXXXXXXXXX"
            "SERVER_PORT": "XXXX"
        }```
}
2. setup dependencies npm install
3. setup MongoDB database 
    - request access to me at aniketchopade@gmail.com
4. run npm start
5. curl localhost:1234/xrates/usd/cad