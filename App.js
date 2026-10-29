import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text , View , Image , ScrollView} from 'react-native';
import {Boat} from "./Boat.js";

const boats = [
    {
        name: 'Sea Ray 500 Sundancer',
        description: 'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
        picture: './assets/img/sea_ray.jpg'
    },
    {
        name: 'Four Winns Horizon 180',
        description: 'A sporty look and refined details truly set the Horizon 180 above all others.',
        picture: './assets/img/four_winns.jpg'
    },
    {
        name: 'Flipper 640 ST',
        description: 'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
        picture: './assets/img/flipper.jpg'
    },
    {
        name: 'Princess V48',
        description: 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
        picture: './assets/img/princess.jpg'
    },
    {
        name: 'Bayliner 175 Bowrider',
        description: 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
        picture: './assets/img/bayliner.jpg'
    },
    {
        name: 'Fairline Targa 47',
        description: 'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
        picture: './assets/img/fairline.jpg'
    }
];


const boatImages = {
    './assets/img/sea_ray.jpg': require('./assets/img/sea_ray.jpg'),
    './assets/img/four_winns.jpg': require('./assets/img/four_winns.jpg'),
    './assets/img/flipper.jpg': require('./assets/img/flipper.jpg'),
    './assets/img/princess.jpg': require('./assets/img/princess.jpg'),
    './assets/img/bayliner.jpg': require('./assets/img/bayliner.jpg'),
    './assets/img/fairline.jpg': require('./assets/img/fairline.jpg')
};





const AllBoats = () => {
  return (<View>
      {boats.map((boat,index)=> {
          return (<View key={index}>
              <Boat brandIcon={"ship"} brandName={boat.name} boatImage={boatImages[boat.picture]} description={boat.description}/>
          </View>)
      })}
  </View>)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>GetABoat - For sale</Text>
        <ScrollView>
            <AllBoats/>
        </ScrollView>
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
});
