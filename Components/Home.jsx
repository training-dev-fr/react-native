import { Text, View, Button,StyleSheet } from 'react-native';
import { getAllProduct } from "../Service/productApi";
import { useEffect, useState } from "react";
import Product from './Product';
import { ScrollView } from 'react-native-web';


export default function Home({ navigation }) {
    const [productList, setProductList] = useState([]);
    const [productIsValid, setProductIsValid] = useState(false);
    useEffect(() => {
        getAllProduct().then(data => {
            if (data.error) {
                setProductIsValid(false);
            } else {
                setProductList(data)
                setProductIsValid(true);
            }
        })
    },[setProductList]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Liste des produits</Text>
            <ScrollView style={styles.cardList}>
                {
                    productList.map(element => <Product key={`product ${element.id}`} product={element} />)
                }
            </ScrollView>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    cardList: {
      flex: 1,
      padding: 20
    }
});