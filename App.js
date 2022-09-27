import {useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import animals from './assets';
import {Button} from './src/components';

export default function App() {
  const [currentAnimal, setCurrentAnimal] = useState(animals.cat);
  const [currentAnimalName, setCurrentAnimalName] = useState('Kitty');

  const onPress = ({animal}) => {
    switch (animal) {
      case 'Cat': {
        setCurrentAnimal(animals.cat);
        setCurrentAnimalName('Kitty');
        break;
      }
      case 'Dog': {
        setCurrentAnimal(animals.dog);
        setCurrentAnimalName('Doggy');
        break;
      }
      default: {
        setCurrentAnimal(animals.rabbit);
        setCurrentAnimalName('Bunny');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, {currentAnimalName}...</Text>
      <Image source={currentAnimal} style={styles.image} />
      <View style={styles.buttons}>
        <Button onPress={() => onPress({animal: 'Cat'})} title={'Cat'} />
        <Button onPress={() => onPress({animal: 'Dog'})} title={'Dog'} />
        <Button onPress={onPress} title={'Rabbit'} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 8,
  },
  buttons: {
    marginTop: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
