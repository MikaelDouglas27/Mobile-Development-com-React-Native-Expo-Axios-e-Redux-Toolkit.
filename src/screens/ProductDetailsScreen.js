import { useCallback } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getProduct } from '../services/api';
import { useRemoteData } from '../hooks/useRemoteData';
import { formatDiscount } from '../utils/format';
import ProductImage from '../components/ProductImage';
import RemoteState from '../components/RemoteState';
import Price from '../components/Price';
import { colors } from '../styles/theme';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const loader = useCallback(signal => getProduct(id, signal), [id]);
  const { data: product, loading, error, reload } = useRemoteData(loader);
  return <SafeAreaView style={styles.screen}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable accessibilityRole="button" accessibilityLabel="Voltar ao catálogo"
          onPress={() => router.canGoBack() ? router.back() : router.replace('/masculino')} style={styles.back}>
          <Text style={styles.arrow}>←</Text>
        </Pressable>
      </View>
      {loading || error ? <RemoteState loading={loading} error={error} onRetry={reload} /> :
        <ScrollView>
          <ProductImage uri={product.images?.[0] || product.thumbnail} title={product.title} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{product.title}</Text>
            <Price product={product} detail />
            {product.discountPercentage > 0 && <Text style={styles.discount}>{formatDiscount(product.discountPercentage)} de desconto</Text>}
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </ScrollView>}
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.white },
  container: { flex: 1, width: '100%', maxWidth: 800, alignSelf: 'center' },
  header: { minHeight: 52, justifyContent: 'center', paddingHorizontal: 8 },
  back: { width: 48, minHeight: 48, alignItems: 'center', justifyContent: 'center' },
  arrow: { color: colors.ink, fontSize: 28 },
  image: { width: '100%', height: 275, backgroundColor: '#F8F8F8' },
  content: { padding: 20, gap: 10 },
  title: { color: colors.ink, fontSize: 24, lineHeight: 30, fontWeight: '700' },
  discount: { color: colors.error, fontSize: 12 },
  description: { color: colors.muted, fontSize: 15, lineHeight: 23 },
});
