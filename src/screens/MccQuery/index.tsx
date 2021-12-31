import axios from 'axios';
import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';

type Props = {};
const MccQuery: React.FC<Props> = () => {
  const [mccCode, setMccCode] = useState<string>('');

  const doQuery = useCallback(async () => {
    console.log(mccCode);
    const respData = await axios(
      'https://open.unionpay.com/tjwx/api/mcc/mchntTp',
      {
        headers: {
          Referer: 'https://open.unionpay.com/tjwx/openapi/mchnt-mcc.html',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        data: {mchntTp: mccCode},
      },
    );

    // const body = new FormData();
    // body.append('mchntTp', mccCode);
    // const respData = await fetch(
    //   'https://open.unionpay.com/tjwx/api/mcc/mchntTp',
    //   {
    //     referrer: 'https://open.unionpay.com/tjwx/openapi/mchnt-mcc.html',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       Referer: 'https://open.unionpay.com/tjwx/openapi/mchnt-mcc.html',
    //     },
    //     method: 'POST',
    //     body,
    //   },
    // );
    console.log(respData, '>>>reponse data');

    // {
    //     body?: BodyInit_ | undefined;
    //     credentials?: RequestCredentials_ | undefined;
    //     headers?: HeadersInit_ | undefined;
    //     integrity?: string | undefined;
    //     keepalive?: boolean | undefined;
    //     method?: string | undefined;
    //     mode?: RequestMode_ | undefined;
    //     referrer?: string | undefined;
    //     window?: any;
    //     signal?: AbortSignal | undefined;
    // }
  }, [mccCode]);
  const onChangeMccText = useCallback(
    text => {
      if (text.length === 4) {
        setMccCode(text);
        doQuery();
      }
    },
    [doQuery, setMccCode],
  );
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        style={styles.mccBox}
        onChangeText={onChangeMccText}
      />
      <Button onPress={doQuery} title="MCC查询" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  mccBox: {
    height: 50,
    backgroundColor: '#aaaaaa',
  },
});

export default MccQuery;
