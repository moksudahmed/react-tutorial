import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://77.68.120.8:1337/stock')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data}
            keyExtractor={({ StockID }, index) => StockID}
            renderItem={({ item }) => (
              <Text>{item.StockID + '. ' + item.LTP}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
};
