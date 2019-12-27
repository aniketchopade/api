# api
## list free domain names
1. Setup index.json in env folder
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
        }```
}

2. setup dependencies npm install
3. run npm start
4. setup MongoDB database 
    a. Database list goes here - https://gist.github.com/tbrianjones/5992856/
    b. or request access to me at aniketchopade@gmail.com
5. curl localhost:1234/providers/<domain-name>
