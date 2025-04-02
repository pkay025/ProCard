import { View, Text, StyleSheet, Image, Platform } from 'react-native';


const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "caring":
        return { 
            borderColor: "#FF69B4", 
            emoji: "❤️" 
        };
        case "friendly":
        return { 
            borderColor: "#FFD700", 
            emoji: "😊" 
        };
        case "optimistic":
        return { 
            borderColor: "#00FF00", 
            emoji: "🌈" 
        };
        case "passionate":
        return { 
            borderColor: "#FF0000", 
            emoji: "🔥" 
        };
        case "generous":
        return { 
            borderColor: "#00FFFF", 
            emoji: "🎁" 
        };
        case "kind":
        return { 
            borderColor: "#FF4500", 
            emoji: "🤗" 
        };
        case "hopeful":
        return { 
            borderColor: "#0000FF", 
            emoji: "🌟" 
        };
        default:
        return { 
            borderColor: "#000", 
            emoji: "❓" 
        };
    }
  };
export default function ProCard({
    name,
    image,
    type,
    likes,
    ambition,
    hobbies,
}) {
    const { borderColor, emoji } = getTypeDetails(type);

    return (
        <View style={styles.card}>
           <View style={styles.nameCard}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.likes}>❤️ {likes}</Text>
           </View>

           <Image source={image} 
           accessibilityLabel={`${name} procard`}
           style={styles.image}
              resizeMode="cover"
           />

           <View style={styles.typeContainer}>
            <View style={[styles.badge, { borderColor }]}>
            <Text style={styles.typeText}>{type}</Text>
            <Text style={styles.typeEmoji}>{emoji}</Text>
            
            </View>
            
           </View>
           <View style={styles.ambitionCard}>
            <Text style={styles.ambitionText}>
                Ambition: {ambition.join(", ")}</Text>
           </View>
              <View>
                <Text style={styles.hobbiesText}>
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
    likes: {
      fontSize: 22,
    },
    image: {
      width: "100%",
      height: 300,
      marginBottom: 16,
      borderRadius: 15,
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
    ambitionCard: {
      marginBottom: 8,
        
    },
    ambitionText: {
      fontSize: 22,
      fontWeight: "bold",
    },
    hobbiesCard: {
      marginBottom: 8,
    },
    hobbiesText: {
      fontSize: 22,
      fontWeight: "bold",
    },
  });