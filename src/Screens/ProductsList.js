import React, { useEffect, useState } from "react";

import { FlatList } from "react-native";
import Products from '../data/Products';

export function ProductsList() {
    
    function renderProduct({item: product}) {
        return (
            <Product
                {...product}
                onPress={() => {
                    Navigation.navigate('ProductDetails', {productID: product.id})
                }}
            />
        )
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products())
    })

    return (
        <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.topString()}
            data={products}
            renderItem={renderProduct}
        />
    )
}