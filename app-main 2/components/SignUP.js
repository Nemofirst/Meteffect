import { Text, View, ScrollView, StyleSheet, Image, Dimensions, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
const { height, width } = Dimensions.get('window');
import auth from '@react-native-firebase/auth';
export class RegisterNow extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
        }
    }

    SignUP = async (email, password) => {
        this.setState({ loading: true })
        await auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate("Login")
            }).catch((error) => {
                console.log(error)
                alert("Email already exist Or Password Length is less than 6 char")
            })
        this.setState({ loading: false })
    }
    goToLogin = () => {
        this.props.navigation.navigate("Login")
    }
    render() {
        return (
            <View style={styles.Main_container}>
                <ScrollView>
                    <View style={styles.logo}>
                        <Image style={styles.logo} source={require("../components/logo.png")} />
                    </View>
                    <View>
                        <Text style={styles.login}>Sign Up</Text>
                    </View>
                    <View style={styles.input_Sec_2}>
                        <TextInput
                            onChangeText={(text) => { this.setState({ email: text }) }}
                            placeholder='Enter Your Email'
                            style={styles.text_input}
                        />
                    </View>
                    <View style={styles.input_Sec_2}>
                        <TextInput
                            onChangeText={(text) => { this.setState({ password: text }) }}
                            placeholder='Enter Your Password'
                            secureTextEntry={true}
                            style={styles.text_input}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.SignUP(this.state.email, this.state.password)}
                            style={[styles.btn, { marginTop: (height * 8) / 100, paddingHorizontal: 66, paddingVertical: 10, }]}
                            activeOpacity="10">
                            <Text style={styles.btn_title} onPress={this.gotoDashboard}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.loading && <View>
                        <ActivityIndicator size={'large'} color="#000" />
                    </View>}
                    <View>
                        <TouchableOpacity
                            style={[styles.btn, { marginTop: (height * 4) / 100, paddingHorizontal: 73, paddingVertical: 10, }]}
                            activeOpacity="10">
                            <Text style={styles.btn_title} onPress={() => this.goToLogin()}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Main_container: {
        height: '100%',
        width: "100%",
        // backgroundColor: "red",
    },
    logo: {
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: (height * 3) / 100,
        height: 65,
        width:140,
        borderRadius:10
    },
    login: {
        marginTop: (height * 12) / 100,
        alignSelf: "center",
        fontSize: 30,
        color: '#39004d',
      
    },
    text_input: {
        height: (height * 8) / 100,
        borderBottomWidth: 3,
        borderBottomColor: "#730099",
        width: "76%",
        alignSelf: "center",
    },
    input_section: {
        marginTop: (height * 6) / 100
    },
    input_Sec_2: {
        marginTop: (height * 4) / 100
    },
    Check_boxtxt: {
        marginLeft: 3,
    },
    Check_View: {
        flexDirection: "row",
        width: "76%",
        height: 40,
        marginTop: 10,
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "baseline"
    },
    btn: {
        alignSelf: 'center',
        paddingVertical: 15,
        backgroundColor: "#9966E1",
        borderRadius: 46,
        textAlign: 'center'
    },
    btn_title: {
        color: "#FFFFFF",
        fontFamily: "NexaDemo-Bold",
        fontSize: 18,
        fontWeight: "bold",
    },
    OR_txt: {
        textAlign: "center",
        marginTop: 10,
        color: "#949494",
        fontSize: 12,
        fontFamily: "NexaDemo-bold"
    },
    Finger_txt: {
        textAlign: "center",
        marginTop: 8,
        color: "#94A449",
        fontSize: 10,
        fontFamily: "NexaDemo-bold"
    },
    fprint_icn: {
        alignSelf: "center",
    },
    Dont_Acc_txt: {
        marginTop: 8,
        color: "#3F7D56",
        fontSize: 13,
        fontFamily: "NexaDemo-bold"
    },
    reg_now: {
        marginTop: 8,
        color: "#94A449",
        fontSize: 13,
        fontFamily: "NexaDemo-bold"
    }

})
export default RegisterNow;