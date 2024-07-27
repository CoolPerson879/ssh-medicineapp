import { Stack, useNavigation } from "expo-router";


export default function RootLayout() {
    return <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="(tabs)"/>
            <Stack.Screen name="login"/>
            <Stack.Screen name="index"/>
           </Stack>
  }

  export function FocusAwareStatusBar(props) {
    const Nav = useNavigation();
    const isFocused = Nav.isFocused();

  
    return isFocused ? <StatusBar {...props} /> : null;
  }