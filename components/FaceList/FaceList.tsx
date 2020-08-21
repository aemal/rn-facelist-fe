import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../redux/store";
import { AppActions } from "../../redux/types";
import { Text, View, FlatList, Image } from 'react-native';
import { FaceListStyles } from './Styles';
import { fetchUsers } from '../../redux/actions/usersAction';
import { IUser, IUsers } from '../../redux/types/userTypes';

interface IProps {
  users: IUser[];
  fetchUsers: any;
}

const FaceList: React.FC<IProps> = ({users, fetchUsers}) => {

  useEffect(() => {
    fetchUsers()
  });

  return (
    <View style={FaceListStyles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => {
          return (
            <View style={FaceListStyles.item}>
              <Image style={FaceListStyles.avatar}
              source={{ uri: item.avatar }} />
              <Text style={FaceListStyles.name}>{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    users: state.users.usersList
  };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, AppActions>,) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FaceList);
