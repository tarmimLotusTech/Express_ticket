import { BaseUrl, key } from '../env';
export default function FetchService(method,type, triedCount=5,jsonBody={},){
   function errorHandler(err){
    console.log(err)
    // this handler retries the request for 5 times in case server is unreachable
    let retryCount = triedCount - 1;
    if(!retryCount){
      throw err;
    }
    
    return setDelay(1000).then(() => FetchService(method,type,retryCount,jsonBody));
    }

    function setDelay(d){
      return new Promise((resolve) => setTimeout(resolve, d));
    }

    let url = BaseUrl+type

    let headers =
      {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
      }
      const body  = new FormData();

      for(const name in jsonBody) {
        body.append(name, jsonBody[name]);
      }
    let options= method=="POST"?{method,headers,body} : {method,headers}

    return fetch(url,options)
    .then((data)=>data.json())
    .catch(errorHandler)

}