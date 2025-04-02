import { View, Text, StyleSheet, Image, Platform } from 'react-native';

export default function ProCard({
    name,
    image,
    type,
    likes,
    ambition,
    hobbies,
}) {
    return (
        <View style={styles.card}>
           <View>
            <Text>{name}</Text>
            <Text>{likes}</Text>
           </View>

           <Image source={image} accessibilityLabel={`${name} procard`}/>

           <View>
            <Text>{type}</Text>
            <Text>{ambition}</Text>
           </View>
              <View>
                <Text>
                    Hobbies: {hobbies.join(", ")}
                </Text>
              </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 16,
      borderWidth: 2,
      padding: 16,
      margin: 10,
      ...Platform.select({
        ios: {
          shadowOffset: { width: 2, height: 2 },
          shadowColor: "#333",
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    nameCard: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 32,
    },
    name: {
      fontSize: 30,
      fontWeight: "bold",
    },
    hp: {
      fontSize: 22,
    },
    image: {
      width: "100%",
      height: 200,
      marginBottom: 16,
    },
    typeContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 40,
    },
    badge: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 20,
      borderWidth: 4,
    },
    typeEmoji: {
      fontSize: 30,
      marginRight: 12,
    },
    typeText: {
      fontSize: 22,
      fontWeight: "bold",
    },
    movesContainer: {
      marginBottom: 12,
    },
    movesText: {
      fontSize: 22,
      fontWeight: "bold",
    },
    weaknessContainer: {
      marginBottom: 8,
    },
    weaknessText: {
      fontSize: 22,
      fontWeight: "bold",
    },
  });