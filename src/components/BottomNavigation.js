import { useRef } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../styles/theme';

export default function BottomNavigation({ state, navigation }) {
  const insets = useSafeAreaInsets();
  const current = state.routes[state.index].name;
  const lastCategory = useRef('masculino');
  if (current === 'masculino' || current === 'feminino') lastCategory.current = current;
  const settings = current === 'configuracoes';
  const items = [
    { label: 'Início', icon: '⌂', selected: !settings, route: lastCategory.current },
    { label: 'Configurações', icon: '⚙', selected: settings, route: 'configuracoes' },
  ];
  return <View style={[styles.bar, { paddingBottom: insets.bottom }]}>
    {items.map(item => <Pressable key={item.label} accessibilityRole="tab" accessibilityLabel={item.label}
      accessibilityState={{ selected: item.selected }} onPress={() => navigation.navigate(item.route)} style={styles.item}>
      <Text style={[styles.icon, item.selected && styles.selected]}>{item.icon}</Text>
      <Text style={[styles.label, item.selected && styles.selected]}>{item.label}</Text>
    </Pressable>)}
  </View>;
}

const styles = StyleSheet.create({
  bar: { flexDirection: 'row', borderTopWidth: 1, borderColor: colors.border, backgroundColor: colors.white },
  item: { flex: 1, minHeight: 58, alignItems: 'center', justifyContent: 'center', gap: 2 },
  icon: { color: colors.muted, fontSize: 24 },
  label: { color: colors.muted, fontSize: 11 },
  selected: { color: colors.primary, fontWeight: '700' },
});
