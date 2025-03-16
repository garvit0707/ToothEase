import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Svg, { Path, Text as SvgText } from 'react-native-svg';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SelectCountry } from 'react-native-element-dropdown';

const teethData = [
  // Upper Teeth (Reduced Size for Better Fit)
  { id: 1, d: "M50 60 Q60 40 70 60" },
  { id: 2, d: "M70 60 Q80 35 90 60" },
  { id: 3, d: "M90 60 Q100 30 110 60" },
  { id: 4, d: "M110 60 Q120 25 130 60" },
  { id: 5, d: "M130 60 Q140 20 150 60" },
  { id: 6, d: "M150 60 Q160 15 170 60" },
  { id: 7, d: "M170 60 Q180 10 190 60" },
  { id: 8, d: "M190 60 Q200 5 210 60" },
  { id: 9, d: "M210 60 Q220 5 230 60" },
  { id: 10, d: "M230 60 Q240 10 250 60" },
  { id: 11, d: "M250 60 Q260 15 270 60" },
  { id: 12, d: "M270 60 Q280 20 290 60" },
  { id: 13, d: "M290 60 Q300 25 310 60" },
  { id: 14, d: "M310 60 Q320 30 330 60" },
  { id: 15, d: "M330 60 Q340 35 350 60" },
  { id: 16, d: "M350 60 Q360 40 370 60" },

  // Lower Teeth (Reduced Size for Better Fit)
  { id: 17, d: "M50 180 Q60 200 70 180" },
  { id: 18, d: "M70 180 Q80 205 90 180" },
  { id: 19, d: "M90 180 Q100 210 110 180" },
  { id: 20, d: "M110 180 Q120 215 130 180" },
  { id: 21, d: "M130 180 Q140 220 150 180" },
  { id: 22, d: "M150 180 Q160 225 170 180" },
  { id: 23, d: "M170 180 Q180 230 190 180" },
  { id: 24, d: "M190 180 Q200 235 210 180" },
  { id: 25, d: "M210 180 Q220 230 230 180" },
  { id: 26, d: "M230 180 Q240 225 250 180" },
  { id: 27, d: "M250 180 Q260 220 270 180" },
  { id: 28, d: "M270 180 Q280 215 290 180" },
  { id: 29, d: "M290 180 Q300 210 310 180" },
  { id: 30, d: "M310 180 Q320 205 330 180" },
  { id: 31, d: "M330 180 Q340 200 350 180" },
  { id: 32, d: "M350 180 Q360 195 370 180" }
];

const dropdown_data = [
  {
    value:1,
    label:"Tooth Decay"
  },
  {
    value:2,
    label:"Tooth fix"
  },
  {
    value:3,
    label:"Tooth replace"
  },
  {
    value:4,
    label:"Tooth filling"
  },
  {
    value:5,
    label:"Tooth remove"
  },

]

const dropdown_data2 = [
  {
    value:1,
    label:"2 problem"
  },
  {
    value:2,
    label:"continous pain"
  },
  {
    value:3,
    label:"brushing issue"
  },
]

const MedicalRecord = () => {

  const refRBSheet = useRef();
  const [country, setCountry] = useState('1');
  const [secondProblem,setSecondProblem] = useState("1")
  const [selectedTeeth, setSelectedTeeth] = useState([]);
  const [count,setCount] = useState(0)

  const handlePress = (id) => {
    setSelectedTeeth(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
    setCount(count+1)
  };

  const handlePressed=()=>{
    refRBSheet.current.open()
  }

  let data = ""
  if (selectedTeeth>16){
    if (selectedTeeth>24){
      data = "Lower Right Teeth"
    }
    data = "Lower Left Teeth"
  }
  else 
    if (selectedTeeth>8){
    data = "Upper Right Teeth"
  }
  data = "Upper Left Teeth"

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap on a tooth to select/deselect</Text>
      <Svg height="250" width="450">
        {teethData.map(({ id, d }) => (
          <>
            <Path
              key={id}
              d={d}
              fill={selectedTeeth.includes(id) ? 'blue' : 'white'}
              stroke="black"
              strokeWidth="2"
              onPress={() => handlePress(id)}
            />
            <SvgText x={parseInt(d.split(' ')[1].slice(1)) + 5} y={parseInt(d.split(' ')[2]) + 15} fontSize="10" fill="black" textAnchor="middle">
              {id}
            </SvgText>
          </>
        ))}
      </Svg>
      <TouchableOpacity onPress={handlePressed} style = {styles.btn}>
        <Text>
          Next
        </Text>
      </TouchableOpacity>
      <Text>selected teeth is {count} {selectedTeeth} </Text>


      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            // borderWidth:1,
            // borderColor:"pink",
            backgroundColor:"transparent"
            // height:"50%"
          },
          container:{
            backgroundColor: '#F9F6EE',
            borderTopLeftRadius:"10%",
            borderTopRightRadius: "10%",
            height:"60%"
          }
        }}
        >
            <View style={{flexDirection:"row",alignItems:"center",paddingLeft:"5%"}}>
              {console.log("the value of the selected teeth is given below as",selectedTeeth)}
            {selectedTeeth.length && <TouchableOpacity style={{height:"35%",width:"8%",alignItems:"center",justifyContent:"center",backgroundColor:"blue",borderRadius:"50%"}}><Text style ={{color:"black"}}>{selectedTeeth}</Text></TouchableOpacity>}
              <Text style={{color:"black",margin:"5%",fontSize:20,fontWeight:"700"}}>{selectedTeeth && data}</Text>
            </View>

          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            iconStyle={styles.iconStyle}
            maxHeight={200}
            value={country}
            data={dropdown_data}
            dropdownStyle ={styles.dropdownStyle}
            valueField="value"
            labelField="label"
            
            onChange={e => {
          setCountry(e.value);
        }}
      />

      <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            iconStyle={styles.iconStyle}
            maxHeight={200}
            value={null}
            data={dropdown_data2}
            dropdownStyle ={styles.dropdownStyle}
            valueField="value"
            labelField="label"
            // renderSelectedItem={() => null
            onChange={e => {
          setSecondProblem(e.value);
        }}
      />  
      <Text style={{marginHorizontal:"8%",marginVertical:"5%",fontWeight:"700",fontSize:14}}>
        Notes <Text style ={{color:"gray"}}>(optional)</Text>
      </Text>
      <TextInput style ={{borderWidth:1,borderColor:"black",marginHorizontal:"8%",height:"24%",borderRadius:15,backgroundColor:"pink",textAlignVertical: "top",paddingLeft:"3%"}} placeholder='Type your concern here!!' placeholderTextColor={"red"}>

      </TextInput>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,alignItems: 'center', backgroundColor: '#fff'
  },
  title: {
    fontSize: 18, fontWeight: 'bold', marginBottom: 20,marginTop: 20
  },
  btn:{
    borderWidth:1,
    borderColor:"pink",
    paddingHorizontal:"5%",
    paddingVertical:"2%",
    borderRadius:"25%",
    backgroundColor:"blue",
    color:"black"
  },
  dropdown: {
    margin: 16,
    height: 50,
    width: 350,
    backgroundColor: '#EEEEEE',
    borderRadius: 22,
    paddingHorizontal: 8,
  },

  dropdownStyle: {
    backgroundColor: "#fff", 
    borderRadius: 22,
    padding: 10,
  },
 
  placeholderStyle: {
    fontSize: 16,
    color:"black"
  },

  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color:"black"
  },
  iconStyle: {
    width: 20,
    height: 20,
    color:"black"
  },
});


export default MedicalRecord;
