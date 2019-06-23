import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {getProducts} from "./BusinessService";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getProducts("en_US", "abc1234567", "laundry")
      .then((products) => this.setState({products}))
      .catch(error => console.log(error));
  }

  renderProduct = ({item}) => {
    const imageUrl = item.image.sizes.length ? item.image.sizes[0].url : null;
    return (
      <View style={styles.productContainer}>
        <Image style={styles.image} source={{uri: imageUrl}}/>
        <View style={{flexGrow: 1, width: 0, flex: 1}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description} numberOfLines={3} ellipsizeMode={"tail"}>{item.shortDescription}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
          renderItem={this.renderProduct}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 36
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
  description: {
    marginTop: 8,
    fontSize: 12
  }
});
