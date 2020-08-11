import { BaseUrl, key } from '../env';
import AsyncStorage from '@react-native-community/async-storage';
export default function FetchService(method,type, triedCount=5,jsonBody={},formInput=true){
  function errorHandler(err){
    console.log(err)
    // this handler retries the request for 5 times in case server is unreachable
    let retryCount = triedCount - 1;
    if(!retryCount){
      throw err;
    }
    
    return setDelay(1000).then(() => FetchService(method,type,retryCount,jsonBody,formInput));
    }

    function setDelay(d){
      return new Promise((resolve) => setTimeout(resolve, d));
    }

    let url = BaseUrl+type

    let headers =
    {
      Accept: "*/*",
      "Content-Type": formInput?
      "multipart/form-data":
      "application/json",
    }
      let body  = new FormData();
      if (formInput && method=="POST"){
        for(const name in jsonBody) {
          body.append(name, jsonBody[name]);
        }
      }
      else{
        body=JSON.stringify(jsonBody)
      }
      let cache = "force-cache"

    let options= method=="POST"?{method,headers,body,cache} : {method,headers,cache}

    return fetch(url,options)
      .then(async (data)=>{
        // console.log(data,options)
        // for (var header of data.headers.entries()){
        //   if (header[0].includes('set-cookie')){
        //     let str=header[1].split(";")[0]
        //     await AsyncStorage.setItem('sesToken',str);
        //   }
        // }
        return data.json()
      })
      .catch(errorHandler)

}