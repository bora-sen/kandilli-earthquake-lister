import React from 'react'
import EQListItem from './EQListItem'
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function EQList() {

  const API_URL = "https://api.orhanaydogdu.com.tr/deprem/live.php?limit=10";
  const [loading,setLoading] = useState(true);
  const [eqList,setEQList] = useState();


  //const API_req = {"status":true,"tryed":0,"serverloadms":252,"desc":"Ger\u00e7ekten amac\u0131na uygun kullan\u0131n, L\u00fctfen ileti\u015fimden \u00e7ekinmeyin: info@orhanaydogdu.com.tr","result":[{"mag":3.2,"lng":37.7028,"lat":38.0412,"lokasyon":"BEGRE-DOGANSEHIR (MALATYA)","depth":5,"coordinates":[37.7028,38.0412],"title":"BEGRE-DOGANSEHIR (MALATYA)","rev":null,"timestamp":1675956067,"date_stamp":"2023-02-09","date":"2023.02.09 18:21:07","hash":"908b01238f542d18245ee9e46628f516","hash2":"fbefd8d5b0e36b0ee4194145f7b74255"},{"mag":3.8,"lng":37.0392,"lat":37.3198,"lokasyon":"EMIROGLU-PAZARCIK (KAHRAMANMARAS)","depth":3.7,"coordinates":[37.0392,37.3198],"title":"EMIROGLU-PAZARCIK (KAHRAMANMARAS)","rev":null,"timestamp":1675955930,"date_stamp":"2023-02-09","date":"2023.02.09 18:18:50","hash":"75b1b7b49f621701b3285a4fe456beca","hash2":"f3148774cb9c8958a3515b1234d372d3"},{"mag":2,"lng":36.3782,"lat":38.1932,"lokasyon":"FATMAKUYU-TUFANBEYLI (ADANA)","depth":22.8,"coordinates":[36.3782,38.1932],"title":"FATMAKUYU-TUFANBEYLI (ADANA)","rev":null,"timestamp":1675955311,"date_stamp":"2023-02-09","date":"2023.02.09 18:08:31","hash":"94174f1224050508e3f6d22a0b8429c0","hash2":"afeb252f1ecf11c3b27a3f6228b91c81"},{"mag":2.6,"lng":38.0732,"lat":38.2168,"lokasyon":"ISIKLI-YESILYURT (MALATYA)","depth":8.9,"coordinates":[38.0732,38.2168],"title":"ISIKLI-YESILYURT (MALATYA)","rev":null,"timestamp":1675954990,"date_stamp":"2023-02-09","date":"2023.02.09 18:03:10","hash":"0d9230f916daa2522c79d38162a2ac48","hash2":"c42bb3f16d5e5cd89cfd664337135083"},{"mag":2.5,"lng":37.4655,"lat":38.077,"lokasyon":"SUNNETKOY-ELBISTAN (KAHRAMANMARAS)","depth":2.5,"coordinates":[37.4655,38.077],"title":"SUNNETKOY-ELBISTAN (KAHRAMANMARAS)","rev":null,"timestamp":1675954501,"date_stamp":"2023-02-09","date":"2023.02.09 17:55:01","hash":"5a5eafe53509630caaf1e588dd1dde3f","hash2":"fb161dc337f6a02fc63f4dd23961df45"},{"mag":2.2,"lng":36.6302,"lat":38.057,"lokasyon":"GUCUKSU-GOKSUN (KAHRAMANMARAS)","depth":6,"coordinates":[36.6302,38.057],"title":"GUCUKSU-GOKSUN (KAHRAMANMARAS)","rev":null,"timestamp":1675954404,"date_stamp":"2023-02-09","date":"2023.02.09 17:53:24","hash":"c9d80ecde91102bd4004690e1bda4853","hash2":"96c1838a30b4ba63623ff3c0abc6dbbd"},{"mag":1.9,"lng":36.7612,"lat":37.22,"lokasyon":"BELPINAR-NURDAGI (GAZIANTEP)","depth":3.9,"coordinates":[36.7612,37.22],"title":"BELPINAR-NURDAGI (GAZIANTEP)","rev":null,"timestamp":1675954244,"date_stamp":"2023-02-09","date":"2023.02.09 17:50:44","hash":"3802953496a8c0205920327261fc24e7","hash2":"3b2cf4d789677eb90312012f544ebe9b"},{"mag":2.3,"lng":37.6118,"lat":38.0238,"lokasyon":"GOVDELI-DOGANSEHIR (MALATYA)","depth":8.7,"coordinates":[37.6118,38.0238],"title":"GOVDELI-DOGANSEHIR (MALATYA)","rev":null,"timestamp":1675953833,"date_stamp":"2023-02-09","date":"2023.02.09 17:43:53","hash":"8bd8330492e515f6efb709aeaa7c5548","hash2":"224052d527411c2275a0acaecbf39134"},{"mag":3.6,"lng":36.8427,"lat":37.2493,"lokasyon":"KIRISKAL-NURDAGI (GAZIANTEP)","depth":5.8,"coordinates":[36.8427,37.2493],"title":"KIRISKAL-NURDAGI (GAZIANTEP)","rev":null,"timestamp":1675953455,"date_stamp":"2023-02-09","date":"2023.02.09 17:37:35","hash":"33f0a6f8a37ebdb4eb7c4cb43f2c093d","hash2":"37804006a91e35cf79697f400adc89a8"},{"mag":2.8,"lng":36.6267,"lat":37.8963,"lokasyon":"TEKIR-(KAHRAMANMARAS)","depth":2.3,"coordinates":[36.6267,37.8963],"title":"TEKIR-(KAHRAMANMARAS)","rev":null,"timestamp":1675953268,"date_stamp":"2023-02-09","date":"2023.02.09 17:34:28","hash":"88c9cc883cb9ff15f7d0cb1e7c11a05f","hash2":"07fd047f8e271970c010464b5c7112ee"}]};


  const APIData = async () => {
    await axios.get(API_URL);
  }

  useEffect(() => {
    console.log(APIData())
  },[])


  if(loading){
    return <div>loading..</div>
  }
  if(!loading){
    return (
      <section className='flex gap-2 flex-wrap'>
        {eqList.map(eq => {
          return (
            <EQListItem eqObj={eq} />
          )
        })}

      </section>
    )
  }

}
