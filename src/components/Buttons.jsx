import { Link } from 'expo-router'
import { styled } from 'nativewind';
import React from 'react'
import { Pressable, Text } from 'react-native'

const StylesPressable = styled(Pressable)


export function ButtonPrimary({ children, to }) {
  return (
    <Link asChild href={to}>
      <StylesPressable className='bg-blue-900 py-2 px-5 rounded-full active:bg-black'>
        <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}>{children}</Text>
      </StylesPressable>
    </Link>
  );
}

export function ButtonDanger({ children, to }) {
  return (
    <Link asChild href={to}>
      <StylesPressable className='bg-red-700 py-2 px-5 rounded-full active:bg-black'>
        <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}>{children}</Text>
      </StylesPressable>
    </Link>
  );
}

export function ButtonGray({ children, to }) {
  return (
    <Link asChild href={to}>
      <StylesPressable className='bg-slate-400 py-2 px-5 rounded-full active:bg-black'>
        <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}>{children}</Text>
      </StylesPressable>
    </Link>
  );
}

