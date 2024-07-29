import React from 'react'
import { Pressable } from 'react-native'

export default function Button({ children, variant }) {
    const btnVariants = {
        blueBtn: 'bg-blue-400 text-white hover:bg-grey-500',
        dangerBtn: 'bg-red-400 text-white hover:bg-grey-500'
    }
    const variantClass = `px-2 py-2 rounded ${btnVariants[variant]}`
    
    return (
        <Pressable className={variantClass}>
            {children}
        </Pressable>
    )
}
