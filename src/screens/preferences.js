import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { EvilIcons, Feather } from '@expo/vector-icons';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';

import Colors from '../constants/colors';
import Translations from '../constants/translations';

class Welcome extends Component {
  handleOnPressMain = () => {
    this.props.navigation.navigate("main");
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('../../assets/images/chakrafool.png')} style={{ alignSelf: 'flex-start', height: 70, width: 70 }} />

        <View style={{ flexDirection: 'row', marginTop: -20 }}>
          <View style={{ alignItems: 'center', marginLeft: 30 }}>
            <Text style={{ fontSize: 30, color: Colors.DARK.DARK_GRAY }}>{Translations.ENGLISH.WHAT_DO_YOU_LIKE}?</Text>
            <Text style={{ color: Colors.DARK.MEDIUM_GRAY }}>{Translations.ENGLISH.SELECT_YOU_FAV}.</Text>
          </View>
          <Image source={require('../../assets/images/tejpatta.png')} style={{ marginTop: -30, alignSelf: 'flex-start', height: 100, width: 50 }} />
        </View>

        <View style={styles.socialView}>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> Vegan </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> Low Carb </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> Gluten Free </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> Spicy / Tangy </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> Leafy </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> Less Oil </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> Protien rich </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> 30 min or less </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> Easy </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> Healthy </Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={{ textAlign: 'center', color: Colors.DARK.WHITE, fontWeight: 'bold', fontSize: 17 }}> No Onion & Garlic </Text>
          </View>
        </View>

        <Text style={{ marginHorizontal: 50, color: Colors.DARK.MEDIUM_GRAY, marginBottom: 10 }}>{Translations.ENGLISH.SELECT_LANGUAGE}.</Text>
        <View style={{ flexDirection: 'row', marginHorizontal: 50, marginRight: 100, marginBottom: 10, justifyContent: 'space-between' }}>
          <CircleCheckBox
            checked={true}
            labelPosition={LABEL_POSITION.RIGHT}
            label="English"
            outerSize={16}
            innerSize={8}
          />
          <CircleCheckBox
            checked={false}
            labelPosition={LABEL_POSITION.RIGHT}
            label="Hindi"
            outerSize={16}
            innerSize={8}
          />
        </View>
        <View style={{ marginHorizontal: 50 }}>
          <CircleCheckBox
            checked={false}
            labelPosition={LABEL_POSITION.RIGHT}
            label="Spanish"
            outerSize={16}
            innerSize={8}
          />
        </View>
        <TouchableOpacity style={styles.loginBotton} onPress={() => this.handleOnPressMain()}>
          <Text style={styles.loginBottonText}>{Translations.ENGLISH.LETS_COOK}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: Colors.DARK.WHITE,
  },
  socialView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 40
  },
  socialButton: {
    backgroundColor: Colors.DARK.TRANSPARENT_LIGHT_GRAY,
    borderRadius: 15,
    shadowOffset: { width: 2, height: 2, },
    shadowColor: '#c1c1c1',
    shadowOpacity: 1.0,
    paddingTop: 5,
    paddingBottom: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    height: Dimensions.get('window').width / 4.5,
    width: Dimensions.get('window').width / 4.5,
    justifyContent: 'center'
  },
  loginBotton: {
    backgroundColor: Colors.DARK.FAINT_ORANGE,
    padding: 10,
    marginHorizontal: 50,
    borderRadius: 10,
    marginTop: 20
  },
  loginBottonText: {
    textAlign: 'center',
    color: Colors.DARK.WHITE,
    fontSize: 17,
  },
});

export default Welcome;