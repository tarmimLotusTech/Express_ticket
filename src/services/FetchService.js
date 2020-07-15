import { BaseUrl, key } from '../env';
export default function FetchService(method,type,params,triedCount=5){
   function errorHandler(err){
    
    // this handler retries the request for 5 times in case server is unreachable
    let retryCount = triedCount - 1;
    if(!retryCount){
      throw err;
    }
    
    return setDelay(1000).then(() => FetchService(method,params,retryCount));
    }

    function setDelay(d){
      return new Promise((resolve) => setTimeout(resolve, d));
    }

    let url = BaseUrl+type

    let headers =
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    let options={method,headers}

    return fetch(url,options)
    .then(function(res) {
      if (res.ok) {
        return res;
      }
    })
    .then((data)=>data.json())
    .catch(errorHandler)

}