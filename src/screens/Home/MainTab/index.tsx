import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

type Props = {
  title: string;
};
const MainTab: React.FC<Props> = (props: Props) => {
  const {title = 'hello'} = props;
  const navigation = useNavigation();
  console.log(title);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate('MccQuery');
        }}
        title="MCC查询"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MainTab;
