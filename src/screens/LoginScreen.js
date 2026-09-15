import { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform, useWindowDimensions, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { validateLogin } from '../utils/validation';
import Button from '../components/Button';
import { colors } from '../styles/theme';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  function handleLogin() {
    const nextErrors = validateLogin(email, password);
    setLoginError('');
    setErrors(nextErrors);
    if (!email.trim() || !password) return;
    if (Object.keys(nextErrors).length) {
      setErrors({});
      setLoginError('Usuário ou senha inválidos.');
      return;
    }
    dispatch(login({ email: email.trim().toLowerCase() }));
    setPassword('');
  }

  function updateEmail(value) {
    setEmail(value);
    setErrors(current => ({ ...current, email: undefined }));
    setLoginError('');
  }

  function updatePassword(value) {
    setPassword(value);
    setErrors(current => ({ ...current, password: undefined }));
    setLoginError('');
  }

  return <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <ScrollView contentContainerStyle={{ flexGrow: 1, minHeight: height }} keyboardShouldPersistTaps="handled">
      <View style={[styles.hero, { height: Math.max(300, Math.min(height * 0.5, 460)) }]}>
        <Text style={[styles.brand, { top: insets.top + 24 }]}>Se vista</Text>
        <View style={styles.welcome}>
          <Text style={styles.title}>Bem-vindo de volta!</Text>
          <Text style={styles.subtitle}>Insira seus dados para entrar na sua conta.</Text>
        </View>
      </View>
      <View style={styles.form}>
        {!!loginError && <Text accessibilityRole="alert" style={styles.loginError}>{loginError}</Text>}
        <Text style={styles.label}>Usuário</Text>
        <TextInput accessibilityLabel="Usuário" style={[styles.input, errors.email && styles.invalid]}
          value={email} onChangeText={updateEmail} keyboardType="email-address" autoCapitalize="none"
          autoCorrect={false} autoComplete="email" textContentType="username" />
        {!!errors.email && <Text accessibilityRole="alert" style={styles.error}>{errors.email}</Text>}
        <Text style={[styles.label, styles.passwordLabel]}>Senha</Text>
        <View style={[styles.passwordField, errors.password && styles.invalid]}>
          <TextInput accessibilityLabel="Senha" style={styles.passwordInput} value={password}
            onChangeText={updatePassword} secureTextEntry={!showPassword} autoCapitalize="none"
            autoCorrect={false} onSubmitEditing={handleLogin} returnKeyType="go" />
          <Pressable accessibilityRole="button" accessibilityLabel={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            onPress={() => setShowPassword(value => !value)} style={styles.eyeButton}>
            <View style={styles.eye}><View style={styles.pupil} />{!showPassword && <View style={styles.eyeSlash} />}</View>
          </Pressable>
        </View>
        {!!errors.password && <Text accessibilityRole="alert" style={styles.error}>{errors.password}</Text>}
        <View style={styles.submit}><Button title="Entrar" onPress={handleLogin} /></View>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.white },
  hero: { backgroundColor: colors.primary, justifyContent: 'flex-end', paddingBottom: 132 },
  brand: { position: 'absolute', left: 24, color: colors.white, fontSize: 17, fontWeight: '700' },
  welcome: { paddingHorizontal: 20, gap: 12 },
  title: { color: colors.white, fontSize: 26, fontWeight: '700', textAlign: 'center' },
  subtitle: { color: '#EEEEEE', fontSize: 13, textAlign: 'center' },
  form: { marginTop: -100, marginBottom: 32, width: '86%', maxWidth: 380, alignSelf: 'center',
    backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: 14, padding: 24 },
  label: { fontSize: 13, color: colors.ink, marginBottom: 7 },
  passwordLabel: { marginTop: 22 },
  input: { minHeight: 44, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 10,
    borderRadius: 2, fontSize: 15, color: colors.ink, backgroundColor: colors.white },
  passwordField: { flexDirection: 'row', borderWidth: 1, borderColor: colors.border, borderRadius: 2 },
  passwordInput: { flex: 1, minWidth: 0, minHeight: 44, paddingHorizontal: 10, fontSize: 15, color: colors.ink },
  eyeButton: { width: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  eye: { width: 18, height: 11, borderWidth: 1, borderColor: colors.muted, borderRadius: 9, alignItems: 'center', justifyContent: 'center' },
  pupil: { width: 4, height: 4, borderRadius: 2, backgroundColor: colors.muted },
  eyeSlash: { position: 'absolute', width: 23, height: 1, backgroundColor: colors.muted, transform: [{ rotate: '-35deg' }] },
  invalid: { borderColor: colors.error },
  error: { color: colors.error, fontSize: 11, marginTop: 6 },
  loginError: { color: colors.error, fontSize: 13, textAlign: 'center', marginBottom: 22 },
  submit: { marginTop: 24 },
});
