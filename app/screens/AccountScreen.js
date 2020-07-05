import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from '../components/Icon'
import ListItemSeperatorComponent from '../components/lists/ListItemSeperator'

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreem: 'Messages'
  },
];

export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Sahil Patel'
          subTitle='sahilwebdev@gmail.com'
          image={require("../assets/userimg.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreem)}
            />
            
          )}
        />
      </View>
      <ListItem title='Log Out' IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen:{
      backgroundColor: colors.light
  }
});
