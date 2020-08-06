import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHader';

import styles from './styles';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <PageHeader title='Meus proffys favoritos' />
    </View>
  )
}

export default Favorites;
