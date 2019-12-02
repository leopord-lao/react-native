/**
 * ShopReactNative
 *
 * @author Tony Wong
 * @date 2016-09-27
 * @email 908601756@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    InteractionManager,
    TouchableOpacity,
} from 'react-native';
import Loading from '../../component/Loading';
import Header from '../../component/Header';
import Common from '../../common/constants';
import ListView from 'deprecated-react-native-listview'


export default class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (section1, section2) => section1 !== section2
            }),
        };
        this._gotoAddressList=this._gotoAddressList.bind(this)
        this._renderRow=this._renderRow.bind(this)
        this._submitOrder=this._submitOrder.bind(this)
        this._goToPayOrder=this._goToPayOrder.bind(this)
    }
/*
    componentDidMount() {
        const {dispatch, preorderReducer, userReducer} = this.props;
        //交互管理器在任意交互/动画完成之后，允许安排长期的运行工作. 在所有交互都完成之后安排一个函数来运行。
        InteractionManager.runAfterInteractions(() => {
            let preorder = preorderReducer.preorder;
            let user = userReducer.user;
            dispatch(preorderView(preorder.id, user.access_token));
        });
    }
*/
    render() {
        /*
        const {preorderReducer} = this.props;
        let isLoading = preorderReducer.isLoading;
        let preorder = preorderReducer.preorder;
        let address = preorderReducer.address;

        // 将数据进行分组
        let sectionIds = [];
        let rowIds = [];
        let sourceData = {};
        */
       /*
        if(!isLoading) {
            //选择收货地址数据
            sectionIds.push('address');
            rowIds.push([0]);
            //商品列表数据
            if(preorder.preorderItems && preorder.preorderItems.length) {
                let rowIdArr = [];
                for (let i = 0; i < preorder.preorderItems.length; i++) {
                    rowIdArr.push(i);
                }
                sectionIds.push('preorderItems');
                rowIds.push(rowIdArr);
            }
            sourceData = {address:[address], preorderItems:preorder.preorderItems};
        }
        */
       let address={
           access_token:'1',
           fullname:'leopord',
           telephone:'131',
           area_id:'guangdong industry university',
           detail:'none'
       }
       let preorderItem={
           name:'lo'
       }
       let sectionIds='1'
       let rowIds='1'
       let sourceData={address:address,preorderItems:preorderItem}
       let isLoading=false
        return (
            <View style={styles.container}>
                <Header
                    leftIconAction={()=>this.props.navigator.pop()}
                    title='确认订单'
                />
                {isLoading ?
                    <Loading /> :
                    <View style={{flex:1,flexDirection:'column'}}>
                        {/*
                        <ListView
                            style={styles.productListWrap}
                            dataSource={this.state.dataSource.cloneWithRowsAndSections(sourceData, sectionIds, rowIds)}
                            renderRow={this._renderRow()}
                            enableEmptySections={true}
                        />
                        */}
                        <View style={styles.productItem}>
                <Image
                    style={styles.productImage}
                    source={require('../../images/h_0.png')}
                />
                <View style={styles.productRight}>
                    <Text>隆江猪脚饭</Text>
                    <Text>￥20</Text>
                </View>
            </View>
                        <View style={styles.toolBarWrap}>
                            <Text style={styles.cartNum}>￥20元</Text>
                            <TouchableOpacity style={styles.toolBarItem} onPress={this._goToPayOrder()}>
                                <View style={styles.addToCartWrap}>
                                    <Text style={styles.addToCart}>去支付</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        )
    }
/*
    _renderRow(data, sectionId, rowId) {
        //选择收货地址
        if(sectionId == 'address'){
            let address = data;
            return (
                <TouchableOpacity onPress={this._gotoAddressList.bind(this)}>
                    <View>
                        <Text>请选择收货地址>></Text>
                    </View>
                </TouchableOpacity>
            )
        }
        //商品列表
        else if(sectionId == 'preorderItems'){
            let preorderItem = data;
            return (
                <View style={styles.productItem}>
                    <Image
                        style={styles.productImage}
                        source={{uri: preorderItem.image_small}}
                    />
                    <View style={styles.productRight}>
                        <Text>隆江猪脚饭</Text>
                        <Text>￥20</Text>
                    </View>
                </View>
            );
        }
    }
*/
    _renderRow(data,sectionId,rowId){
        return (
            <View style={styles.productItem}>
                <Image
                    style={styles.productImage}
                    source={require('../../images/h_0.png')}
                />
                <View style={styles.productRight}>
                    <Text>隆江猪脚饭</Text>
                    <Text>￥20</Text>
                </View>
            </View>
        );
    }
    _submitOrder() {
        InteractionManager.runAfterInteractions(() => {
            const {dispatch, userReducer} = this.props;
            let access_token = userReducer.user.access_token;
            dispatch(addressCreate(access_token, fullname, telephone, area_id, detail));
        });
    }

    _gotoAddressList(){
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: 'AddressContainer',
                component: AddressContainer
            })
        });
    }
    _goToPayOrder(){
        console.log('pay it')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerWrap: {
        alignItems: 'center',
        height: 44,
        backgroundColor: '#ff7419',
    },
    header: {
        color: '#fff',
        paddingTop: 22,
        fontSize: 17,
    },

    productListWrap: {
        height: Common.window.height - 64 - 44 - 40,
    },
    productItem: {
        height: 80,
        flexDirection:'row',
        padding: 15,
        marginBottom: 1,
        backgroundColor:'#fff',
    },
    productRight: {
        flexDirection:'column',
    },
    productImage: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    productPrice: {
        fontSize: 24,
        color: 'red',
    },
    productFeaturedPrice: {
        fontSize: 14,
        color: '#ddd',
    },

    // 底部栏
    toolBarWrap: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: '#ccc',
        borderTopWidth: 0.5,
    },
    toolBarItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartWrap: {
        flex: 1,
        backgroundColor: '#fd6161',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCart: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    cartNum: {
        color: 'red',
        fontSize: 11,
        marginTop: -18,
        marginLeft: -10,
        backgroundColor: 'transparent',
    },
});