import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles_1} from './Users';
// import { useDispatch } from 'react-redux/es/exports';
import {useDispatch} from 'react-redux';
import {addUser, updateUser} from '../redux/UserSlice';

const AddUsers = ({navigation, route}) => {
  const data = route?.params?.data;
  const type = route?.params?.type;
  const index = route?.params?.index;
  // console.log(index)

  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    data || {
      Name: '',
      MobileNumber: '',
      Email: '',
      Address: '',
    },
  );

  const handleInputChange = (name, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const FormObjectList = [
    {
      P: 'Enter Name',
      V: formData.Name,
      F: Text => {
        handleInputChange('Name', Text);
      },
    },
    {
      P: 'Enter Email',
      V: formData.Email,
      F: Text => {
        handleInputChange('Email', Text);
      },
    },
    {
      P: 'Enter MobileNumber',
      V: formData.MobileNumber,
      F: Text => {
        handleInputChange('MobileNumber', Text);
      },
    },
    {
      P: 'Enter Address',
      V: formData.Address,
      F: Text => {
        handleInputChange('Address', Text);
      },
    },
  ];

  const onSubmit = () => {
    if(index>=0 && data){
      dispatch(updateUser({...formData,index}))
    }else{
      dispatch(addUser(formData))
    }
    navigation.goBack()
  };

  // console.log(formData)
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {FormObjectList.map((item, index) => (
        <TextInputComponent
          key={index}
          placeholder={item.P}
          value={item.V}
          onChangeText={item.F}
        />
      ))}

      <TouchableOpacity
        onPress={onSubmit}
        activeOpacity={0.5}
        style={styles_1.Button}>
        <Text style={{color: 'white'}}>{index>=0? "UPDATE NOW" : "ADD NOW"}</Text>
      </TouchableOpacity>
    </View>
  );
};

function TextInputComponent(props) {
  return <TextInput style={styles.TextInput} {...props} />;
}

const styles = StyleSheet.create({
  TextInput: {
    height: 50,
    width: '90%',
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default AddUsers;
