import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
// import {ImagePicker, Permissions} from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAYk2OA5s_SPaJ_QCwLORQdymlT0IbTVnM",
    authDomain: "snapsharenew.firebaseapp.com",
    projectId: "snapsharenew",
    storageBucket: "snapsharenew.appspot.com",
    messagingSenderId: "234923433559",
    appId: "1:234923433559:web:e4e373a0da4dabc0724d12",
    measurementId: "G-CBSZBED7E9"
  };

export var globalImage = "crap";

export default function UploadScreen({ navigation }) {
    

    //Firebase stuuf
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Get a reference to the storage service, which is used to create references in your storage bucket
    // Create root reference
    const storage = getStorage();

    // Create a storage reference from our storage service
    const storageRef = ref(storage);

    // // Create a reference to 'images/sky.jpg'
    // const skyImagesRefmyUpload = ref(storage, 'images/myUpload');

    // // Create a reference to 'images/sky.jpg'
    // const skyImagesRef = ref(storage, 'images/myUpload');


    const [image, setImage] = useState(null);

    const getPictureBlob = (uri) => {
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError('Network request failed'));
          };
          xhr.responseType = 'blob';
          xhr.open('GET', globalImage, true);
          xhr.send(null);
        });
      };

    const uploadImageWorld = async () => {
        // 'file' comes from the Blob or File API
        let dataUri = globalImage;
        console.log('dataUri:', dataUri);

        let blob;
        try {
            blob = await getPictureBlob(dataUri);

            var temp = '' + Math.random();

            const snapshot = uploadBytes(ref(storage, ('sky/world/' + temp) ), blob).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

            return await snapshot.ref.getDownloadURL();
        } catch (e) {
            //alert(e.message);
        } finally {
            blob.close();
        }
    };

    const uploadImageFriends = async () => {
        // 'file' comes from the Blob or File API
        let dataUri = globalImage;
        console.log('dataUri:', dataUri);

        let blob;
        try {
            blob = await getPictureBlob(dataUri);

            var temp = '' + Math.random();

            const snapshot = uploadBytes(ref(storage, ('sky/friends/' + temp) ), blob).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

            return await snapshot.ref.getDownloadURL();
        } catch (e) {
            //alert(e.message);
        } finally {
            blob.close();
        }
    };

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
            globalImage = result.uri;
            setImage(result.uri);
        }
    };


    const takeImage = async () => {
        // No permissions request is necessary for launching the image library
        // const permissions = Permissions.CAMERA;
        const status = await Permissions.askAsync(Permissions.CAMERA);

        if (status.status !== 'granted') {
            alert("Allow Camera Permissions")
            let result = await takeImage()
        } else {
            let result = await ImagePicker.launchCameraAsync();

            console.log(result);
            if (!result.cancelled) {
                globalImage = result.uri;
                setImage(result.uri);
            }
        }


    };

        return (
            <View style={{ flex: 1, alignItems: 'center', padding: 70 }}>
                <Text style={{fontSize: 48, color: '#535865', paddingBottom: 30}}>Upload</Text>
                <View style={{ backgroundColor: "#DDDFE3", height: 51, width: 300, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: "#535865", fontSize: 20 }}> Today's Prompt: The Sky </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', paddingTop: 30 }}>
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
                    <View style={{ padding: 10, alignItems: 'center' }}>
                        <Text style={{ color: "#535865", fontSize: 24 }}> Send To </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'center', width: 200 }}>
                        <View style={{ padding: 10 }}>
                            <Button color={'#E2F0BC'} labelStyle={{ color: "#779622" }} mode="contained" onPress={uploadImageWorld}> World </Button>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Button color={'#FBEA9D'} labelStyle={{ color: "#D7B209" }} mode="contained" onPress={uploadImageFriends}> Friends </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

