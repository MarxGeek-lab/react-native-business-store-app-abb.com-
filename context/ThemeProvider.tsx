import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";


interface ThemeContextType {
    theme: string;
    toggleTheme: (newTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

interface ThemeProviderProps {
    children: ReactNode;
}

export const GeneralProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();  
  const [theme, setTheme] = useState<string>('light');

    // Charger le thème sauvegardé depuis le stockage
    const getTheme = async () => {
        try {
          const savedTheme = await AsyncStorage.getItem('theme');
          if (savedTheme) {
            setTheme(savedTheme);
          }
        } catch (error) {
          console.log('Error loading theme:', error);
        }
    }; 

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        AsyncStorage.setItem('theme', newTheme)
    };


    useEffect(() => {
        getTheme();
    }, []);

    useEffect(() => {
      // set theme to system selected theme
      if (colorScheme) {
        //setTheme(colorScheme);
      }
    }, [colorScheme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;