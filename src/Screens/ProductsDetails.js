import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useContext, useEffect, useState} from 'react';

import {CartContext} from "../data/CartContext";
import { getProduct } from '../data/Products';

export function ProductDetails({route}) {
    
    const {productId} = route.params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProduct(productId))
    })

    const {addItemToCart} = useContext(CartContext)

    function onAddToCart() {
        addItemToCart(product.id)
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={product.image} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Button onPress={onAddToCart} title="Add To Cart" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
        },
        image: {
        width: '100%',
        aspectRatio: 1
        },
        infoContainer: {
            padding: 16
        },
        name: {
            fontSize: 22,
            fontWeight: 'bold',
        },
        price: {
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 8,
        },
        description: {
            fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
        },
    });