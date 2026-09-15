import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';
export default function Button({ title, onPress, secondary = false, ...props }) {
  return <Pressable accessibilityRole="button" onPress={onPress} {...props}
    style={({ pressed }) => [styles.button, secondary && styles.secondary, pressed && { opacity: 0.75 }]}>
    <Text style={[styles.text, secondary && { color: colors.primary }]}>{title}</Text>
  </Pressable>;
}
const styles = StyleSheet.create({
  button: { minHeight: 48, paddingHorizontal: 20, paddingVertical: 14, borderRadius: 3, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  secondary: { backgroundColor: colors.mint }, text: { color: colors.white, fontSize: 16, fontWeight: '700' },
});
