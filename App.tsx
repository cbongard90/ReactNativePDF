import { View, Dimensions } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf'

export default function App() {
  const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Pdf 
        trustAllCerts={false} 
        source={source}
        maxScale={1.0}
        minScale={1.0}
        enablePaging={true}
        style={{flex: 1, width: Dimensions.get('window').width}}
        fitPolicy={2}
      />
    </View>
  )
}