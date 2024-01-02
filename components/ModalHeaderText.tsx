import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
      <TouchableOpacity>
        <Text
          style={{
            fontFamily: 'mon-sb',
            fontSize: 18,
            color: active == 0 ? '#000' : Colors.grey,
            textDecorationLine: active == 0 ? 'underline' : 'none',
          }}
          onPress={() => setActive(0)}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            fontFamily: 'mon-sb',
            fontSize: 18,
            color: active == 0 ? '#000' : Colors.grey,
            textDecorationLine: active == 1 ? 'underline' : 'none',
          }}
          onPress={() => setActive(1)}
        >
          Experience
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeaderText;
