import { useCallback } from 'react';
import { View, Text, FlatList, Pressable, useWindowDimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { getProducts } from '../services/api';
import { useRemoteData } from '../hooks/useRemoteData';
import ProductCard from '../components/ProductCard';
import RemoteState from '../components/RemoteState';
import { colors } from '../styles/theme';

export default function ProductsScreen({ group }) {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const columns = width >= 900 ? 4 : width >= 650 ? 3 : 2;
  const loader = useCallback(signal => getProducts(group, signal), [group]);
  const { data, loading, error, reload } = useRemoteData(loader);
  return <SafeAreaView edges={['top', 'left', 'right']} style={styles.screen}>
    <View style={styles.container}>
      <View style={styles.tabs}>
        {[['masculino', 'Produtos Masculinos'], ['feminino', 'Produtos Femininos']].map(([key, label]) =>
          <Pressable key={key} accessibilityRole="tab" accessibilityState={{ selected: group === key }}
            onPress={() => router.navigate(`/${key}`)} style={[styles.tab, group === key && styles.activeTab]}>
            <Text style={[styles.tabText, group === key && styles.activeText]}>{label}</Text>
          </Pressable>)}
      </View>
      {loading || error ? <RemoteState loading={loading} error={error} onRetry={reload} /> :
        <FlatList key={columns} data={data || []} numColumns={columns} keyExtractor={item => String(item.id)}
          contentContainerStyle={styles.list} refreshing={loading} onRefresh={reload}
          renderItem={({ item }) => <ProductCard product={item}
            onPress={() => router.push({ pathname: '/product/[id]', params: { id: String(item.id) } })} />}
          ListEmptyComponent={<RemoteState />} />}
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.white },
  container: { flex: 1, width: '100%', maxWidth: 1100, alignSelf: 'center' },
  tabs: { flexDirection: 'row', borderBottomWidth: 1, borderColor: colors.border },
  tab: { flex: 1, minHeight: 48, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 6, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  activeTab: { borderBottomColor: colors.primary },
  tabText: { color: colors.muted, fontSize: 12 },
  activeText: { color: colors.ink, fontWeight: '700' },
  list: { padding: 11, paddingBottom: 20 },
});
