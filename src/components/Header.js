import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { colors } from '../styles/theme';
export default function Header({ onBack }) {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user?.email);
  return <View style={styles.header}>
    <View style={{ flex: 1 }}>{onBack ? <Pressable accessibilityRole="button" accessibilityLabel="Voltar ao catálogo" onPress={onBack} style={{ minHeight: 44, justifyContent: 'center' }}><Text style={styles.brand}>← Voltar</Text></Pressable>
      : <><Text style={styles.brand}>Se vista</Text><Text numberOfLines={1} style={styles.user}>Olá, {email?.split('@')[0]}</Text></>}</View>
    <Pressable accessibilityRole="button" onPress={() => dispatch(logout())} style={styles.logout}><Text style={styles.logoutText}>Sair</Text></Pressable>
  </View>;
}
const styles = StyleSheet.create({ header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderColor: colors.border }, brand: { fontSize: 25, fontWeight: '800', color: colors.ink }, user: { color: colors.muted, fontSize: 13, marginTop: 3 }, logout: { backgroundColor: colors.mint, paddingHorizontal: 18, minHeight: 44, justifyContent: 'center', borderRadius: 10 }, logoutText: { color: colors.primary, fontWeight: '700' } });
