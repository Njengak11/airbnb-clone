import React from 'react'
import { Text, View,Image } from 'react-native'
import styles from './styles'

const Post = (props) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.image}
            source={{uri: 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}}/>

            <Text style={styles.bedroom}>1 bed 1 bedroom</Text>

            <Text style={styles.description} numberOfLines={2}> Welcome to the MidMod Cottage! Located in the desirable Tech Terrace neighborhood close to Texas Tech University and the medical district, this precious home is the perfect combination of updates and vintage charm.</Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.newPrice}>  $30</Text>
                / night
            </Text>

            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}

export default Post;
