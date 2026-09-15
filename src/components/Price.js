import { View, Text, StyleSheet } from 'react-native';
import { discountedPrice, formatPrice } from '../utils/format';
import { colors } from '../styles/theme';

export default function Price({ product, detail = false }) {
  const hasDiscount = Number(product.discountPercentage) > 0;
  return <View style={styles.row}>
    <Text style={[styles.current, detail && styles.detail]}>
      {formatPrice(discountedPrice(product.price, product.discountPercentage))}
    </Text>
    {hasDiscount && <Text style={[styles.original, detail && styles.originalDetail]}>{formatPrice(product.price)}</Text>}
  </View>;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 6 },
  current: { fontSize: 14, fontWeight: '700', color: colors.ink },
  detail: { color: colors.error, fontSize: 22 },
  original: { fontSize: 10, color: colors.muted, textDecorationLine: 'line-through' },
  originalDetail: { fontSize: 14 },
});
