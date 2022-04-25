import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListAlarm from "./components/ListAlarm";
import TimePicker from "./components/TimePicker";

import { Provider } from "react-redux";
import configureStore from './store';

export default function App(){
  const store=configureStore();

  return(
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.heading}>Despertador</Text>
        <SafeAreaView>
          <ListAlarm/>
        </SafeAreaView>
        <View style={styles.timePicker}>
          <TimePicker/>
        </View>
      </View>
    </Provider>
  );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#4c669f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading:{
    fontSize: 25,
    padding: 20,
    paddingTop: 50
  },
  timePicker:{
    paddingTop: '10%',
    width: '50%',
    bottom: 20
  },
  listAlarm:{
    flex: 1,
    width: '100%'
  },
});