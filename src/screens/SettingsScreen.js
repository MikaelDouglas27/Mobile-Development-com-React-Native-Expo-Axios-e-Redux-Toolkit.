import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { colors } from '../styles/theme';

export default function SettingsScreen() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  return <SafeAreaView edges={['top', 'left', 'right']} style={styles.screen}>
    <View style={styles.content}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.account}>
        <Text style={styles.brand}>Se vista</Text>
        <Text style={styles.label}>Usuário conectado</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
      <Pressable accessibilityRole="button" onPress={() => dispatch(logout())}
        style={({ pressed }) => [styles.logout, pressed && { opacity: 0.8 }]}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </Pressable>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1, padding: 24, width: '100%', maxWidth: 600, alignSelf: 'center' },
  title: { fontSize: 22, color: colors.ink, fontWeight: '700', marginBottom: 28 },
  account: { borderWidth: 1, borderColor: colors.border, borderRadius: 4, padding: 20 },
  brand: { fontSize: 24, fontWeight: '700', color: colors.ink, marginBottom: 22 },
  label: { color: colors.muted, fontSize: 13, marginBottom: 8 },
  email: { color: colors.ink, fontSize: 16 },
  logout: { marginTop: 'auto', marginBottom: 8, minHeight: 48, backgroundColor: colors.error,
    borderRadius: 3, alignItems: 'center', justifyContent: 'center' },
  logoutText: { color: colors.white, fontSize: 15, fontWeight: '700' },
});
