import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.buttonPlus}
                    onPress={() => {
                        dispatch(increment());
                    }}
                >
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.value}>
                <Text style={styles.text}>{count}</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.buttonMoin}
                    onPress={() => {
                        dispatch(decrement());
                    }}
                >
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',

    },

    row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },

    value: {
    fontSize: 78,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 2,
    },
    text:{
        fontSize:70
    },
    textButton:{
        fontSize:70,
        color:'#fff',
    },
    buttonPlus: {
    fontSize: 70,
    padding:10,

        margin:15,
    backgroundColor: '#196F3D',
    borderRadius: 15,
    },
    buttonMoin: {
        fontSize: 70,
        padding:10,

        margin:15,
        backgroundColor: '#F01717',
        borderRadius: 15,
    }

});