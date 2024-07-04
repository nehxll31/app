import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/colors";

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Perform logout actions
    // Navigate to MainScreen
    navigation.navigate("Focus");
  };
  const handleAboutPress = () => {
    navigation.navigate("About"); 
  };
  const handleMyOrdersPress = () => {
    navigation.navigate("TrackOrder"); 
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="gray" />
      </TouchableOpacity>
      <View style={styles.profileBox}>
        <View style={styles.profileContainer}>
          <View style={styles.profileDetails}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.email}>example@bmsce.ac.in</Text>
            <TouchableOpacity>
              <Text style={styles.editProfile}>Edit Profile {">"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileImage}>
            <Ionicons name="person-circle" size={64} color="gray" />
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleMyOrdersPress}>
          <Ionicons name="time-outline" size={35} color="gray" />
          <Text style={styles.buttonsContainerText}>My orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="card-outline" size={35} color="gray" />
          <Text style={styles.buttonsContainerText}>Payment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <MenuItem title="Notifications" icon="notifications-outline" />
        <TouchableOpacity style={styles.menuItem} onPress={handleAboutPress}>
          <View style={styles.menuItemContent}>
            <Ionicons
              name="information-circle-outline"
              size={26}
              color="gray"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>About</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
        <MenuItem title="Send feedback" icon="chatbox-ellipses-outline" />
        <MenuItem title="Help & FAQs" icon="help-circle-outline" />
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <View style={styles.menuItemContent}>
            <Ionicons
              name="log-out-outline"
              size={26}
              color="gray"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Log out</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MenuItem = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuItemContent}>
        {icon && (
          <Ionicons
            name={icon}
            size={26}
            color="gray"
            style={styles.menuIcon}
          />
        )}
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="gray" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  profileBox: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 8,
    margin: 20,
    marginTop: 50,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.newg,
  },
  email: {
    color: "gray",
  },
  editProfile: {
    color: "gray",
    fontWeight: "bold",
  },
  profileImage: {
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
    height: 75,
  },
  buttonsContainerText: {
    color: colors.newg,
  },
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  menuContainer: {
    margin: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color: "#fd5050",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
