import React, { Component } from "react";
import { View, TouchableOpacity, Text, ActivityIndicator, StyleSheet, Image, Dimensions, AsyncStorage } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { EvilIcons, Feather } from '@expo/vector-icons';

import Colors from '../../constants/colors';
import Translations from '../../constants/translations';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height / 2.6;

export default class LoginLandingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleOnPressLogin = () => {
    this.props.navigation.navigate("login");
  }

  handleOnPressSignup = () => {
    AsyncStorage.setItem('login', 'false');
    this.props.navigation.navigate("main");
  }

  render() {

    if (this.state.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Colors.DARK.LOADING} />
        </View>
      )
    }

    return (

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

        <Image style={{ width: BannerWidth, height: BannerHeight }} source={require('../../../assets/images/homeImage.png')} />

        <View style={styles.card}>
          <View>
            <Text style={styles.welcomeText}>{Translations.ENGLISH.WELCOME_TO_THIS_APP}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.welcomeSubText}>{Translations.ENGLISH.WELCOME_INTRO}</Text>
          </View>
          <TouchableOpacity style={styles.loginBotton} onPress={this.handleOnPressLogin}>
            <Text style={styles.loginBottonText}>{Translations.ENGLISH.LOGIN}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupBotton} onPress={this.handleOnPressSignup}>
          <Text style={styles.signupBottonText}>{Translations.ENGLISH.CONTINUE_WITHOUT_SIGNUP}</Text>
        </TouchableOpacity>

        <Text style={styles.followUsText}>{Translations.ENGLISH.ALSO_FOLLOW_USE_ON}</Text>

        <View style={styles.socialView}>
          <View style={styles.socialButton}>
            <EvilIcons name="sc-facebook" size={50} color={Colors.DARK.FAINT_ORANGE} />
          </View>
          <View style={styles.socialButton}>
            <EvilIcons name="sc-twitter" size={50} color={Colors.DARK.FAINT_ORANGE} />
          </View>
          <View style={[styles.socialButton, { paddingLeft: 7, paddingRight: 7 }]}>
            <Feather name="instagram" size={40} color={Colors.DARK.FAINT_ORANGE} />
          </View>
          <View style={styles.socialButton}>
            <EvilIcons name="sc-youtube" size={50} color={Colors.DARK.FAINT_ORANGE} />
          </View>
        </View>

      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: Colors.DARK.WHITE,
  },
  card: {
    marginTop: -20,
    borderRadius: 20,
    paddingBottom: 15,
    backgroundColor: Colors.DARK.TRANSPARENT_GRAY,
  },
  welcomeText: {
    color: Colors.DARK.WHITE,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
    fontWeight: 'bold'
  },
  welcomeSubText: {
    color: Colors.DARK.WHITE,
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
    width: Dimensions.get('window').width / 1.4
  },
  loginBotton: {
    backgroundColor: Colors.DARK.FAINT_ORANGE,
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 20
  },
  loginBottonText: {
    textAlign: 'center',
    color: Colors.DARK.WHITE,
    fontSize: 17,
  },
  signupBotton: {
    borderColor: Colors.DARK.FAINT_ORANGE,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 10
  },
  signupBottonText: {
    textAlign: 'center',
    color: Colors.DARK.FAINT_ORANGE,
    fontSize: 17,
  },
  followUsText: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  socialButton: {
    backgroundColor: Colors.DARK.TRANSPARENT_LIGHT_GRAY,
    borderRadius: 15,
    shadowOffset: { width: 2, height: 2, },
    shadowColor: Colors.DARK.SHADOW_GRAY,
    shadowOpacity: 1.0,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10
  },
});