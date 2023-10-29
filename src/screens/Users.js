import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { deleteUser } from '../redux/UserSlice';
import {useDispatch} from 'react-redux';

const Users = ({navigation}) => {
  const users = useSelector(state => state.user);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <FlatList
        data={users.data}
        renderItem={({item,index}) => <SingleUser index={index} item={item} navigation={navigation}/>}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('AddUsers')}
        activeOpacity={0.5}
        style={styles_1.Button}>
        <Text style={{color: 'white'}}>Add New User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Users;

export const styles_1 = StyleSheet.create({
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    alignSelf: 'flex-end',
  },
  Button_2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 35,
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    borderRadius:7
  },
  Box: {
    justifyContent: 'center',
    width: 350,
    borderRadius: 7,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    borderWidth:1,
    marginBottom:10
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
  },
});

export function SingleUser({item,navigation,index}) {
    const dispatch = useDispatch();
  return (
    <View style={styles_1.Box}>
      <View style={{flex: 7}}>
        <Text style={styles_1.textStyle}>Name : {item.Name}</Text>
        <Text style={styles_1.textStyle}>Email :{item.Email}</Text>
        <Text style={styles_1.textStyle}>
          PhoneNumber : {item.MobileNumber}
        </Text>
        <Text style={styles_1.textStyle}>Address : {item.Address}</Text>
      </View>
      <View style={{flex: 3,justifyContent:'space-evenly'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddUsers',{type:'edit',data:item,index})}
        activeOpacity={0.5}
        style={styles_1.Button_2}>
        <Text style={{color: 'white'}}>Edit User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(deleteUser(index))}
        activeOpacity={0.5}
        style={styles_1.Button_2}>
        <Text style={{color: 'white'}}>Delete</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
