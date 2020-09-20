import { BaseUrl, key } from '../env';
import AsyncStorage from '@react-native-community/async-storage';
export default async function FetchService(method,type, triedCount=5,jsonBody={},formInput=true){
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
    const Authorization = await AsyncStorage.getItem("userToken")
    let url = BaseUrl+type
    let headers =  Authorization?
    {
      Accept: "*/*",
      "Content-Type": formInput?
      "multipart/form-data":
      "application/json",
      Authorization
    }:{
      Accept: "*/*",
      "Content-Type": formInput?
      "multipart/form-data":
      "application/json"
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
        if(data.status == 401 || data.status == 403) {
          AsyncStorage.removeItem("userToken")
        }
        if(url!==BaseUrl+"/api/analytics"){
          return data.json()
        }
        else {
          if(data.ok)
          return {added:"added"}
          else throw data
        }
      })
      .then(response=>{
        if (response.token){
          AsyncStorage.setItem("userToken",response.token)
        }
        return response
      })
      .catch(errorHandler)

}