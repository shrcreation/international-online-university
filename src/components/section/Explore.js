import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import Tab from '../flatlist/Tab';
import Slider from '../flatlist/Slider';
import COLORS from '../../constants/Colors';

const Explore = () => {
  return (
    <View style={styles.container}>
      {/* heading */}
      <View>
        <Heading color={COLORS.black} size={22}>
          Explore IOU
        </Heading>
        <SubHeading color={COLORS.black} size={18}>
          Sub Title Goes Here
        </SubHeading>
      </View>
      {/* button list */}
      <View style={styles.tabList}>
        <Tab />
      </View>
      {/* slider */}
      <View>
        <Slider />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    flex: 1,
  },
  tabList: {
    marginVertical: 40,
    marginHorizontal: 25,
  },
});
