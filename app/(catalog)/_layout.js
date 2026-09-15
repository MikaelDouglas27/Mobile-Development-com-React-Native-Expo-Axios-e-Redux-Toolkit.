import { Tabs } from 'expo-router';
import BottomNavigation from '../../src/components/BottomNavigation';

export default function CatalogLayout() {
  return <Tabs initialRouteName="masculino" tabBar={props => <BottomNavigation {...props} />}
    screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="masculino" options={{ title: 'Produtos Masculinos' }} />
    <Tabs.Screen name="feminino" options={{ title: 'Produtos Femininos' }} />
    <Tabs.Screen name="configuracoes" options={{ title: 'Configurações' }} />
  </Tabs>;
}
