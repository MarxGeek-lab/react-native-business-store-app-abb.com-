import { StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeContext } from '../../context/ThemeProvider';

export default function TabTwoScreen() {
  const {theme, toggleTheme} = useThemeContext();

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  };

  return (
    <ParallaxScrollView showHeader={false}>
      <ThemedView style={styles.container}>
        <ThemedText type="pageTitle">Réglages</ThemedText>
        <ThemedView>
          <TouchableOpacity
            onPress={handleToggleTheme}
            style={{
              marginTop: 10,
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: theme === 'dark' ? 'rgb(210,210,210)' : '#000',
              borderRadius: 30
            }}>
            <ThemedText style={{textAlign: 'center'}}>
              Passer en mode {theme === 'light' ? 'Clair' : 'Sombre'}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
     {/*  <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
          to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ''
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
