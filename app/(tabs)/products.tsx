import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Products() {
    return (
        <ParallaxScrollView>
         <ThemedView>
          <ThemedText type="title">Product</ThemedText>  
          <ThemedText type="subtitle">Our produts</ThemedText>  
         </ThemedView>
        </ParallaxScrollView>
    )
}