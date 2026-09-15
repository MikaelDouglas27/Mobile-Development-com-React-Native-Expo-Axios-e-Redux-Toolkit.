import { useState, useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import { colors } from '../styles/theme';
export default function ProductImage({ uri, title, style }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [uri]);
  return !uri || failed
    ? <View style={[style, { alignItems: 'center', justifyContent: 'center', backgroundColor: colors.mint }]}><Text style={{ color: colors.muted }}>Imagem indisponível</Text></View>
    : <Image source={{ uri }} accessibilityLabel={title} resizeMode="contain" style={style} onError={() => setFailed(true)} />;
}
