import { View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
  
  export default function LandingScreen({ navigation }) {
    const logouri =  require('../../photos/shopBite.png')
    

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={logouri}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>
              Welcome to
              <View style={styles.appName}>
                <Text style={styles.appNameText}>Shop n'  Bite</Text>
              </View>
            </Text>
          </View>
  
          <TouchableOpacity
            onPress={() => {navigation.navigate("Login")
            }}>
            <View style={styles.button}>
                
                <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {navigation.navigate("Register")
            }}>
            <View style={styles.button}>
                
                <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    hero: {
      backgroundColor: '#DC661F',
      margin: 1 ,
      borderRadius: 5,
      padding: 10,
      height: "50%"
    },
    heroImage: {
      width: '100%',
      borderRadius: 10,
      height: "100%"
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      paddingVertical: 24,
      paddingHorizontal: 24,
    },
    contentHeader: {
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: '500',
      color: '#281b52',
      textAlign: 'center',
      marginBottom: 12,
      lineHeight: 40,
    },
    appName: {
      backgroundColor: '#7B3911',
      borderRadius: 50,
      paddingHorizontal: 6,
    },
    appNameText: {
      fontSize: 32,
      fontWeight: '700',
      color: '#FFBD59',
      textAlign : "justify"
    },
    text: {
      fontSize: 15,
      lineHeight: 24,
      fontWeight: '400',
      color: '#FFBD59',
      textAlign: 'center',
    },
    buttonText: {
      fontSize: 20,
      fontWeight: '500',
      color: '#FFBD59',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#7B3911',
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 20,
      },
     
  });
  
  