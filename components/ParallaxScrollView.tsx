import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from './ThemedText';
import WhatsappGadget from '@/components/WhatsappWidget/WhatsappWidget';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  headerBackgroundColor?: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            headerAnimatedStyle,
          ]}>
            <ThemedView
              style={{
                width: "100%",
                borderBottomColor: "light",
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <ThemedText type='title'
                style={{
                  color: "#ff5900",
                  height: 50,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  paddingBottom: 0,
                  //justifyContent: 'center',
                  //alignSelf: 'center'
                }}>
                Abb 
                <ThemedText 
                  type='defaultSemiBold'
                  style={{
                    fontStyle: 'italic',
                    textAlign: 'center',
                  }}>.com</ThemedText>
              </ThemedText>
            </ThemedView>
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
      <WhatsappGadget />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow: 'hidden',
    height: 100,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
    overflow: 'hidden',
  },
});
