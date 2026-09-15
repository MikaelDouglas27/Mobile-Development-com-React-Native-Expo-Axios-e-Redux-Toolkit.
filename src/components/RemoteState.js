import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Button from './Button';
import { colors } from '../styles/theme';
export default function RemoteState({ loading, error, onRetry }) {
  return <View style={styles.container}>
    {loading ? <><ActivityIndicator size="large" color={colors.primary} /><Text style={styles.text}>Carregando produtos...</Text></>
      : <><Text accessibilityRole="alert" style={styles.text}>{error || 'Nenhum produto nesta categoria.'}</Text>{error && <Button title="Tentar novamente" onPress={onRetry} />}</>}
  </View>;
}
const styles = StyleSheet.create({ container: { flex: 1, minHeight: 220, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 20 }, text: { color: colors.muted, fontSize: 16, lineHeight: 24, textAlign: 'center' } });
