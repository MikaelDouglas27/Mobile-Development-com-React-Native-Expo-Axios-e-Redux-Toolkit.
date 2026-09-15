import { Pressable, View, Text, StyleSheet } from 'react-native';
import ProductImage from './ProductImage';
import Price from './Price';
import { colors } from '../styles/theme';

export default function ProductCard({ product, onPress }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={`Ver detalhes de ${product.title}`}
    onPress={onPress} style={({ pressed }) => [styles.card, pressed && { opacity: 0.75 }]}>
    <ProductImage uri={product.thumbnail} title={product.title} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
      <Text style={styles.description} numberOfLines={4}>{product.description}</Text>
      <Price product={product} />
    </View>
  </Pressable>;
}

const styles = StyleSheet.create({
  card: { flex: 1, margin: 5, backgroundColor: colors.white, borderRadius: 3,
    overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  image: { width: '100%', height: 120, backgroundColor: '#FAFAFA' },
  content: { padding: 10, gap: 7 },
  title: { color: colors.ink, fontSize: 13, lineHeight: 17, minHeight: 34, fontWeight: '700' },
  description: { color: colors.muted, fontSize: 11, lineHeight: 14, minHeight: 56 },
});
