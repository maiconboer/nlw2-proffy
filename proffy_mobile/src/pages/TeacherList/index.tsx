import React from 'react'
import { View } from 'react-native';

import PageHeader from '../../components/PageHader';

import styles from './styles';

const TeacherList = () => {
  return (
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis' />
    </View>
  )
}

export default TeacherList;
