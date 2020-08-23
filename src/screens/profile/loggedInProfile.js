import React, { Component } from "react";
import { View, TouchableOpacity, Text, ActivityIndicator, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/colors';
import Translations from '../../constants/translations';
import { withNavigation } from "react-navigation";

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height / 3.2;

class loggedInProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleOnPressRateUS = () => {
    alert('Rate Us')
  }

  handleOnPressIssues = () => {
    alert('Ossues And Feedback')
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
          <Image style={{ width: 120, height: 120, alignSelf: 'center' }} source={require('../../../assets/images/profile.png')} />
          <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontSize: 18, fontWeight: 'bold' }} >User Name</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Entypo name="heart" size={20} color={Colors.DARK.FAINT_ORANGE} />
              <Text style={{ color: Colors.DARK.WHITE, fontSize: 14, fontWeight: 'bold' }} >24 {Translations.ENGLISH.LIKES}</Text>
            </View>
            <View style={{ alignItems: 'center', marginLeft: 5 }}>
              <FontAwesome name="comment" size={20} color={Colors.DARK.FAINT_ORANGE} />
              <Text style={{ color: Colors.DARK.WHITE, fontSize: 14, fontWeight: 'bold' }} >102 {Translations.ENGLISH.COMMENTS}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="group" size={20} color={Colors.DARK.FAINT_ORANGE} />
              <Text style={{ color: Colors.DARK.WHITE, fontSize: 14, fontWeight: 'bold' }} >3 {Translations.ENGLISH.MEMBERS}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={styles.buttonGroup}>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.settingButton}>
                <MaterialIcons style={{ marginLeft: 2 }} name="settings" size={23} color={Colors.DARK.FAINT_ORANGE} />
              </View>
              <Text style={{ color: Colors.DARK.FAINT_ORANGE, fontSize: 12 }}>{Translations.ENGLISH.SETTINGS}</Text>
            </View>
            <View style={{ alignItems: 'center', marginLeft: 10 }}>
              <View style={styles.settingButton}>
                <FontAwesome style={{ marginLeft: 5 }} name="user" size={23} color={Colors.DARK.FAINT_ORANGE} />
              </View>
              <Text style={{ color: Colors.DARK.FAINT_ORANGE, fontSize: 12 }}>{Translations.ENGLISH.EDIT_PROFILE}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.settingButton}>
                <FontAwesome style={{ marginLeft: 2 }} name="group" size={23} color={Colors.DARK.FAINT_ORANGE} />
              </View>
              <Text style={{ color: Colors.DARK.FAINT_ORANGE, fontSize: 12 }}>{Translations.ENGLISH.FAMILY_MEMBERS}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.settingButton}>
                <Ionicons style={{ marginLeft: 5 }} name="md-notifications-outline" size={23} color={Colors.DARK.FAINT_ORANGE} />
              </View>
              <Text style={{ color: Colors.DARK.FAINT_ORANGE, fontSize: 12 }}>{Translations.ENGLISH.NOTIFICATIONS}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity style={styles.rateUsButton} onPress={this.handleOnPressRateUS}>
            <Text style={styles.rateUsButtonText}>{Translations.ENGLISH.RATE_US_ON_PLAYSTORE}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.issuesButton} onPress={this.handleOnPressIssues}>
            <Text style={styles.issuesButtonText}>{Translations.ENGLISH.ISSUES_AND_FEEDBACK}</Text>
          </TouchableOpacity>
        </View>

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
  rateUsButton: {
    borderColor: Colors.DARK.FAINT_ORANGE,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 10
  },
  rateUsButtonText: {
    textAlign: 'center',
    color: Colors.DARK.FAINT_ORANGE,
    fontSize: 17,
  },
  issuesButton: {
    borderColor: Colors.DARK.FAINT_ORANGE,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 70,
    borderRadius: 10,
    marginTop: 10
  },
  issuesButtonText: {
    textAlign: 'center',
    color: Colors.DARK.FAINT_ORANGE,
    fontSize: 17,
  },
  settingButton: {
    borderWidth: 2,
    borderColor: Colors.DARK.FAINT_ORANGE,
    borderRadius: 50,
    shadowOffset: { width: 2, height: 2, },
    shadowColor: Colors.DARK.SHADOW_GRAY,
    shadowOpacity: 1.0,
    padding: 5,
    height: 40,
    width: 40
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  }
});

export default withNavigation(loggedInProfile)