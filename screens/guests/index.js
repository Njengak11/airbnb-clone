import React,{useState} from 'react';
import { View,Text,Pressable } from 'react-native';
import styles from './styles';


const GuestsScreen = (props) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);


    return (
        <View>
            {/*row 1 adults */}
            <View style={styles.row}>
                {/*titles */}
            <View>
                <Text style={{fontWeight:'bold',
            marginRight:185
            }}>Adults</Text>
                <Text style={{color:'#8d8d8d'}}> Aged 18 or above</Text>
            </View>
            {/*value buttons */}
            <View style={{
                flexDirection:'row',
            }}>
                <Pressable onPress={() => setAdults(Math.max(0,adults - 1))} 
                style={styles.button}>
                <Text  style={{
                    fontSize:25,
                    alignItems:'center'
    
                }}>-</Text>
                </Pressable>
                <Text style={{
                    marginHorizontal:20,
                    fontSize:20
                }}>{adults}</Text>
                <Pressable onPress={() =>setAdults(adults + 1)} 
                style={styles.button}>
                <Text style={{
                    fontSize:20
                }}>+</Text>
                </Pressable>

            </View>
            </View>


            <View style={styles.row}>
                {/*titles */}
            <View>
                <Text style={{fontWeight:'bold',
            marginRight:185
            }}>Children</Text>
                <Text style={{color:'#8d8d8d'}}> Ages 2-12 </Text>
            </View>
            {/*value buttons */}
            <View style={{
                flexDirection:'row',
            }}>
                <Pressable onPress={() => setChildren(Math.max(0,children - 1))} 
                style={styles.button}>
                <Text  style={{
                    fontSize:25,
                    alignItems:'center'
    
                }}>-</Text>
                </Pressable>
                <Text style={{
                    marginHorizontal:20,
                    fontSize:20
                }}>{children}</Text>
                <Pressable onPress={() =>setChildren(children + 1)} 
                style={styles.button}>
                <Text style={{
                    fontSize:20
                }}>+</Text>
                </Pressable>

            </View>
            </View>


            <View style={styles.row}>
                {/*titles */}
            <View>
                <Text style={{fontWeight:'bold',
            marginRight:185
            }}>Infants</Text>
                <Text style={{color:'#8d8d8d'}}> Under 2</Text>
            </View>
            {/*value buttons */}
            <View style={{
                flexDirection:'row',
            }}>
                <Pressable onPress={() => setInfants(Math.max(0,infants - 1))} 
                style={styles.button}>
                <Text  style={{
                    fontSize:25,
                    alignItems:'center'
    
                }}>-</Text>
                </Pressable>
                <Text style={{
                    marginHorizontal:20,
                    fontSize:20
                }}>{infants}</Text>
                <Pressable onPress={() =>setInfants(infants + 1)} 
                style={styles.button}>
                <Text style={{
                    fontSize:20
                }}>+</Text>
                </Pressable>

            </View>
            </View>
        </View>
    );
};

export default GuestsScreen;