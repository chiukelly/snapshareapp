import * as React from 'react';
import {Image, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
// import {ImagePicker, Permissions} from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default function UploadScreen({navigation}) {
	const [image, setImage] = useState(null);

	const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


	const takeImage = async () => {
		// No permissions request is necessary for launching the image library
		// const permissions = Permissions.CAMERA;
		const status = await Permissions.askAsync(Permissions.CAMERA);
		
		if(status.status !== 'granted'){
			alert("Allow Camera Permissions")
      let result = await takeImage()
		} else{
			let result = await ImagePicker.launchCameraAsync();

			console.log(result);
			if (!result.cancelled) {
				setImage(result.uri);
			}
		}
 
		
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', paddingTop: 30}}>
      <View style={{backgroundColor: "#DDDFE3", height: 51, width: 300, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
        <Text style={{color: "#535865", fontSize: 20}}> Today's Prompt: The Sky </Text>
      </View>
      <View style={{flexDirection: "row", alignItems: 'center', paddingTop: 30}}>
        <View style={{ padding: 10 }}>
          <Button color={'#5CB4C1'} labelStyle={{ color: "white" }} mode="contained" onPress={pickImage}> Pick Photo </Button>
        </View>
        <View style={{ padding: 10 }}>
          <Button color={'#5CB4C1'} labelStyle={{ color: "white" }} mode="contained" onPress={takeImage}> Take Photo </Button>
        </View>
        
      </View>
      <View style={{ padding: 10 }}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}  
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ padding: 10, alignItems: 'center'}}>
          <Text style={{color: "#535865", fontSize: 24}}> Send To </Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: 'center', width: 200}}>
          <View style={{ padding: 10}}>
            <Button color={'#E2F0BC'} labelStyle={{ color: "#779622" }} mode="contained"> World </Button>
          </View>
          <View style={{ padding: 10 }}>
            <Button color={'#FBEA9D'} labelStyle={{ color: "#D7B209" }} mode="contained"> Friends </Button>
          </View>
        </View>
      </View>
		</View>
  );
}

	// useEffect(() => {
	// 	(async () => {
	// 	  const cameraStatus = await Camera.requestPermissionsAsync();
	// 	  setHasCameraPermission(cameraStatus.status === 'granted');
	// })();
	//   }, []);

	// return (
	// 	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			
	// 	</View>
	// );
// }
