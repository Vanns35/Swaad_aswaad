import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import Colors from '../constants/colors';

class notificationIcon extends Component {

    constructor() {
        super();
        this.state = {
            NotificationCnt: 0,
        }
    }

    render() {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', }} onPress={this.handleOnPressNotificationScreens}>
                {this.state.NotificationCnt ?
                    <View style={{
                        position: 'absolute', height: 20, width: 20, borderRadius: 15,
                        backgroundColor: 'rgba(95,197,123,0.8)', right: 10, bottom: 10, alignItems: 'center', justifyContent: 'center', zIndex: 2000,
                    }}>
                        <Text style={{ color: Colors.DARK.WHITE, fontWeight: 'bold' }}>{this.state.NotificationCnt}</Text>
                    </View>
                    :
                    null
                }
                <View style={{ marginLeft: 7, marginEnd: 20 }}>
                    <Ionicons name="md-notifications-outline" style={{ color: Colors.DARK.FAINT_ORANGE, fontSize: 25, }} />
                </View>
            </TouchableOpacity>
        );
    }
}


export default withNavigation(notificationIcon);