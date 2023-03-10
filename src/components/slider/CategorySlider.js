import {ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import Data from '../../constants/Data';
import TabBtn from '../button/TabBtn';

const CategorySlider = () => {
  const [selectedId, setSelectedId] = useState();
  //navigation const
  const navigation = useNavigation();
  //item navigation method
  const itemNavigate = item => {
    setSelectedId(item.id);
    navigation.navigate('CategoryDetailsScreen', {categoryDetails: item});
  };

  //item render method
  const renderItem = item => {
    const backgroundColor =
      item.id === selectedId ? Colors.primary : Colors.lightPink;
    const color = item.id === selectedId ? 'white' : Colors.gray;
    return (
      <TabBtn
        data={item}
        backgroundColor={backgroundColor}
        color={color}
        onPress={() => itemNavigate(item)}
      />
    );
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        numColumns={Math.ceil(Data.length / 2)}
        renderItem={({item}) => renderItem(item)}
      />
    </ScrollView>
  );
};

export default CategorySlider;
