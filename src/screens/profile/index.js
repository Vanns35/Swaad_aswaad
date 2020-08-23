import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, AsyncStorage, TouchableOpacity, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons, Entypo, Feather, AntDesign } from '@expo/vector-icons';

import Colors from '../../constants/colors';

import LoggedInProfile from './loggedInProfile';
import LoggedOutProfile from './loggedOutProfile';

export default class LoginLandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loggedIn: true,
      show: false
    };
  }

  componentDidMount = async() => {
    let login = await AsyncStorage.getItem('login');

    if (login == null) {
      this.setState({ loggedIn : false, loading: false})
    } else if(login == 'true') {
      this.setState({ loggedIn : true, loading: false})
    } else {
      this.setState({ loggedIn : false, loading: false})
    }
  }

  openMenu = () => {
    this.setState({ show: true })
  }

  onPressLogout = async() => {
    let keys = ['login'];
    AsyncStorage.multiRemove(keys, (err) => {
         this.props.navigation.navigate("auth");
    });
  }

  render() {

    if (this.state.loggedIn) {
      return (
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 42, backgroundColor: Colors.DARK.WHITE }}>
            <Ionicons
              onPress={() => this.openMenu()}
              name="md-menu"
              size={30}
              color={Colors.DARK.FAINT_ORANGE}
              style={{ width: 25, height: 25, marginLeft: 10, marginTop: 5 }}
            />
            <Text style={{ fontWeight: 'bold', marginTop: 5, fontSize: 20 }}>Profile</Text>
            <Ionicons name="md-notifications-outline" style={{ color: Colors.DARK.FAINT_ORANGE, fontSize: 25, marginRight: 10, marginTop: 5 }} />
          </View>
          <LoggedInProfile />

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => this.setState({ show: false })}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={1}
              onPressOut={() => this.setState({ show: false })}
            >
              <ScrollView
                directionalLockEnabled={true}
                contentContainerStyle={styles.scrollModal}
              >
                <TouchableWithoutFeedback>
                  <View style={styles.modalContainer}>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                      <TouchableOpacity style={{ marginTop: 10 }}>
                        <Image
                          source={require('../../../assets/images/profile.png')}
                          style={{ marginLeft: 5, width: 45, height: 45 }}
                        />
                      </TouchableOpacity>

                      <View style={{ marginTop: 10, marginLeft: 10 }}>
                        <View>
                          <Text style={{ color: Colors.DARK.WHITE, fontWeight: 'bold', alignSelf: 'flex-start', paddingEnd: 20 }}>User Name</Text>
                          <Text style={{ fontSize: 13, color: Colors.DARK.LIGHT_GRAY, marginTop: 2 }}>+91 9876543210</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.dividerLine} />
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <FontAwesome name="home" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Home</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Entypo name="chat" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Chat With Family Member</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Feather name="smile" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Switch to Ad Free Version</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Ionicons name="md-mail" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Ask Swaad Expert</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <FontAwesome name="group" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Invite Users to Join your Family</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Ionicons name="md-star-half" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Rate us on playstore</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <FontAwesome name="info-circle" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>About Us, Contact Information</Text>
                      </View>
                    </View>
                    <View style={styles.dividerLine} />
                    <TouchableOpacity onPress={() => this.onPressLogout()} style={{ marginHorizontal: 10, marginTop: 5 }}>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <AntDesign name="logout" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Logout</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              </ScrollView>
            </TouchableOpacity>
          </Modal>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 42, backgroundColor: Colors.DARK.WHITE }}>
            <Ionicons
              onPress={() => this.openMenu()}
              name="md-menu"
              size={30}
              color={Colors.DARK.FAINT_ORANGE}
              style={{ width: 25, height: 25, marginLeft: 10, marginTop: 5 }}
            />
            <Text style={{ fontWeight: 'bold', marginTop: 5, fontSize: 20 }}>Profile</Text>
            <Ionicons name="md-notifications-outline" style={{ color: Colors.DARK.FAINT_ORANGE, fontSize: 25, marginRight: 10, marginTop: 5 }} />
          </View>
          <LoggedOutProfile />

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => this.setState({ show: false })}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={1}
              onPressOut={() => this.setState({ show: false })}
            >
              <ScrollView
                directionalLockEnabled={true}
                contentContainerStyle={styles.scrollModal}
              >
                <TouchableWithoutFeedback>
                  <View style={styles.modalContainer}>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                      <TouchableOpacity style={{ marginTop: 10 }}>
                        <Image
                          source={require('../../../assets/images/profile.png')}
                          style={{ marginLeft: 5, width: 45, height: 45 }}
                        />
                      </TouchableOpacity>

                      <View style={{ marginTop: 10, marginLeft: 10 }}>
                        <View>
                          <Text style={{ color: Colors.DARK.WHITE, fontWeight: 'bold', alignSelf: 'flex-start', paddingEnd: 20 }}>User Name</Text>
                          <Text style={{ fontSize: 13, color: Colors.DARK.LIGHT_GRAY, marginTop: 2 }}>+91 9876543210</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.dividerLine} />
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <FontAwesome name="home" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Home</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Entypo name="chat" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Chat With Family Member</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Feather name="smile" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Switch to Ad Free Version</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Ionicons name="md-mail" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Ask Swaad Expert</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <FontAwesome name="group" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Invite Users to Join your Family</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Ionicons name="md-star-half" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Rate us on playstore</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <FontAwesome name="info-circle" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>About Us, Contact Information</Text>
                      </View>
                    </View>
                    <View style={styles.dividerLine} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('auth')} style={{ marginHorizontal: 10, marginTop: 5 }}>
                      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <AntDesign name="logout" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                        <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Logout</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              </ScrollView>
            </TouchableOpacity>
          </Modal>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  },
  modalContainer: {
    height: '100%',
    width: '70%',
    marginHorizontal: 10,
    backgroundColor: Colors.DARK.FAINT_ORANGE
  },
  dividerLine: {
    height: 2,
    backgroundColor: Colors.DARK.WHITE,
    marginHorizontal: 2
  },
});
