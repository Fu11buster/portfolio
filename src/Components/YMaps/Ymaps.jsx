import React from 'react';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YMap = () => (
  <YMaps>
    <Map width='50%' height='calc(100% - 200px)' defaultState={{ center: [52.287054, 104.281047], zoom: 11}}>
      <Placemark geometry={[52.287054, 104.281047]} options={{iconColor: '#a71414'}} />
    </Map>
  </YMaps>
)

export default YMap;