import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useAuth } from "@/contexts/authContext";

const Home = () => {
  const { user } = useAuth();
  console.log("user", user);
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={handleLogout}>
        <Typo color={colors.black}>Logout</Typo>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
