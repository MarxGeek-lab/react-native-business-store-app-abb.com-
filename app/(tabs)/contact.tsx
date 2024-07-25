import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TabBarIcon2 } from "@/components/navigation/TabBarIcon2";
import { Colors } from "@/constants/Colors";
import { Button, StyleSheet } from "react-native";

export default function Products() {
    return (
        <ParallaxScrollView>
            <ThemedView style={styles.container}>
                <ThemedText type="pageTitle">Contact</ThemedText>
                <ThemedView style={styles.business}>
                    <TabBarIcon2 name={'business'} color={Colors.light.icon} size={50} />
                    <ThemedView style={styles.businnesText}>
                        <ThemedText type="subtitle">Abraham Blessing'</ThemedText>
                        <ThemedText style={styles.store}>store</ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.contactBlock}>
                    <ThemedView style={styles.contact}>
                        <TabBarIcon2 style={styles.contactIcon} name={'call-outline'} size={50} color={Colors.light.icon} />
                        <ThemedText>+229 69 49 55 54</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.contact}>
                        <TabBarIcon2 style={styles.contactIcon} name={'logo-whatsapp'} color={Colors.light.icon} size={50} />
                        <ThemedText>+229 69 49 55 54</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.contact}>
                        <TabBarIcon2 style={styles.contactIcon} name={'mail-outline'} color={Colors.light.icon} size={50} />
                        <ThemedText>rsonnon@gmail.com</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.contact}>
                        <TabBarIcon2 style={styles.contactIcon} name={'location-outline'} color={Colors.light.icon} size={50} />
                        <ThemedText>Godomey, Atlantique, Bénin</ThemedText>
                    </ThemedView>
                </ThemedView>
                <Button title="Envoyer nous un mail" />
            </ThemedView>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    business: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 20,
        gap: 6,
        width: '100%'
    },
    businnesText: {
        flexDirection: 'row',
        gap: 5,
    },
    store: {
        fontStyle: 'italic',
        color: Colors.orange.color,
        fontSize: 24,
        fontWeight: 'bold',
        width: 100
    },
    contactBlock: {
        gap: 10,
        marginBottom: 30
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    contactIcon: {
        fontSize: 22,
    }
})