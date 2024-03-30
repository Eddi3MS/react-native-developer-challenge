import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useSingleMovie } from '@/queries/movies'
import Colors from '@/constants/Colors'

const MovieDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { data, isLoading, error } = useSingleMovie(id)

  if (isLoading) {
    return <Text style={styles.loading}>Carregando..</Text>
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  if (!data) {
    return <Text>Filme não encontrado.</Text>
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: data.Title }} />
      <Image
        source={{ uri: data.Poster }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        <Text style={styles.innerText}>Titulo : </Text>
        {data.Title}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.innerText}>Diretor : </Text>
        {data.Director}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.innerText}>Escritores : </Text>
        {data.Writer}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.innerText}>Duração : </Text>
        {data.Runtime}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.innerText}>Atores : </Text>
        {data.Actors}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.innerText}>Lançamento : </Text>
        {data.Released}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.innerText}>Faturamento : </Text>
        {data.BoxOffice}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.innerText}>Sinopse : </Text>
        {data.Plot}
      </Text>
    </ScrollView>
  )
}

export default MovieDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.light.tint,
  },
  image: {
    width: '50%',
    aspectRatio: 11 / 17,
    alignSelf: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
    textAlign: 'left',
  },
  innerText: {
    fontSize: 18,
    color: Colors.light.tint,
    fontWeight: '600',
  },
})
