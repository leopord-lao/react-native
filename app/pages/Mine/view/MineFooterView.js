
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
export  default class MineFooterView extends React.Component {

    render() {

        return (
            <View style={{backgroundColor:'rgba(245,245,245,1)',padding:10}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
                        paddingLeft:8,paddingRight:8 ,paddingTop:2,paddingBottom:2,
                        borderColor:'#1296db', borderRadius:15,borderWidth:0.5,
                    }} activeOpacity={0.5}
                    >
                        <Image style={{height:15,width:15}} source={require(`../../../images/ic-mine-gongyi.png`)}/>
                        <Text  style={{color:'#1296db',fontSize:10}}>3小时公益</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
                    <Text  style={{color:'#999',fontSize:11}}>copyright @2019 leopord智能科技开发</Text>
                </TouchableOpacity>
            </View>
        );
    }

}