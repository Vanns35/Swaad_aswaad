//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/colors';

const profileWidth = 70;
const profileHeight = 70;
const imageWidth = Dimensions.get('window').width - 90;

export default class CustomSidebarMenu extends Component {

  constructor() {
    super();
    this.state = {
      image: "",
      userCredentialId: '',
      type: '',
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      mobileNumber: '',
      Iscompany: false,
      show: false,
      getImage: '',
      IsdCode: '91',
      showSubMenu: false,
    }

    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://cmsweb.m-staging.in/Equip9/e9/FileServer/StaticImages/ProfileImage.png';

    this.items = [
      {
        navOptionThumb: <Image source={require("../../assets/favicon.png")} style={{ width: 20, height: 20 }} />,
        navOptionName: 'home',
        screenToNavigate: 'home',
      },
      {
        navOptionThumb: <Image source={require("../../assets/favicon.png")} style={{ width: 20, height: 20 }} />,
        navOptionName: 'Logout',
        screenToNavigate: 'home',
      },
    ];

    this.arrowColor = Colors.DARK.BLACK
  }

  handleLogout = () => {
    this.props.navigation.navigate('auth');
    this.props.navigation.closeDrawer();
  }

  render() {
    let image = this.state.image;
    return (
      <ScrollView>
        <View style={styles.sideMenuContainer}>
          {/*Top Large Image */}
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity>
              <Image
                source={image ? { uri: image } : { uri: this.proileImage }}
                style={styles.sideMenuProfileIcon}
              />
            </TouchableOpacity>
            <View style={{ marginTop: 20, marginLeft: 10, flex: 1 }}>

              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 13, color: Colors.DARK.LIGHT_GRAY, marginTop: 2 }}>+{this.state.IsdCode} {this.state.mobileNumber}</Text>
                </View>
                <TouchableOpacity style={{ marginTop: 6 }}>
                  <View>
                    <Text style={{ marginTop: 4, borderRadius: 8, backgroundColor: '#1e3264', color: Colors.DARK.WHITE, alignSelf: 'flex-start', paddingStart: 20, paddingEnd: 20, padding: 1.2, textAlign: 'center' }}>{this.state.businessType}</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </View>
          {/*Divider between Top Image and Sidebar Option*/}
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#e2e2e2',
              marginTop: 15,
            }}
          />
          {/*Setting up Navigation Options from option array using loop*/}

          <View style={{ width: '100%' }}>
            {this.items.map((item, key) => {

              let viewVariable = <TouchableOpacity onPress={() => {
                global.currentScreenIndex = key;
                if (item.navOptionName == 'Logout') {
                  this.handleLogout();
                } else {
                  this.props.navigation.navigate(item.screenToNavigate);
                  this.props.navigation.closeDrawer();
                }
              }}>
                <View
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: global.currentScreenIndex === key ? Colors.DARK.HEADER_ORANGE : Colors.DARK.WHITE,
                  }}
                  key={key}>
                  <View style={{ flexDirection: "row", }}>
                    <Text style={{ marginRight: 10, marginLeft: 20, color: global.currentScreenIndex === key ? Colors.DARK.WHITE : Colors.DARK.LIGHT_GRAY, }}>
                      {item.navOptionThumb}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        paddingTop: 3,
                        marginTop: 10,
                        color: global.currentScreenIndex === key ? Colors.DARK.WHITE : Colors.DARK.BLACK,
                      }}>
                      {item.navOptionName}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              return viewVariable
            })}
          </View>

        </View>
      </ScrollView>
    );
  }

}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: imageWidth,
    height: '100%',
    backgroundColor: Colors.DARK.WHITE,
    alignItems: "flex-start",
    paddingTop: 20,

  },
  sideMenuProfileIcon: {
    width: profileWidth,
    height: profileHeight,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 50,
    alignSelf: 'center'
  },
});