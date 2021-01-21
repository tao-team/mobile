import { StatusBar } from 'expo-status-bar';
import  React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import {TouchableOpacity} from "react-native-web";

let labels=[
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["+", "0","-"],
    ["*","/","C"],
    ["="]
]

//3 переменных состояния - firstOperand хранит значения переменных, display отвечает за информацию, выводимую на экран, а operation хранит ключ выбранной операции.
export default function App() {
    const [operation, setOperation] = useState(null);
    const [firstOperand, setFirstOperand] = useState("");
    const [display, setDisplay] = useState("");

    let functionMapping = {
        "+":()=>{
            setOperation(()=>(a,b)=>{return a+b})
            setFirstOperand(display);
            setDisplay("")
        },
        "-":()=>{
            setOperation(()=>(a,b)=>{return a-b})
            setFirstOperand(display);
            setDisplay("")
        },
        "*":()=>{
            setOperation(()=>(a,b)=>{return a*b});
            setFirstOperand(display);
            setDisplay("")
        },
        "/":()=>{
            setOperation(()=>(a,b)=>{return a/b});
            setFirstOperand(display);
            setDisplay("");
        },
        "C":()=>{
            setFirstOperand("");
            setOperation(null);
            setDisplay("");
        },
        "=":()=>{
            let rezult = operation(+firstOperand, +display);
            setDisplay(rezult);
        }
    }
    for (let i =0; i<10; i++) {
        functionMapping[i+""]=()=>{setDisplay(display+i)};
    }
    return (
    <View style={styles.root}>
      <View style = {styles.display}>
          <Text style={{fontSize: 40}}>
              {display}
          </Text>
      </View>
        <View style={styles.keyboard}>
        {labels.map((value, index, array)=>{
          return <View style={styles.row}>
              {value.map((item)=>{
                  return <TouchableOpacity style={styles.cell} onPress={()=>{functionMapping[item]()}}>
                      <Text style={{fontSize: 40}}>{item}</Text>
                  </TouchableOpacity>
              })}
          </View>
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
      flex: 1,
      //fontSize:40
  },
  display:{
      flex: 2,
      backgroundColor: "lightpink",
      width: "100%",
      justifyContent: "space-around",
      alignItems: "center"
  },
  keyboard:{
      flex: 5,
      width: "100%",
      backgroundColor:"#DCDCDC",
      alignItems:"center"
  },
  row:{
      flex: 1,
      flexDirection:"row",
      alignItems:"center",
      width:"100%",
  },
  cell:{
      flex:1,
      borderWidth:1,
      width:"100%",
      height:"100%",
      alignItems:"center",
    }
});