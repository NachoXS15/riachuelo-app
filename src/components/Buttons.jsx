import { Link } from 'expo-router'
import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

export function ButtonPrimary({ children, to }) {
  return (
    <Link asChild href={to}>
      <Pressable style={{
          backgroundColor: "#43259f",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 50
        }}>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'white' }}>{children}</Text>
      </Pressable>
    </Link>
  );
}

export function ButtonDanger({ children, to }) {
  return (
    <Link asChild href={to}>
      <Pressable style={{
          backgroundColor: "#931a1a",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 50
        }}>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'white' }}>{children}</Text>
      </Pressable>
    </Link>
  );
}

export function ButtonGray({ children, to }) {
  return (
    <Link asChild href={to}>
      <Pressable style={{
          backgroundColor: "#b3b0c6",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 50
        }}>
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#000' }}>{children}</Text>
      </Pressable>
    </Link>
  );
}

