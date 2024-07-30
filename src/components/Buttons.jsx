import { Link } from 'expo-router'
import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

export default function ButtonVar({ children, variant = 'primary', to }) {
    const selectedVariantStyle = btnVariants[variant] || btnVariants.primary;
    
    return (
      <Link asChild href={to}>
        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'gray' : "#3b82f6",
            paddingVertical: selectedVariantStyle.paddingVertical,
            paddingHorizontal: selectedVariantStyle.paddingHorizontal,
            borderRadius: selectedVariantStyle.borderRadius,
          }
        ]}>
          <Text style={{fontSize: 16, textAlign: 'center' }}>{selectedVariantStyle.backgroundColor}</Text>
        </Pressable>
      </Link>
    );
  }

const btnVariants = StyleSheet.create({
    primary: {
        backgroundColor: '#3b82f6',
        hoverBackgroundColor: '#1e40af',
        color: '#ffffff',
    },
    secondary: {
        backgroundColor: '#6b7280',
        hoverBackgroundColor: '#374151',
        color: '#ffffff',
    },
    success: {
        backgroundColor: '#10b981',
        hoverBackgroundColor: '#047857',
        color: '#ffffff',
    },
    danger: {
        backgroundColor: '#ef4444',
        hoverBackgroundColor: '#b91c1c',
        color: '#ffffff',
    },
})
