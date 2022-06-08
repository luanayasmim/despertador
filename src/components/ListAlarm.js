import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { removeAlarm } from '../actions/alarms';

function ListAlarm(props){
    const keyExtrator = ((item, index)=> index.toString());
    const renderItem = (({item})=>{
        const [date] = item.alarmNotifDAta.fire_date.split(' ');

        return(
            <ListItem style={{paddingTop: 10}}>
                <ListItem.Content>
                    <ListItem.Title>{item.time.toString()}</ListItem.Title>
                    <ListItem.Subtitle>{date}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    title='Remover'
                    color='red'
                    onPress={()=>{
                        props.delete(item.value);
                    }}
                />
            </ListItem>
        );
    });
    return(
        <View style={styles.container}>
            <FlatList
                keyExtractor={keyExtrator}
                data={props.alarms}
                renderItem={renderItem}
            />
        </View>
    );
};

const mapStateProps=((state)=>{
    return{
        alarms:state.alarms.alarms,
    };
});
const mapDispatchToProps = ((dispatch)=>{
    return{
        delete:value=>{
            dispatch(removeAlarm(value));
        }
    }
});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default connect(mapStateProps, mapDispatchToProps)(ListAlarm);