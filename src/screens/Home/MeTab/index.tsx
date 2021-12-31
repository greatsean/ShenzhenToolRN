import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = {
  title: string;
};
const MeTab: React.FC<Props> = (props: Props) => {
  const {title = 'hello'} = props;
  console.log(title);
  return (
    <View style={styles.container}>
      <Text>this my perference tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
});

export default MeTab;
