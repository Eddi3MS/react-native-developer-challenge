import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import FontAwesomeIcon from '@/components/FontAwesomeIcon'
import Colors from '@/constants/Colors'

const MoviesViews = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Filmes',
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesomeIcon
                    name="search"
                    size={20}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  )
}

export default MoviesViews
