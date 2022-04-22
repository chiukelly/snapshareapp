import * as React from 'react';
import {Image, View, Platform} from 'react-native';
import {Button} from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import {ImagePicker, Permissions} from 'expo-image-picker';


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
		const permissions = Permissions.CAMERA;
		const status = await Permissions.askAsync(permissions);
		
		if(status.status !== 'granted'){
			alert("Allow Camera Permissions")
		} else{
			let result = await ImagePicker.launchCameraAsync();

			console.log(result);
			if (!result.cancelled) {
				setImage(result.uri);
			}
		}
 
		
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button color={'#5CB4C1'} labelStyle={{ color: "white" }} mode="contained" onPress={pickImage}> Pick Photo </Button>
			{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
			<Button color={'#5CB4C1'} labelStyle={{ color: "white" }} mode="contained" onPress={takeImage}> Take Photo </Button>
			{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
