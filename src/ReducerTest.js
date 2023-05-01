import { useReducer, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const initState = 0;

//action 만들기
const CountType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case CountType.INCREMENT:
      return state + 1;
    case CountType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const ReducerTest = () => {
  // const [result, setResult] = useState(0);
  const [result, dispatch] = useReducer(reducer, initState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result}</Text>

      <Button
        title={'+'}
        onPress={() => dispatch({ type: CountType.INCREMENT })}
      />
      <Button
        title={'-'}
        onPress={() => dispatch({ type: CountType.DECREMENT })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default ReducerTest;
