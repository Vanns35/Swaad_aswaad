import React, { Component } from "react";
import { View, TouchableOpacity, Text, ActivityIndicator, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../constants/colors';
import Translations from '../../constants/translations';
import { withNavigation } from "react-navigation";

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height / 3.2;

class loggedOutProfile extends Component {

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
    this.props.navigation.navigate("signUp");
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

        <Image style={{ width: BannerWidth, height: BannerHeight }} source={require('../../../assets/profilebg.png')} />

        <View style={styles.card}>
          <Image style={{ width: 120, height: 120, alignSelf: 'center' }} source={require('../../../assets/images/noProfile.png')} />
        </View>
        <View style={styles.userCard}>
          <FontAwesome name="user-circle-o" size={90} color={Colors.DARK.BLACK} />
        </View>

        <View style={{ marginTop: -23 }}>
          <Text style={{ color: Colors.DARK.MEDIUM_GRAY , marginHorizontal: 50, textAlign: 'center', fontSize: 18 }} >{Translations.ENGLISH.DISCOVER_TEXT}!</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity style={styles.loginBotton} onPress={this.handleOnPressSignup}>
            <Text style={styles.loginBottonText}>{Translations.ENGLISH.SIGNUP}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: Colors.DARK.DARK_GRAY, marginTop: 3, marginHorizontal: 60, fontSize: 12, textAlign: 'center' }}>{Translations.ENGLISH.ACCEPTANCE}.</Text>

        <Text style={styles.socilaText}>{Translations.ENGLISH.ALREADY_HAVE_AN_AACOUNT}?</Text>
        <Text onPress={this.handleOnPressLogin} style={styles.socilaSubText}>{Translations.ENGLISH.LOG_IN_HERE}</Text>
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK.WHITE,
  },
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 10
  },
  userCard: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 10,
    alignItems: 'center'
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
    fontSize: 17,
    textAlign: 'center',
    marginTop: 30,
    color: Colors.DARK.MEDIUM_GRAY
  },
  socilaSubText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    color: Colors.DARK.FAINT_ORANGE,
  },
});

export default withNavigation(loggedOutProfile);