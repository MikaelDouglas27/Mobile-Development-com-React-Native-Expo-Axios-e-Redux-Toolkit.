import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider, useSelector } from 'react-redux';
import { store } from '../src/store';
function Navigation() {
  const user = useSelector(state => state.auth.user);
  return <><StatusBar style={user ? "dark" : "light"} /><Stack screenOptions={{ headerShown: false }}>
    <Stack.Protected guard={!user}><Stack.Screen name="index" /></Stack.Protected>
    <Stack.Protected guard={!!user}><Stack.Screen name="(catalog)" /><Stack.Screen name="product/[id]" /></Stack.Protected>
  </Stack></>;
}
export default function RootLayout() { return <Provider store={store}><Navigation /></Provider>; }
