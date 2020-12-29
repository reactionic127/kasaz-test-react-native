import React, {ReactText, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ModalProps} from '../types';

export function PriceFilterModal({
  visible,
  setVisible,
  filterOptions,
  handleFilterOptions,
}: ModalProps) {
  const [minPrice, setMinPrice] = useState<ReactText>(
    filterOptions.price.startVal,
  );
  const [maxPrice, setMaxPrice] = useState<ReactText>(
    filterOptions.price.endVal,
  );
  const [minUnitPrice, setMinUnitPrice] = useState<ReactText>(
    filterOptions.pricePerSqm.startVal,
  );
  const [maxUnitPrice, setMaxUnitPrice] = useState<ReactText>(
    filterOptions.pricePerSqm.endVal,
  );

  const applyFilter = () => {
    handleFilterOptions({
      ...filterOptions,
      price: {
        startVal: minPrice,
        endVal: maxPrice,
      },
      pricePerSqm: {
        startVal: minUnitPrice,
        endVal: maxUnitPrice,
      },
    });
    setVisible(false);
  };

  console.log('filterOptions.price.startVal', filterOptions.price.startVal);
  console.log('minPrice', minPrice);
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={1}
      backdropColor="#FFFFFF"
      animationIn="fadeIn">
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          testID="close-icon"
          onPress={() => setVisible(false)}
          style={styles.closeWrapper}>
          <Ionicons name="close" size={30} />
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={styles.headerText}>Precio</Text>
          <View style={styles.flexView}>
            <View style={styles.halfView}>
              <Text style={styles.itemText}>Minimo</Text>
              <Picker
                selectedValue={minPrice}
                style={styles.picker}
                onValueChange={(itemValue) => setMinPrice(itemValue)}>
                <Picker.Item label="Sin Minimo" value={undefined} />
                <Picker.Item label="250.000 €" value={250000} />
                <Picker.Item label="500.000 €" value={500000} />
                <Picker.Item label="750.000 €" value={750000} />
              </Picker>
            </View>
            <View style={styles.halfView}>
              <Text style={styles.itemText}>Maximo</Text>
              <Picker
                selectedValue={maxPrice}
                style={styles.picker}
                onValueChange={(itemValue) => setMaxPrice(itemValue)}>
                <Picker.Item label="Sin Minimo" value={undefined} />
                <Picker.Item label="250.000 €" value={250000} />
                <Picker.Item label="500.000 €" value={500000} />
                <Picker.Item label="750.000 €" value={750000} />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.downWrapper}>
          <Text style={styles.headerText}>Precio por metro cuadrado</Text>
          <View style={styles.flexView}>
            <View style={styles.halfView}>
              <Text style={styles.itemText}>Minimo (€/m²)</Text>
              <Picker
                selectedValue={minUnitPrice}
                style={styles.picker}
                onValueChange={(itemValue) => setMinUnitPrice(itemValue)}>
                <Picker.Item label="Sin Minimo" value={undefined} />
                <Picker.Item label="500 €" value={500} />
                <Picker.Item label="1.000 €" value={1000} />
                <Picker.Item label="1.500 €" value={1500} />
                <Picker.Item label="2.000 €" value={2000} />
                <Picker.Item label="2.500 €" value={2500} />
                <Picker.Item label="3.000 €" value={3000} />
                <Picker.Item label="3.500 €" value={3500} />
              </Picker>
            </View>
            <View style={styles.halfView}>
              <Text style={styles.itemText}>Maximo (€/m²)</Text>
              <Picker
                selectedValue={maxUnitPrice}
                style={styles.picker}
                onValueChange={(itemValue) => setMaxUnitPrice(itemValue)}>
                <Picker.Item label="Sin Minimo" value={undefined} />
                <Picker.Item label="500 €" value={500} />
                <Picker.Item label="1.000 €" value={1000} />
                <Picker.Item label="1.500 €" value={1500} />
                <Picker.Item label="2.000 €" value={2000} />
                <Picker.Item label="2.500 €" value={2500} />
                <Picker.Item label="3.000 €" value={3000} />
                <Picker.Item label="3.500 €" value={3500} />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            testID="apply-filter-button"
            style={styles.filterBtn}
            onPress={() => applyFilter()}>
            <Text style={styles.filterText}>Aplicar y filtar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeWrapper: {
    position: 'absolute',
    right: 0,
    top: 40,
  },
  wrapper: {
    marginTop: 50,
  },
  downWrapper: {
    marginTop: 200,
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'Raleway-Black',
  },
  flexView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  halfView: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    fontFamily: 'Raleway-Medium',
  },
  bottomView: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterBtn: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#484848',
    borderRadius: 3,
  },
  filterText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: 'Raleway-Black',
  },
  picker: {
    width: 180,
    height: 40,
  },
});
