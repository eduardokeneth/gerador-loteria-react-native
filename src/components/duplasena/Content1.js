import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../style/duplastyle';

const Content1 = () => (
  <View style={styles.content1}>
    <View style={styles.boxContent1}>
      <View style={styles.contentCircle} />
      <Text style={styles.textBoxContent1}>Sorteio:</Text>
      <Text style={styles.textDefault}>Dupla Sena</Text>
    </View>
    <View style={styles.boxContent1}>
      <View style={styles.contentCircle} />
      <Text style={styles.textBoxContent1}>Nº de dezenas:</Text>
      <Text style={styles.textDefault}>2x - 6 números sorteados</Text>
    </View>
  </View>
);

export default Content1;
