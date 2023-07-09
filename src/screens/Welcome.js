import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Welcome = stack => {
  const profesor = {
    nombre: 'Richard',
    apellido: 'Espinoza',
    edad: 23,
    materias: ['Matematica', 'Fisica', 'Quimica'],
  };
  return (
    <View style={styles.container}>
      <Image
        style={{width: 200, height: 100, alignSelf: 'center'}}
        source={{
          uri: 'https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/APIOITAZNFB2PLKD7LTTPGTY4U.jpg',
        }}
      />
      <Text style={styles.title}>¡Bienvenidos a mi portafolio!</Text>
      <ScrollView style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.itemProyect}
          onPress={() =>
            stack.navigation.navigate('MyDrawer', {data: profesor})
          }>
          <Text style={styles.itemText}>Drawer Navigator</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={styles.itemProyect}
           onPress={() =>           
            stack.navigation.navigate('MyTabs',
            {data: profesor})

         }
           >
            <Text style={styles.itemText}>
                  Bottom Tabs
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
           style={styles.itemProyect}
           onPress={() =>           
            stack.navigation.navigate('MyToptabs',
            {data: profesor})

         }
           >
            <Text style={styles.itemText}>
                  Top Tabs
            </Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  itemProyect: {
    backgroundColor: '#000',
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 15,
    padding: 6,
  },
  itemText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Welcome;
