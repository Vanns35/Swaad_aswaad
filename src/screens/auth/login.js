import React, { Component } from "react";
import { View, TouchableOpacity, Text, ActivityIndicator, StyleSheet, TextInput, Dimensions, AsyncStorage } from "react-native";
import Hr from 'react-native-hr-component';
import { ScrollView } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';

import Colors from '../../constants/colors';
import Translations from '../../constants/translations';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleOnPressLogin = () => {
    AsyncStorage.setItem('login', 'true');
    this.props.navigation.navigate("preferences");
  }

  handleOnPressSignup = () => {
    this.props.navigation.navigate("signUp");
  }

  render() {

    if (this.state.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Colors.DARK.LOADING}/>
        </View>
      )
    }

    return (

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

        <Text style={styles.followUsText}>{Translations.ENGLISH.LOGIN_WITH_SOCIAL_ACCOUNT}</Text>

        <View style={styles.socialView}>
          <View style={styles.socialButton}>
            <EvilIcons name="sc-facebook" size={70} color={Colors.DARK.FAINT_ORANGE} />
          </View>
          <View style={styles.socialButton}>
            <EvilIcons name="sc-google-plus" size={70} color={Colors.DARK.FAINT_ORANGE} />
          </View>
        </View>

        <Hr text="OR" style={{ paddingHorizontal: 20 }} />

        <View style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: Colors.DARK.LIGHT_GRAY,
          padding: 8,
          marginHorizontal: 20,
          marginTop: 20,
        }}>
          <TextInput
            placeholder="Mobile Number"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            secureTextEntry={this.state.passwordVisible}
            value={this.state.password}
            maxLength={20}
          />
        </View>

        <View style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: Colors.DARK.LIGHT_GRAY,
          padding: 8,
          marginHorizontal: 20,
          marginTop: 20,
        }}>
          <TextInput
            placeholder="Password (min. 6 characters)"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            secureTextEntry={this.state.passwordVisible}
            value={this.state.password}
            maxLength={20}
          />
        </View>


        <TouchableOpacity style={styles.loginBotton} onPress={() => this.handleOnPressLogin()}>
          <Text style={styles.loginBottonText}>{Translations.ENGLISH.LOGIN}</Text>
        </TouchableOpacity>

        <Text style={styles.socilaText}>{Translations.ENGLISH.FORGOT_YOUR_PASSWORD}?</Text>
        <Text style={styles.socilaSubText}>{Translations.ENGLISH.RESET_HERE}</Text>

        <View
          style={styles.dividerLine}
        />

        <Text style={styles.socilaText}>{Translations.ENGLISH.NO_ACCOUNT_YET}?</Text>
        <Text onPress={() => this.handleOnPressSignup()} style={styles.socilaSubText}>{Translations.ENGLISH.SIGNUP_NOW}!</Text>
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingBottom: 10,
    backgroundColor: Colors.DARK.WHITE,
    flex: 1,
  },
  followUsText: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
    color: Colors.DARK.DARK_GRAY
  },
  loginBotton: {
    backgroundColor: Colors.DARK.FAINT_ORANGE,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20
  },
  loginBottonText: {
    textAlign: 'center',
    color: Colors.DARK.WHITE,
    fontSize: 17,
  },
  socilaText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
  },
  socilaSubText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    color: Colors.DARK.FAINT_ORANGE,
  },
  dividerLine: {
    height: 1,
    backgroundColor: Colors.DARK.BLACK,
    marginTop: 10,
    marginHorizontal: 20
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
  },
  socialButton: {
    borderWidth: 2,
    borderColor: Colors.DARK.MEDIUM_GRAY,
    borderRadius: 25,
    shadowOffset: { width: 2, height: 2, },
    shadowColor: Colors.DARK.SHADOW_GRAY,
    shadowOpacity: 1.0,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10
  }
});