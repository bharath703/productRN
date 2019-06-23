import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import {getProductDetails} from "./BusinessService";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoadingComplete: true
    };
  }


  componentDidMount() {
    getProductDetails("en_US", "abc1234567", String(this.props.productId))
      .then((products) => {
        this.setState({products})
        console.log(products)
      })
      .catch(error => console.log(error));
  }

  render() {
    // const imageUrl = this.state.products.image.sizes.length ? this.state.products.image.sizes[0].url : null; 
    return (
      <View style={styles.container}> 
        <ActivityIndicator size="large" />
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Text>This is the product ID {this.props.productId}</Text>
            <Text>This is the product ID {this.state.products}</Text>
            {/* Need to replace the below url with the image url from the Response. */}
            <Image style={styles.productImg} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca"}}/>
            {/* <Image style={styles.productImg} source={{uri: imageUrl}}/> */}
            <Text style={styles.name}>Super Soft T-Shirt</Text>
                <Text style={styles.price}>$ 12.22</Text>
                <Text style={styles.description}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                  natoque penatibus et magnis dis parturient montes, 
                  nascetur ridiculus mus. Donec quam felis, ultricies nec
                </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  productContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 16,
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 16
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  productImg:{
    width:200,
    height:200,
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
});