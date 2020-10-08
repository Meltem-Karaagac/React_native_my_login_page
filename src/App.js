import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    TextInput,


} from 'react-native';

import ShoppingCart from './components/ShoppingCart';
import FlatButton from "./components/button";



const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    return (
        <View style={styles.body}>
            <ShoppingCart />
            <TextInput
                style={styles.form}
                keyboardType="email-address"
                placeholder="Please enter your e-mail"
                defaultValue={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                secureTextEntry
                style={styles.form}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                defaultValue={password}
                autoCorrect={false} />
            <FlatButton text="Login" onPress={resetForm} />
            <FlatButton text="Register" onPress={resetForm} />
        </View>
    );
};
const styles = StyleSheet.create({
    body: {
        backgroundColor: "#80CBC4",
        display: "flex",
        height: 1000,

    },
    form: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        backgroundColor: "white",
        fontSize: 20,
        padding: 20,
        margin: 10,


    },
    buttons: {
        marginLeft: 100,
        marginRight: 100,
        marginBottom: 10,
        backgroundColor: "#546E7A",

    }
});

export default App; 