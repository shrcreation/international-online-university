import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Heading from '../../components/text/Heading';
import SubHeading from '../../components/text/SubHeading';
import Header from '../../components/util/Header';
import HomeSlider from '../../components/slider/HomeSlider';
import PromoDialog from '../../components/promotions/PromoDialog';
import {useNavigation} from '@react-navigation/native';
import CategorySlider from '../../components/slider/CategorySlider';
import Slider from '../../components/flatlist/Slider';
import Data from '../../constants/Data';
import Promotion from '../../components/section/Promotion';
import Pathway from '../../components/section/Pathway';

const Featured = () => {
  //navigation const
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <PromoDialog>Future-ready skills on your schedule</PromoDialog>
      <HomeSlider />
      <View style={styles.contentView}>
        <Heading color={Colors.black} size={28} textAlign={'left'}>
          Learning that fits
        </Heading>
        <SubHeading color={Colors.darkGray} size={15} textAlign={'left'}>
          Skills for your present(and future)
        </SubHeading>
        <View style={styles.catView}>
          <Heading color={Colors.black} size={20} textAlign={'left'}>
            Categories
          </Heading>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('CategoriesListScreen')}>
            <Text style={styles.catText}>See all</Text>
          </TouchableOpacity>
        </View>
        <CategorySlider />
        {/* single course slide start */}
        <View style={styles.marginTop}>
          <View style={styles.headerView}>
            <Heading
              color={Colors.black}
              size={20}
              textAlign={'left'}
              highlightText={'Design'}
              highlightTextColor={Colors.primary}>
              Top courses in{' '}
            </Heading>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate('CategoryDetailsScreen', {
                  categoryDetails: Data[6],
                })
              }>
              <Text style={styles.catText}>See all</Text>
            </TouchableOpacity>
          </View>
          <Slider />
        </View>
        {/* single course slide start */}
        <View style={styles.marginTop}>
          <View style={styles.headerView}>
            <Heading
              color={Colors.black}
              size={20}
              textAlign={'left'}
              highlightText={'Development'}
              highlightTextColor={Colors.primary}>
              Top courses in{' '}
            </Heading>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate('CategoryDetailsScreen', {
                  categoryDetails: Data[0],
                })
              }>
              <Text style={styles.catText}>See all</Text>
            </TouchableOpacity>
          </View>
          <Slider />
        </View>
        {/* single course slide start */}
        <View style={styles.marginTop}>
          <View style={styles.headerView}>
            <Heading
              color={Colors.black}
              size={20}
              textAlign={'left'}
              highlightText={'Business'}
              highlightTextColor={Colors.primary}>
              Top courses in{' '}
            </Heading>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate('CategoryDetailsScreen', {
                  categoryDetails: Data[1],
                })
              }>
              <Text style={styles.catText}>See all</Text>
            </TouchableOpacity>
          </View>
          <Slider />
        </View>
        <Promotion />
        <Pathway />
        {/* <Review /> */}
      </View>
    </ScrollView>
  );
};

export default Featured;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 65,
    backgroundColor: Colors.light,
  },
  contentView: {
    marginLeft: 20,
    marginVertical: 20,
  },
  catView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  catText: {
    marginRight: 15,
    color: Colors.blue,
    fontSize: 13,
    fontFamily: Fonts.InterBold,
  },
  marginTop: {
    marginTop: 20,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
