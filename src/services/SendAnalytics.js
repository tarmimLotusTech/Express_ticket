import FetchService from "./FetchService";
import {Platform } from 'react-native'

export default function SendAnalytics (navigation,item,type){
    let body={
        type,
        item,
        browser:'app',
        os:Platform.OS,
        deviceModel:Platform.constants.Model,
        osVersion:Platform.constants.Release,
        device:Platform.isTV?"TV":"Mobile"
    }
    FetchService(navigation,"POST","/api/analytics",1,body,false)
    .then(res=>console.log(type,"--",res))
    .catch(err=>console.log("ere=-=-=-",err))
    }