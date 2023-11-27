import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
  
  export default function Home({ navigation }) {
    const logouri =  require('../../photos/shopBite.png')
    const loginIcon = require('../../photos/plate.png');

    const GifComponent = () => {
        return (
          <View style={styles.container}>
            <Image
              source={require('../../photos/giphy.gif')}
              style={styles.gif}
            />
          </View>
        );
      };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentHeader}>
            <Text style={styles.title}>
              Welcome to the{"\n"}
              <View style={styles.appName}>
                <Text style={styles.appNameText}>Shop n' Bite</Text>
              </View>
            </Text>
          </View>

        <View style={styles.hero}>
          <Image
            source={logouri}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.content}>
        <GifComponent />
        </View>
        <Button style={{width: "100%", height: 40, backgroundColor: '#7B3911', color: '#FFBD59'}}  onPress={() => navigation.navigate("Login")}>Logout</Button>
      </SafeAreaView>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    hero: {
      backgroundColor: '#DC661F',
      margin: 12,
      borderRadius: 16,
      padding: 16,
      height: "20%"
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
      textAlign : "justify"
    },
    appNameText: {
      fontSize: 32,
      fontWeight: '700',
      color: '#FFBD59',
      textAlign : "justify"
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
      gif: {
        width: "100%",
        height:"90%",
        alignItems: "center"
      }
    });