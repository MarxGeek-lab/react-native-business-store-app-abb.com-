import { Link } from "expo-router";
import { ThemedView } from "../ThemedView";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function WhatsappGadget () {
    return (
        <ThemedView style={styles.whatsapp}>
          <Link target='_blank' href={"whatsapp://send?text=Bonjour Abb'Store&phone=22969495554"}>
            <TabBarIcon  name={'logo-whatsapp'} color={"white"} size={40} />
          </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    whatsapp: {
        backgroundColor: Colors.common.green_whatsapp,
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000', // Utilisez un code couleur hexadécimal pour plus de cohérence
        shadowOpacity: 0.5, // Une opacité plus basse rendra l'ombre plus subtile
        shadowRadius: 4, // Une valeur de radius plus basse pour une ombre plus douce
        shadowOffset: { width: 2, height: 2 }, // Ajoutez un décalage pour une ombre réaliste sur iOS
        elevation: 5,
        position: 'absolute', // Positionnement absolu
        bottom: 20, // Marge par rapport au bas de l'écran
        right: 20,
    }
});