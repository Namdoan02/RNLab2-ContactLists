import React,{useState,useEffect} from "react";
import { StyleSheet } from "react-native";
import {fetchRandomContact} from '../utils/api';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import color from '../utils/colors';

const Profile = ({ route }) => {
    const contact = route.params;
    useEffect(() => {
      fetchRandomContact().then((contact) => setContact(contact));
    }, []);
    const { avatar, name, email, phone, cell } = contact;
  
    return (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailsSection}>
          <DetailListItem icon="mail" title="Email" subtitle={email} />
          <DetailListItem icon="phone" title="Work" subtitle={phone} />
          <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
        </View>
      </View>
    );
  };
  
  export default Profile;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    avatarSection: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.blue,
    },
    detailsSection: {
      flex: 1,
      backgroundColor: "white",
    },
  });
