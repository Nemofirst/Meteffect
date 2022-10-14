import { Text, View, ScrollView, StyleSheet, Image, Dimensions, ActivityIndicator,  TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
const { height } = Dimensions.get('window');
import auth from '@react-native-firebase/auth';
export class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: "",
            loading: false,
        }
    }
    Login = async (email, password) => {
        this.setState({loading: true})
        try {
            await auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    // this.props.navigation.navigate("dashboard")
                }).catch((error) => {
                    console.log(error)
                    alert("Please Enter Valid Email or Password")
                })

        } catch (error) {
            console.log(error)
        }
        this.setState({loading: false})

    }
    render() {
        return (
            <View style={styles.Main_container}>
                <ScrollView>
                    <View style={styles.logo}>
                        <Image style={styles.logo} source={require("../components/logo.png")} />
                        
                    </View>

                    <View>
                        <Text style={styles.login}>Login</Text>
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
                            style={styles.text_input}
                            secureTextEntry={true}
                        />
                    </View>
         
                    <View>
                        <TouchableOpacity onPress={() => this.Login(this.state.email, this.state.password)}
                            style={[styles.btn, { marginTop: (height * 8) / 100, paddingHorizontal: 66, paddingVertical: 10, }]}
                            activeOpacity="10">
                            <Text style={styles.btn_title} >Login</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.loading && <View>
                        <ActivityIndicator size={'large'} color="#000" />
                    </View>}


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
        height: 60,
        width:140,
        borderRadius:10
        
    },
    login: {
        marginTop: (height * 17) / 100,
        alignSelf: "center",
        fontSize: 30,
        color: "#9966E1",
        fontFamily: "NexaDemo-Bold",
        fontWeight: "bold",
    },
    text_input: {
        height: (height * 7) / 100,
        borderBottomWidth: 3,
        borderBottomColor: "#9966E1",
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
        color: "#9966E1",
        fontFamily: "NexaDemo-Bold",
        fontSize: 18,
        fontWeight: "bold",
    },
    OR_txt: {
        textAlign: "center",
        marginTop: 10,
        color: "#9966E1",
        fontSize: 12,
        fontFamily: "NexaDemo-bold"
    },
    Finger_txt: {
        textAlign: "center",
        marginTop: 8,
        color: "#9966E1",
        fontSize: 10,
        fontFamily: "NexaDemo-bold"
    },
    fprint_icn: {
        alignSelf: "center",
    },
    Dont_Acc_txt: {
        marginTop: 8,
        color: "#9966E1",
        fontSize: 13,
        fontFamily: "NexaDemo-bold"
    },
    reg_now: {
        marginTop: 8,
        color: "#9966E1",
        fontSize: 13,
        fontFamily: "NexaDemo-bold"
    }

})
export default Login