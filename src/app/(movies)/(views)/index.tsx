import MovieCard from '@/components/MovieCard'
import Colors from '@/constants/Colors'
import { useMoviesList } from '@/queries/movies'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function TabOneScreen() {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useMoviesList('batman')

  const loadNext = () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  }

  if (isLoading) {
    return <Text style={styles.loading}>Carregando..</Text>
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  if (!Array.isArray(data)) {
    return <Text>Nenhum filme encontrado.</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.imdbID}
        data={data}
        renderItem={({ item }) => <MovieCard {...item} />}
        //  onEndReached={loadNext}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        ListFooterComponent={
          isFetchingNextPage ? (
            <Text style={styles.loading}>Carregando..</Text>
          ) : null
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.light.tint,
  },
})

