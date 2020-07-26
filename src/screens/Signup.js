import React, { useState, useEffect } from "react";
import { ImageBackground,Dimensions, Text, TextInput, TouchableOpacity, View ,StyleSheet, Keyboard, ScrollView, Image, Picker} from "react-native";
import loginStyles from "../styles/loginStyles";
const window = Dimensions.get('window');

import { 
  systemWeights
} from 'react-native-typography';
import FetchService from "../services/FetchService";
const testCountries=[
  {"_id":"5e8218a9a0be4401500e4d37",
  "objectId":"AWnxgoUzw0",
  "code":"BD",
  "name":"Bangladesh",
  "native":"Bangladesh",
  "phone":"880",
  "continent":
    {
      "_id":"5e821761311eb9259c0ba82d",
      "objectId":"mSxk54vkg6",
      "code":"AS",
      "name":"Asia"
    },
  "capital":"Dhaka",
  "currency":"BDT",
  "emoji":"🇧🇩",
  "emojiU":"U+1F1E7 U+1F1E9",
  "continentCode":"AS",
  "continentName":"Asia"
},
  {
    "_id": "5e8218a9a0be4401500e4d27",
    "objectId": "MEzedNnNVw",
    "code": "AF",
    "name": "Afghanistan",
    "native": "افغانستان",
    "phone": "93",
    "continent": {
        "_id": "5e821761311eb9259c0ba82d",
        "objectId": "mSxk54vkg6",
        "code": "AS",
        "name": "Asia"
    },
    "capital": "Kabul",
    "currency": "AFN",
    "emoji": "🇦🇫",
    "emojiU": "U+1F1E6 U+1F1EB",
    "continentCode": "AS",
    "continentName": "Asia"
},
{
    "_id": "5e8218a9a0be4401500e4d2a",
    "objectId": "8rTBsf4ObQ",
    "code": "AL",
    "name": "Albania",
    "native": "Shqipëria",
    "phone": "355",
    "continent": {
        "_id": "5e821761311eb9259c0ba82e",
        "objectId": "28HX8qDZHw",
        "code": "EU",
        "name": "Europe"
    },
    "capital": "Tirana",
    "currency": "ALL",
    "emoji": "🇦🇱",
    "emojiU": "U+1F1E6 U+1F1F1",
    "continentCode": "EU",
    "continentName": "Europe"
},
{
    "_id": "5e8218a9a0be4401500e4d62",
    "objectId": "8XKDe93BnC",
    "code": "DZ",
    "name": "Algeria",
    "native": "الجزائر",
    "phone": "213",
    "continent": {
        "_id": "5e821761311eb9259c0ba82c",
        "objectId": "X2rEcTJnsE",
        "code": "AF",
        "name": "Africa"
    },
    "capital": "Algiers",
    "currency": "DZD",
    "emoji": "🇩🇿",
    "emojiU": "U+1F1E9 U+1F1FF",
    "continentCode": "AF",
    "continentName": "Africa"
},
{
    "_id": "5e8218a9a0be4401500e4d2f",
    "objectId": "s6ejWUPV5j",
    "code": "AS",
    "name": "American Samoa",
    "native": "American Samoa",
    "phone": "1684",
    "continent": {
        "_id": "5e821761311eb9259c0ba831",
        "objectId": "E6LHZzkHr6",
        "code": "OC",
        "name": "Oceania"
    },
    "capital": "Pago Pago",
    "currency": "USD",
    "emoji": "🇦🇸",
    "emojiU": "U+1F1E6 U+1F1F8",
    "continentCode": "OC",
    "continentName": "Oceania"
},
{
    "_id": "5e8218a9a0be4401500e4d25",
    "objectId": "sv7fjDVISU",
    "code": "AD",
    "name": "Andorra",
    "native": "Andorra",
    "phone": "376",
    "continent": {
        "_id": "5e821761311eb9259c0ba82e",
        "objectId": "28HX8qDZHw",
        "code": "EU",
        "name": "Europe"
    },
    "capital": "Andorra la Vella",
    "currency": "EUR",
    "emoji": "🇦🇩",
    "emojiU": "U+1F1E6 U+1F1E9",
    "continentCode": "EU",
    "continentName": "Europe"
},
{
    "_id": "5e8218a9a0be4401500e4d2c",
    "objectId": "khAszEtDXl",
    "code": "AO",
    "name": "Angola",
    "native": "Angola",
    "phone": "244",
    "continent": {
        "_id": "5e821761311eb9259c0ba82c",
        "objectId": "X2rEcTJnsE",
        "code": "AF",
        "name": "Africa"
    },
    "capital": "Luanda",
    "currency": "AOA",
    "emoji": "🇦🇴",
    "emojiU": "U+1F1E6 U+1F1F4",
    "continentCode": "AF",
    "continentName": "Africa"
}
]
testCities=[
  {
      "_id": "5e82297958cd81174c1df3c8",
      "objectId": "BiDaY9qZE0",
      "location": {
          "latitude": 23.7298,
          "longitude": 90.3854
      },
      "cityId": 7701354,
      "name": "Azimpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 96641,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df396",
      "objectId": "CXj2of6i2E",
      "location": {
          "latitude": 25.67419,
          "longitude": 89.05377
      },
      "cityId": 1185283,
      "name": "Badarganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 32600,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df39e",
      "objectId": "6C8N9rfnrJ",
      "location": {
          "latitude": 22.65657,
          "longitude": 89.79123
      },
      "cityId": 1185281,
      "name": "Bagerhat",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 266388,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df390",
      "objectId": "Wje8AeLjma",
      "location": {
          "latitude": 24.51863,
          "longitude": 91.35787
      },
      "cityId": 1185274,
      "name": "Baniachang",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 37807,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b1",
      "objectId": "8BY870SA85",
      "location": {
          "latitude": 22.70497,
          "longitude": 90.37013
      },
      "cityId": 1336137,
      "name": "Barisāl",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 202242,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b2",
      "objectId": "S0bkFlAn0A",
      "location": {
          "latitude": 24.07821,
          "longitude": 89.63262
      },
      "cityId": 1209562,
      "name": "Bera",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 39604,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df395",
      "objectId": "mZp26avMwB",
      "location": {
          "latitude": 24.0524,
          "longitude": 90.9764
      },
      "cityId": 1185263,
      "name": "Bhairab Bāzār",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 105457,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df38c",
      "objectId": "UQD7EmEjow",
      "location": {
          "latitude": 24.02452,
          "longitude": 88.99234
      },
      "cityId": 1185262,
      "name": "Bherāmāra",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 38159,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b0",
      "objectId": "W2vvY5UAmK",
      "location": {
          "latitude": 22.68759,
          "longitude": 90.64403
      },
      "cityId": 1336136,
      "name": "Bhola",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 99079,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3bd",
      "objectId": "kXtoHPRxsl",
      "location": {
          "latitude": 22.48898,
          "longitude": 90.06273
      },
      "cityId": 1477498,
      "name": "Bhāndāria",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 30219,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df38d",
      "objectId": "0KyyTwbYlY",
      "location": {
          "latitude": 23.01472,
          "longitude": 89.43936
      },
      "cityId": 1185260,
      "name": "Bhātpāra Abhaynagar",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 42653,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3c1",
      "objectId": "Av1Cyfh1iY",
      "location": {
          "latitude": 22.68347,
          "longitude": 91.79058
      },
      "cityId": 6414184,
      "name": "Bibir Hat",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 89030,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b4",
      "objectId": "bA6cYWHK8Z",
      "location": {
          "latitude": 24.85098,
          "longitude": 89.37108
      },
      "cityId": 1337233,
      "name": "Bogra",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 210000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5eee6c2cd78fa60c806fcf4f",
      "objectId": "Q0rzROBMnh",
      "location": {
          "latitude": 23.7104,
          "longitude": 90.40744
      },
      "cityId": 9985241,
      "name": "Brahmanbaria",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 10356500,
      "isCapital": false,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3ac",
      "objectId": "Rys8MFW6m8",
      "location": {
          "latitude": 22.49518,
          "longitude": 90.72391
      },
      "cityId": 1210565,
      "name": "Burhānuddin",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 45670,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df391",
      "objectId": "eIAiKy08OC",
      "location": {
          "latitude": 24.21623,
          "longitude": 90.95002
      },
      "cityId": 1185276,
      "name": "Bājitpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 34560,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df392",
      "objectId": "FFXYWL8hpb",
      "location": {
          "latitude": 22.19534,
          "longitude": 92.21946
      },
      "cityId": 1185270,
      "name": "Bāndarban",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 32523,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3ab",
      "objectId": "DY274U5TRR",
      "location": {
          "latitude": 23.30916,
          "longitude": 90.22698
      },
      "cityId": 1207047,
      "name": "Char Bhadrāsan",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 34423,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3cc",
      "objectId": "1muz7JqNeL",
      "location": {
          "latitude": 23.82037,
          "longitude": 90.12175
      },
      "cityId": 11609983,
      "name": "Char Golora",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 5000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df386",
      "objectId": "OvzJ4E9pnu",
      "location": {
          "latitude": 23.02475,
          "longitude": 91.51091
      },
      "cityId": 1185249,
      "name": "Chhāgalnāiya",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 39335,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df38b",
      "objectId": "FJZsYvi5z7",
      "location": {
          "latitude": 25.03852,
          "longitude": 91.66958
      },
      "cityId": 1185254,
      "name": "Chhātak",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 39218,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df389",
      "objectId": "kZGEjRhpzJ",
      "location": {
          "latitude": 25.55613,
          "longitude": 89.67097
      },
      "cityId": 1185247,
      "name": "Chilmāri",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 49736,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3aa",
      "objectId": "Ef4spjJEHH",
      "location": {
          "latitude": 22.3384,
          "longitude": 91.83168
      },
      "cityId": 1205733,
      "name": "Chittagong",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 3920222,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df37f",
      "objectId": "oGqOawqAS3",
      "location": {
          "latitude": 23.46186,
          "longitude": 91.18503
      },
      "cityId": 1185186,
      "name": "Comilla",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 389411,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3ae",
      "objectId": "90QAjdeMAs",
      "location": {
          "latitude": 21.43973,
          "longitude": 92.00955
      },
      "cityId": 1336134,
      "name": "Cox’s Bāzār",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 253788,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df387",
      "objectId": "Q0rzROBMnh",
      "location": {
          "latitude": 23.7104,
          "longitude": 90.40744
      },
      "cityId": 1185241,
      "name": "Dhaka",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 10356500,
      "isCapital": true,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a4",
      "objectId": "vQcH7Kqm18",
      "location": {
          "latitude": 25.62745,
          "longitude": 88.63779
      },
      "cityId": 1203891,
      "name": "Dinājpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 206234,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df35d",
      "objectId": "Sec3D9c0PD",
      "location": {
          "latitude": 23.59311,
          "longitude": 90.14251
      },
      "cityId": 1185100,
      "name": "Dohār",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 45543,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a5",
      "objectId": "uguIpWUmAd",
      "location": {
          "latitude": 23.60612,
          "longitude": 89.84064
      },
      "cityId": 1203344,
      "name": "Farīdpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 112187,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df383",
      "objectId": "LrENom4e9s",
      "location": {
          "latitude": 23.0144,
          "longitude": 91.3966
      },
      "cityId": 1185224,
      "name": "Feni",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 84028,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df385",
      "objectId": "6dvGUaImFF",
      "location": {
          "latitude": 24.432,
          "longitude": 90.5585
      },
      "cityId": 1185218,
      "name": "Gafargaon",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 34177,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3c9",
      "objectId": "xFVmfz2UY9",
      "location": {
          "latitude": 25.3293,
          "longitude": 89.5438
      },
      "cityId": 7921384,
      "name": "Gaibandha",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 0,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df384",
      "objectId": "vWsK4Z3zJP",
      "location": {
          "latitude": 22.97372,
          "longitude": 90.22376
      },
      "cityId": 1185210,
      "name": "Gaurnadi",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 40519,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df382",
      "objectId": "L4TJI18HwW",
      "location": {
          "latitude": 24.38044,
          "longitude": 91.41299
      },
      "cityId": 1185209,
      "name": "Habiganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 88760,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a3",
      "objectId": "HbF35lxLoz",
      "location": {
          "latitude": 23.25191,
          "longitude": 90.85508
      },
      "cityId": 1201753,
      "name": "Hājīganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 44343,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df388",
      "objectId": "pv6MkiQLzW",
      "location": {
          "latitude": 24.12858,
          "longitude": 89.06573
      },
      "cityId": 1185207,
      "name": "Ishurdi",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 81995,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a9",
      "objectId": "eglpYp8B41",
      "location": {
          "latitude": 24.83333,
          "longitude": 91.65
      },
      "cityId": 1200474,
      "name": "Jahedpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 3000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df367",
      "objectId": "9uAi6VuytH",
      "location": {
          "latitude": 24.91965,
          "longitude": 89.94812
      },
      "cityId": 1185106,
      "name": "Jamālpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 167900,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3bb",
      "objectId": "Lirxnq3BFe",
      "location": {
          "latitude": 23.16971,
          "longitude": 89.21371
      },
      "cityId": 1336140,
      "name": "Jessore",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 243987,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df37d",
      "objectId": "ahGiOftDLJ",
      "location": {
          "latitude": 23.11134,
          "longitude": 89.09061
      },
      "cityId": 1185204,
      "name": "Jhingergācha",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 41957,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3c5",
      "objectId": "6UWiH2mwd3",
      "location": {
          "latitude": 23.78789,
          "longitude": 90.16472
      },
      "cityId": 11609988,
      "name": "Joymontop",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 56000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df381",
      "objectId": "1vuo3PHEJO",
      "location": {
          "latitude": 25.10147,
          "longitude": 89.02734
      },
      "cityId": 1185206,
      "name": "Joypur Hāt",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 73068,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a1",
      "objectId": "4rJ07WGAbt",
      "location": {
          "latitude": 22.90725,
          "longitude": 89.21954
      },
      "cityId": 1197895,
      "name": "Kesabpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 30926,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df38e",
      "objectId": "H5JmGeW05z",
      "location": {
          "latitude": 23.10787,
          "longitude": 91.97007
      },
      "cityId": 1185252,
      "name": "Khagrachhari",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 50364,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3cb",
      "objectId": "8FMaARO7z7",
      "location": {
          "latitude": 23.78225,
          "longitude": 90.18382
      },
      "cityId": 11609980,
      "name": "Khanbaniara",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 5000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3af",
      "objectId": "u14AQmEnPJ",
      "location": {
          "latitude": 22.80979,
          "longitude": 89.56439
      },
      "cityId": 1336135,
      "name": "Khulna",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 1342339,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b9",
      "objectId": "48ZE7u9XJD",
      "location": {
          "latitude": 24.43944,
          "longitude": 90.78291
      },
      "cityId": 1337249,
      "name": "Kishorganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 90690,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df37c",
      "objectId": "YxGUlDQAMq",
      "location": {
          "latitude": 23.9028,
          "longitude": 89.11943
      },
      "cityId": 1185191,
      "name": "Kushtia",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 135724,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df38f",
      "objectId": "TB5VC0q9BI",
      "location": {
          "latitude": 23.043,
          "longitude": 89.63094
      },
      "cityId": 1185272,
      "name": "Kālia",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 40492,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df380",
      "objectId": "7SxJjUo0C6",
      "location": {
          "latitude": 23.40964,
          "longitude": 89.13801
      },
      "cityId": 1185199,
      "name": "Kālīganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 45631,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a0",
      "objectId": "JpkIASUtOG",
      "location": {
          "latitude": 22.9443,
          "longitude": 90.83005
      },
      "cityId": 1196292,
      "name": "Lakshmīpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 61703,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df378",
      "objectId": "DIZhbg4uTk",
      "location": {
          "latitude": 25.91719,
          "longitude": 89.44595
      },
      "cityId": 1185181,
      "name": "Lalmonirhat",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 65127,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df379",
      "objectId": "gwPb4TaTHX",
      "location": {
          "latitude": 23.24018,
          "longitude": 91.12143
      },
      "cityId": 1185183,
      "name": "Lākshām",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 82290,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df394",
      "objectId": "egg8a658XB",
      "location": {
          "latitude": 22.33774,
          "longitude": 90.73708
      },
      "cityId": 1185251,
      "name": "Lālmohan",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 42220,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3c7",
      "objectId": "Gv6ByADqTG",
      "location": {
          "latitude": 23.48702,
          "longitude": 89.41592
      },
      "cityId": 7649230,
      "name": "Magura",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 0,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3c3",
      "objectId": "S5EAGMwui4",
      "location": {
          "latitude": 24.96111,
          "longitude": 89.34278
      },
      "cityId": 9283213,
      "name": "Mahasthangarh",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 2200,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b8",
      "objectId": "rSqmyD15qQ",
      "location": {
          "latitude": 22.83957,
          "longitude": 91.84128
      },
      "cityId": 1462681,
      "name": "Manikchari",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 24813,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df37a",
      "objectId": "j32eHiCAZZ",
      "location": {
          "latitude": 22.28616,
          "longitude": 89.95883
      },
      "cityId": 1185173,
      "name": "Mathba",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 29760,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df375",
      "objectId": "pmXSg3rPcQ",
      "location": {
          "latitude": 24.48888,
          "longitude": 91.77075
      },
      "cityId": 1185166,
      "name": "Maulavi Bāzār",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 57441,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df377",
      "objectId": "VzADS7Z7cW",
      "location": {
          "latitude": 22.82257,
          "longitude": 90.52859
      },
      "cityId": 1185171,
      "name": "Mehendiganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 39424,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df374",
      "objectId": "LB4k1cdXpP",
      "location": {
          "latitude": 24.10287,
          "longitude": 90.09841
      },
      "cityId": 1185165,
      "name": "Mirzāpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 41137,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df37e",
      "objectId": "XCz0asWUdp",
      "location": {
          "latitude": 22.45566,
          "longitude": 89.85584
      },
      "cityId": 1185167,
      "name": "Morrelgonj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 31647,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df376",
      "objectId": "8dIa09wCgI",
      "location": {
          "latitude": 24.76484,
          "longitude": 90.25698
      },
      "cityId": 1185164,
      "name": "Muktāgācha",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 24684,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df372",
      "objectId": "TvduYVQFGp",
      "location": {
          "latitude": 24.75636,
          "longitude": 90.40646
      },
      "cityId": 1185162,
      "name": "Mymensingh",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 225126,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b7",
      "objectId": "qlrIkUM8tL",
      "location": {
          "latitude": 23.17097,
          "longitude": 90.20935
      },
      "cityId": 1337245,
      "name": "Mādārīpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 84789,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df39f",
      "objectId": "ZCH4NOJaq5",
      "location": {
          "latitude": 23.88791,
          "longitude": 90.96792
      },
      "cityId": 1193823,
      "name": "Nabīnagar",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 31671,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df371",
      "objectId": "L21x4etPYv",
      "location": {
          "latitude": 25.96817,
          "longitude": 89.69153
      },
      "cityId": 1185160,
      "name": "Nageswari",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 49425,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df399",
      "objectId": "TAfLIQI3A9",
      "location": {
          "latitude": 23.15509,
          "longitude": 89.49515
      },
      "cityId": 1185293,
      "name": "Narail",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 55112,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df365",
      "objectId": "2RRpwlhPnc",
      "location": {
          "latitude": 23.92298,
          "longitude": 90.71768
      },
      "cityId": 1185117,
      "name": "Narsingdi",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 281080,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3be",
      "objectId": "6mwdzhD3OP",
      "location": {
          "latitude": 24.41112,
          "longitude": 88.98673
      },
      "cityId": 7483813,
      "name": "Natore",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 369138,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3bc",
      "objectId": "iYKMF6HBYZ",
      "location": {
          "latitude": 24.59025,
          "longitude": 88.27444
      },
      "cityId": 1337240,
      "name": "Nawābganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 142361,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df36b",
      "objectId": "yfKqNKgMyG",
      "location": {
          "latitude": 24.88352,
          "longitude": 90.72898
      },
      "cityId": 1185116,
      "name": "Netrakona",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 79016,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3c4",
      "objectId": "mYRWlW9gSg",
      "location": {
          "latitude": 23.67346,
          "longitude": 88.98885
      },
      "cityId": 7484878,
      "name": "Nowlamary",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 3500,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df370",
      "objectId": "H4qi3bZKqS",
      "location": {
          "latitude": 24.05783,
          "longitude": 89.87696
      },
      "cityId": 1185159,
      "name": "Nāgarpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 238422,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df36f",
      "objectId": "t0Q1UvABiH",
      "location": {
          "latitude": 22.63696,
          "longitude": 90.27195
      },
      "cityId": 1185156,
      "name": "Nālchiti",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 38703,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df373",
      "objectId": "Q2OzAEU547",
      "location": {
          "latitude": 23.61352,
          "longitude": 90.50298
      },
      "cityId": 1185155,
      "name": "Nārāyanganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 223622,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3c2",
      "objectId": "lm7CUDkoaW",
      "location": {
          "latitude": 23.73625,
          "longitude": 90.41426
      },
      "cityId": 9827976,
      "name": "Paltan",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 184492,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df368",
      "objectId": "g84rJLeBUM",
      "location": {
          "latitude": 26.33338,
          "longitude": 88.55777
      },
      "cityId": 1185141,
      "name": "Panchagarh",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 48531,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df36e",
      "objectId": "fyzDdGLzGi",
      "location": {
          "latitude": 25.66369,
          "longitude": 88.93093
      },
      "cityId": 1185149,
      "name": "Parbatipur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 48020,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3c6",
      "objectId": "3ThnCVpVEA",
      "location": {
          "latitude": 23.81741,
          "longitude": 90.11921
      },
      "cityId": 11609984,
      "name": "Parvez Ali Family",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 6000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3ca",
      "objectId": "ckLbIANF1p",
      "location": {
          "latitude": 23.78758,
          "longitude": 90.16487
      },
      "cityId": 11609643,
      "name": "Parvez Ali Hossain",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 6000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df36c",
      "objectId": "DUU6tvPDj3",
      "location": {
          "latitude": 22.29543,
          "longitude": 91.979
      },
      "cityId": 1185148,
      "name": "Patiya",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 51360,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df39b",
      "objectId": "0G5cYsbBRm",
      "location": {
          "latitude": 22.71673,
          "longitude": 89.51194
      },
      "cityId": 1191139,
      "name": "Phultala",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 37985,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df369",
      "objectId": "zczYrq2BJD",
      "location": {
          "latitude": 22.57965,
          "longitude": 89.97521
      },
      "cityId": 1185138,
      "name": "Pirojpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 54418,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df36a",
      "objectId": "4eLcChTVX1",
      "location": {
          "latitude": 24.94077,
          "longitude": 90.60025
      },
      "cityId": 1185133,
      "name": "Purbadhala",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 0,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3bf",
      "objectId": "gI2JDbu85R",
      "location": {
          "latitude": 24.36537,
          "longitude": 88.83431
      },
      "cityId": 7483743,
      "name": "Puthia",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 159406,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b3",
      "objectId": "fQPBwWxbnD",
      "location": {
          "latitude": 24.00644,
          "longitude": 89.2372
      },
      "cityId": 1336143,
      "name": "Pābna",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 186781,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df39c",
      "objectId": "PW55qzcjuV",
      "location": {
          "latitude": 23.21824,
          "longitude": 90.35076
      },
      "cityId": 1191368,
      "name": "Pālang",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 67652,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a8",
      "objectId": "BXhCdAgRvY",
      "location": {
          "latitude": 24.80418,
          "longitude": 88.94875
      },
      "cityId": 1192366,
      "name": "Pār Naogaon",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 192464,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b5",
      "objectId": "gruMWr2Tk7",
      "location": {
          "latitude": 25.85587,
          "longitude": 88.35943
      },
      "cityId": 1337239,
      "name": "Pīrgaaj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 34606,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a2",
      "objectId": "9VMGio0tWw",
      "location": {
          "latitude": 23.7772,
          "longitude": 90.17604
      },
      "cityId": 1193946,
      "name": "Ramnagar",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 3000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df37b",
      "objectId": "UVquFKr06p",
      "location": {
          "latitude": 25.74664,
          "longitude": 89.25166
      },
      "cityId": 1185188,
      "name": "Rangpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 343122,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df39d",
      "objectId": "4jRcKqNFhE",
      "location": {
          "latitude": 22.53511,
          "longitude": 91.91919
      },
      "cityId": 1189638,
      "name": "Raojān",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 25708,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df393",
      "objectId": "4J8qsvlYZ2",
      "location": {
          "latitude": 23.0391,
          "longitude": 90.76808
      },
      "cityId": 1185236,
      "name": "Rāipur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 64652,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df36d",
      "objectId": "VMjAV7AiNP",
      "location": {
          "latitude": 24.374,
          "longitude": 88.60114
      },
      "cityId": 1185128,
      "name": "Rājshāhi",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 700133,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df363",
      "objectId": "uENMUnH2G5",
      "location": {
          "latitude": 23.1006,
          "longitude": 90.84989
      },
      "cityId": 1185127,
      "name": "Rāmganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 55241,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3c0",
      "objectId": "FgO0WCtTHX",
      "location": {
          "latitude": 25.77769,
          "longitude": 88.89169
      },
      "cityId": 6545349,
      "name": "Saidpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 199422,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df39a",
      "objectId": "oAZJ0GxOiH",
      "location": {
          "latitude": 24.31988,
          "longitude": 90.16943
      },
      "cityId": 1189056,
      "name": "Sakhipur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 40869,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df366",
      "objectId": "SyHvQalHUn",
      "location": {
          "latitude": 22.51409,
          "longitude": 91.45491
      },
      "cityId": 1185120,
      "name": "Sandwīp",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 52152,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df38a",
      "objectId": "9TlxWjK9KU",
      "location": {
          "latitude": 22.31006,
          "longitude": 89.79113
      },
      "cityId": 1185239,
      "name": "Sarankhola",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 36470,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a7",
      "objectId": "qYuKhytH0G",
      "location": {
          "latitude": 24.75127,
          "longitude": 89.83126
      },
      "cityId": 1188569,
      "name": "Sarishābāri",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 81325,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3cd",
      "objectId": "BqBjNvkaSk",
      "location": {
          "latitude": 23.79119,
          "longitude": 90.16972
      },
      "cityId": 11745960,
      "name": "Sayani",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 1500,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3ba",
      "objectId": "NVBqurwTNs",
      "location": {
          "latitude": 25.01881,
          "longitude": 90.01751
      },
      "cityId": 1337248,
      "name": "Sherpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 107419,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df361",
      "objectId": "cLrENPfOzR",
      "location": {
          "latitude": 25.00146,
          "longitude": 89.32266
      },
      "cityId": 1185107,
      "name": "Shibganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 378701,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df362",
      "objectId": "7Oc83oLHwf",
      "location": {
          "latitude": 24.68501,
          "longitude": 88.15638
      },
      "cityId": 1185108,
      "name": "Shibganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 35961,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df364",
      "objectId": "WNGtiBSg8A",
      "location": {
          "latitude": 24.17687,
          "longitude": 89.5988
      },
      "cityId": 1185121,
      "name": "Shāhzādpur",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 102420,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df35f",
      "objectId": "ypQJQzHU29",
      "location": {
          "latitude": 24.45771,
          "longitude": 89.70802
      },
      "cityId": 1185115,
      "name": "Sirajganj",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 127481,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df398",
      "objectId": "j6zSHUgwkD",
      "location": {
          "latitude": 23.65,
          "longitude": 90.61667
      },
      "cityId": 1187530,
      "name": "Sonārgaon",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 130000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df35c",
      "objectId": "lYEcd6pCxH",
      "location": {
          "latitude": 24.89904,
          "longitude": 91.87198
      },
      "cityId": 1185099,
      "name": "Sylhet",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 237000,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3ad",
      "objectId": "M0KjkZxq2u",
      "location": {
          "latitude": 22.07639,
          "longitude": 92.04955
      },
      "cityId": 1336133,
      "name": "Sātkania",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 52005,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df360",
      "objectId": "FGvP0IFnwm",
      "location": {
          "latitude": 22.70817,
          "longitude": 89.07185
      },
      "cityId": 1185111,
      "name": "Sātkhira",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 128918,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df35a",
      "objectId": "SQOOEWsAAR",
      "location": {
          "latitude": 20.85829,
          "longitude": 92.29773
      },
      "cityId": 1185095,
      "name": "Teknāf",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 40557,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df35e",
      "objectId": "6k4hLqrGgm",
      "location": {
          "latitude": 26.03097,
          "longitude": 88.46989
      },
      "cityId": 1185092,
      "name": "Thākurgaon",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 71096,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df35b",
      "objectId": "AxfoUIuUj4",
      "location": {
          "latitude": 23.89154,
          "longitude": 90.40232
      },
      "cityId": 1185098,
      "name": "Tungi",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 337579,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df397",
      "objectId": "ei9ECAbh3D",
      "location": {
          "latitude": 22.89983,
          "longitude": 89.90326
      },
      "cityId": 1185920,
      "name": "Tungipāra",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 62210,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3b6",
      "objectId": "61BPGgSTl9",
      "location": {
          "latitude": 24.24984,
          "longitude": 89.91655
      },
      "cityId": 1336144,
      "name": "Tāngāil",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 180144,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  },
  {
      "_id": "5e82297958cd81174c1df3a6",
      "objectId": "FDL7wmOzBN",
      "location": {
          "latitude": 22.22647,
          "longitude": 90.71275
      },
      "cityId": 1205481,
      "name": "Uttar Char Fasson",
      "altName": "",
      "country": "5e8218a9a0be4401500e4d37",
      "population": 48305,
      "countryCode": "BD",
      "countryName": "Bangladesh"
  }
]

function Login (props) {
  const [keyFocus,setKeyFocus]=useState(false)
  
  const [countries, setCountries]=useState('')
  const [cities, setCities]=useState('')
  const [cityLoading, setCityLoading]=useState(true)
  const [countryLoading, setCountryLoading]=useState(true)
  const [firstName,setFName]=useState('')
  const [lastName,setLName]=useState('')
  const [country,setCountry]=useState({})
  const [city,setCity]=useState({})
  const [address1,setAddress1]=useState('')
  const [address2,setAddress2]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [password2,setPassword2]=useState('')
  const [signupError, setSignupError]=useState('')
  
  const _keyboardDidShow = () => {
    setKeyFocus(true)
  };

  const _keyboardDidHide = () => {
    setKeyFocus(false)
  };
  useEffect(()=>{
    FetchService("GET","/api/geo/country")
    .then(res=>setCountries(res))
    .then(()=>setCountryLoading(false))
    

    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);



    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    }
  },[])
  function findCity(country){
    setCountry(country)

    FetchService("GET",`/api/geo/${country._id}/city`)
    .then(res=>setCities(res))
    .then(()=>setCityLoading(false))
    .catch(er=>console.log("--e",er))
  }

  function handleSubmit() {

    if (firstName.length<1){
      setSignupError('insert first name')
    }
    else if (lastName.length<1){
      setSignupError('insert last name')
    }
    else if (!country._id){
      setSignupError('insert country')
    }
    else if (!city._id){
      setSignupError('insert city')
    }
    else if (address1.length<1 && address2.length<1){
      setSignupError('insert address')
    }
    else if (phone.length<1){
      setSignupError('insert phone number')
    }
    else if (email.length<1){
      setSignupError('insert email')
    }
    else if (password.length<1){
      setSignupError('insert password')
    }
    else if (password.length<8){
      setSignupError('password at least 8 characters')
    }
    else if (password!==password2){
      setSignupError('passwords do not match')
    }
    else{
      let body={
        firstName,lastName,country:country.name,city:city.name,address1,address2, password,password2,phone,email
      }
      FetchService("POST","/customer/auth/register",3,body)
      .then(res=>{
        if(res.msg){
          props.navigation.navigate("AppStack")
        }
        else throw (Object.entries(res)[0][0]+" : "+Object.entries(res)[0][1])
      })
      .catch(er=>setSignupError(er))
    }

  }
    return (
      <View
      style={loginStyles.loginCont}
      >
        {
          !keyFocus?
          <View
        
        style={{
          marginBottom:0,
          height:window.height/4,
          backgroundColor:'#130A56',
          borderBottomLeftRadius:window.width/12,
          borderBottomRightRadius:window.width/12
        }}>

          <Image
            style={{
              flex: 1,
              width: 150,
              height: 150,
              marginBottom:0,
              alignSelf:'center',
              resizeMode:'contain',
              borderRadius:8
          }}
            source={require("../assets/images/loginTop.png")}
          />
          
        </View>
        
        :<View/>
        }
        <Text
          style={{
            color:'red', 
            alignSelf:'center'            
          }}>
            {signupError}
          </Text>
      <ImageBackground
        source={require('../assets/images/loginBG.png')}
        style={{
          flex: 1,
        }}
        imageStyle={{
          resizeMode:'contain',
          height:350,
          width:300,
          marginLeft:130,
          marginTop:100,
          opacity:0.5
        }}
        >
      <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      >
        
        
          <View
          style={{
            height:window.height/10,
            width:window.width-50,
            alignItems:'center',
            alignSelf:'center',
            justifyContent:'center'
          }}
          >
          {/* title and input starts */}   
          <Text
          style={{
            color:'#00163D',
            fontSize:20,
            alignSelf:'flex-start',
            marginLeft:10
          }}
          >
            Registration form
          </Text>
          </View>
          <View style={loginStyles.signupEmailTop}>
            <View
            style={{
              flexDirection:'row'
            }}
            >
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="First name"
                value={firstName}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,
                }]}
                onChangeText={setFName}
                blurOnSubmit={false}

                />
                <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Last name"
                value={lastName}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,
                }]}
                onChangeText={setLName}
                blurOnSubmit={false}

                />
            </View>
            <View
            style={{
              flexDirection:'row'
            }}
            >
                <View
                style={styles.pickerContainer}
                >
                  <Text
                  style={styles.pickerText}
                  >Select country</Text>
                  {
                    countryLoading?<Text>loading</Text>
                    :<Picker
                    selectedValue={country}
                    style={styles.pickerStyle}
                    prompt="Select Country"
                    onValueChange={async (itemValue, itemIndex) =>findCity(itemValue)}>
                      <Picker.Item label={"All"} value={''} />
                      {
                        countries.map(city=><Picker.Item label={city.name} value={city} />)
                      }
                    </Picker>
                  }
                
                </View>
                
                <View
                style={styles.pickerContainer}
                >
                  <Text
                  style={styles.pickerText}
                  >Select city</Text>
                  {
                    cityLoading?
                    <Text>first Select country </Text>
                    :<Picker
                    selectedValue={city}
                    style={styles.pickerStyle}
                    prompt="Select City"
                    onValueChange={async (itemValue, itemIndex) =>setCity(itemValue)}>
                      <Picker.Item label={"All"} value={''} />
                      {
                        cities.map(city=><Picker.Item label={city.name} value={city} />)
                      }
                  </Picker>

                  }
                </View>
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Address line 1"
                value={address1}
                keyboardType="default"
                style={loginStyles.txtInputSignup}
                onChangeText={setAddress1}
                blurOnSubmit={false}

                />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Address line 2"
                value={address2}
                style={loginStyles.txtInputSignup}
                onChangeText={setAddress2}
                blurOnSubmit={false}
                />
            </View>
          
            <Text
            style={{
              color:'#00163D',
              fontSize:20,
              alignSelf:'flex-start',
              marginLeft:40,
              marginVertical:10
            }}
            > 
            Contact Info
          </Text>
            <View
            style={{
              flexDirection:'row'
            }}
            >
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Phone"
                value={phone}
                keyboardType='phone-pad'
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setPhone}
                blurOnSubmit={false}

                />
                <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Email"
                value={email}
                keyboardType='email-address'
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setEmail}
                blurOnSubmit={false}

                />
            </View>
            <View
            style={{
              flexDirection:'row'
            }}
            >
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setPassword}
                blurOnSubmit={false}

                />
                <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={password2}
                keyboardType="default"
                style={{
                  ...systemWeights.light,
                  color: '#616161',
                  width: window.width*150/375,
                  height: window.width*56/375,
                  fontSize: 16,
                  marginVertical: 10
                }}
                onChangeText={setPassword2}
                blurOnSubmit={false}

                />
            </View>
          </View>
          {/* title and input ends */}
          <View
            style={{
              flexDirection:'row',
              margin:15,
              justifyContent:'space-between'
            }}
            >
          <TouchableOpacity
        style={{
          height:window.height/15,
          width:window.width/2.5,
          borderRadius:5,
          backgroundColor:"#130A56",
          justifyContent:'center'
        }}
        onPress={handleSubmit}
        >
          <Text
          style={{
            fontSize:15,
            color:'white',
            alignSelf:'center'
          }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          height:window.height/20,
          width:window.width/2.5,
          alignSelf:'center',
          backgroundColor:"transparent",
          justifyContent:'center',
          marginBottom:10
        }}
        onPress={()=>props.navigation.navigate("Login")}
        >
          <Text
          style={{
            fontSize:12,
            color:'#00163D',
            alignSelf:'center',
            fontWeight:'bold'
          }}
          >
            Already have account? Login
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </ImageBackground>
        
      </View>
    );
  }

const styles = StyleSheet.create({
  pickerText:{
    fontSize:10,
    alignSelf:'center',
    marginTop:5
  },
  pickerContainer:{
    backgroundColor:'#fff',
    borderRadius:5,
    height:50,
    marginHorizontal:5
  },
  pickerStyle:{
    height: 20,
    width: window.width/2.5
  }
});

  export default Login