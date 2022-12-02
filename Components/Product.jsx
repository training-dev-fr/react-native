import { StyleSheet,Text, View, Image } from 'react-native';


export default function Product({product}){
    return(
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={ styles.cardHeaderText }>{product.name}</Text>
            </View>
            <View style={styles.cardBody}>
                <View style={styles.cardPicture}>
                    <Image source={{uri: product.picture}} style={{ width: 70, height: 70 }} />
                </View>
                <View style={styles.cardDescription}>
                    <Text>{product.description}</Text>
                </View>
            </View>
            <View style={styles.cardPrice}>
                <Text style={styles.cardPriceText}>{product.price} €</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      marginBottom: 10,
      border: "4px solid #1565c0",
      borderRadius: 16
    },
    cardHeader:{
        backgroundColor: "#1565c0",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 6
        
    },
    cardBody:{
        flex:1,
        flexDirection: "row"
    },
    cardHeaderText:{
        color: "white"
    },
    cardPrice: {
        border: "1px solid #1565c0",
        backgroundColor: "#1565c0",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 6
    },
    cardDescription:{
        flexWrap: 'wrap',
        flex: 1,
        padding: 8
    },
    cardPriceText:{
        color: "white"
    },
  });