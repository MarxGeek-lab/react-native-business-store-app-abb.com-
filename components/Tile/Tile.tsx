import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { PropsWithChildren } from "react";
import { Image, ImageSourcePropType, StyleProp, StyleSheet, ViewStyle } from "react-native";

type Props = PropsWithChildren <{
    img: ImageSourcePropType;
    name: String;
    price: number;
    key?: number;
    style?: StyleProp<ViewStyle>
  }>

export default function TileProduct ({
    style,
    img,
    name,
    price,
    key
}: Props) {
    return (
        <ThemedView style={[styles.tile, style]} key={key}>
            <Image 
                source={img}
                style={styles.productImg} />
            <ThemedText type="default">{name}</ThemedText>
            <ThemedText type="defaultSemiBold">{price} Fcfa</ThemedText>
        </ThemedView>  
        )
}

const styles = StyleSheet.create({
    tile: {
        width: '46%',
        alignItems: 'center'
    },
    productImg: {
        width: '100%',
        height: 130,
        marginBottom: 10
    },
  });