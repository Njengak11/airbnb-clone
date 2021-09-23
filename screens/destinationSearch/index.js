import React, {useState} from 'react';
import {View, TextInput, FlatList, Text   } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import search from '../../assets/data/search';


const DestinationSearchScreen = (props) => {

const [inputText, setInputText] = useState();

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.textInput}
            placeholder="where do you wanna go?"
            value={inputText}
            onChangeText={setInputText}
            />

            <FlatList
            data={search}
            renderItem= {({item}) => 
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Entypo name={'location-pin'} size={30}/>
                </View>
             <Text  style={styles.locationText}>{item.description}</Text>
            </View>
        }
            />
        </View>
    );
};

export default DestinationSearchScreen;

