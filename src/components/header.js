import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import NotificationIcon from "../components/notificationIcon";

export default class LoginLandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loggedIn: false,
      show: true
    };
  }

  openMenu = () => {
    this.setState({ show: true })
  }

  render() {
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
          <View style={{ marginTop: 10 }}>
            <NotificationIcon />
          </View>
        </View>
        <View
          style={styles.dividerLine}
        />
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
                        source={require('../../assets/images/profile.png')}
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
                      <Ionicons name="md-notifications-outline" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                      <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Home</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                      <Ionicons name="md-notifications-outline" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                      <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Chat With Family Member</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                      <Ionicons name="md-notifications-outline" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                      <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Switch to Ad Free Version</Text>
                    </View>
                  </View>
                  <View style={styles.dividerLine} />
                  <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                      <Ionicons name="md-notifications-outline" style={{ color: Colors.DARK.WHITE, fontSize: 20, marginRight: 10, marginTop: 5 }} />
                      <Text style={{ fontSize: 13, color: Colors.DARK.WHITE, marginTop: 5 }}>Logout</Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: Constant.COLOR.TRANSPARENT_GRAY,
    marginHorizontal: 2
  },
});