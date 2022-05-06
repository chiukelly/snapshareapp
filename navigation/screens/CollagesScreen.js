import * as React from 'react';
import {View, Text, ScrollView, Image, Button, FlatList} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDK0GFRyw5EiWFqAMgq7_yVyM2pBPRJQpY",
    authDomain: "snapshare2-fa1b1.firebaseapp.com",
    projectId: "snapshare2-fa1b1",
    storageBucket: "snapshare2-fa1b1.appspot.com",
    messagingSenderId: "3959654155",
    appId: "1:3959654155:web:a01378620746efb10ec40e",
    measurementId: "G-8NRSPH0M61"
  };

//Firebase stuuf
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
// Create root reference
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);

// Create a storage reference from our storage service
const pathReference = ref(storage, 'sky/world');

const CollagesStack = createNativeStackNavigator();



export default function CollagesStackScreen({navigation}) {
	return (
		<CollagesStack.Navigator>
			<CollagesStack.Screen name="Collages" component={CollagesScreen} options={{headerShown: false}} />
			<CollagesStack.Screen name="Collage" component={CollageScreen} />
		</CollagesStack.Navigator>
	);
}


export var imageRefArr = []; //NEED TO FILL THIS WITH IMAGES

export var imageFileArr = []; //Stores UR

function renderItem({ item }) {
  	console.log("rendering item")
  	console.log("item, ", item)
	return <Image 
		style={{width: '100%', height: '50%'}}
        source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}} 
		/>;
	// return <Image source={{ uri: item }} style={{ height: 100 }} />;
}

const getPictureUrlArray = async () => {
	var i = 0;
	imageRefArr.forEach(async function(curRef) {
		console.log("i1" + i);
		//add file to array
		var response = await getDownloadURL(ref(storage, curRef))
		.then((url) => { 
			// `url` is the download URL for 'images/stars.jpg'

			imageFileArr.push(url);

			console.log("url: ", imageFileArr[i]);
			console.log("i" + i);
		})
		.catch((error) => {
			// Handle any errors
		});

    i = i + 1;
	});

}

// Sky collage screen
function CollageScreen() {
	var imageCount = 0;

	//canvas to display images
	const [images, setImages] = React.useState(imageFileArr);
	const [loading, setLoading] = React.useState(false);

	// List all files in sky/world
	// Create a reference under which you want to list
	const listRef = ref(storage, 'sky/world');
	const newSet = new Set();
	// Find all the prefixes and items.
	listAll(listRef)
		.then((res) => {
			res.prefixes.forEach((folderRef) => {
				// All the prefixes under listRef.
				// You may call listAll() recursively on them.
			});
			res.items.forEach((itemRef) => {
				// All the items under listRef.
				imageRefArr.push(itemRef);
				getPictureUrlArray();
				imageCount = imageCount + 1;

				//console.log(imageRefArr.length);
				//console.log(imageCount);
			});
		}).catch((error) => {
			// Uh-oh, an error occurred!
		}).finally(async () => {
			//Get image file from image ref
			let response = await getPictureUrlArray();
			console.log("image count: ", imageCount);
      		let set = await setImages(imageFileArr) //Might not work
			newSet = new Set(imageFileArr)
			imageFileArr= Array.from(mySet);
		});

		setTimeout(() => {
			setLoading(true)
			console.log(images)
		 }, 2000)

		if(!loading){
			return( 
				<View>
					<Text>
						loading...
					</Text>	
				</View> 
			)
		}else{
			return (
				<View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}>

					{/* {imageFileArr.map((url) => (
						<Image 
							source={{ uri: url }} 
							style={{
								height: 100,
								width: 100
							}} 
						/>
					))} */}
					<View style={{ flexDirection: "row", justifyContent: 'center'}}>
						{/* <Image 
							style={{height: 300, width: 200}}
							source={require('./../../assets/skydemo2.jpeg')}
						/>
						<Image 
							style={{height: 300, width: 200}}
							source={require('./../../assets/skydemo1.png')}
						/> */}

						{imageFileArr.map((url) => (
						<Image 
							source={{ uri: url }} 
							style={{
								height: 300,
								width: 100
							}} 
						/>
					))}
					</View>
					<View style={{height: 50, width: 400, backgroundColor: "#5CB4C1", justifyContent: 'center'}}>
					<View style={{flexDirection: 'row'}}>
						<Text style={{paddingLeft: 20, marginRight: 'auto', color: 'white'}}>
						Sky
						</Text>
						<Text style={{paddingRight: 20, marginLeft: 'auto', color: 'white'}}>
						March 20, 2022
						</Text>
					</View>
					</View>
				</View>
			);
		}
}

function CollagesScreen({navigation}) {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 70}}>
				<Text style={{fontSize: 48, color: '#535865'}}>Collages</Text>
				<TouchableWithoutFeedback style={{ margin: 20, height: 160, width: 350}} onPress={() => navigation.navigate('Collage')}>
					<Image 
						style={{height: 150, width: 350}}
						source={require('./../../assets/skydemo1.png')}
					/>
					<View style={{height: 30, width: 350, backgroundColor: "#5CB4C1", justifyContent: 'center'}}>
						<View style={{flexDirection: 'row'}}>
							<Text style={{paddingLeft: 10, marginRight: 'auto', color: 'white'}}>
								Sky
							</Text>
							<Text style={{paddingRight: 10, marginLeft: 'auto', color: 'white'}}>
								March 20, 2022
							</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback style={{ margin: 20, height: 160, width: 350}} onPress={() => navigation.navigate('Upload')}>
					<Image 
						style={{height: 150, width: 350}}
						source={require('./../../assets/something_purple.png')}
					/>
					<View style={{height: 30, width: 350, backgroundColor: "#5CB4C1", justifyContent: 'center'}}>
						<View style={{flexDirection: 'row'}}>
							<Text style={{paddingLeft: 10, marginRight: 'auto', color: 'white'}}>
								Something Purple
							</Text>
							<Text style={{paddingRight: 10, marginLeft: 'auto', color: 'white'}}>
								March 19, 2022
							</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback style={{ margin: 20, height: 160, width: 350, backgroundColor: "#5CB4C1"}} onPress={() => navigation.navigate('Upload')}>
					<Image 
						style={{height: 150, width: 350}}
						source={require('./../../assets/plants.png')}
					/>
					<View style={{height: 30, width: 350, backgroundColor: "#5CB4C1", justifyContent: 'center'}}>
						<View style={{flexDirection: 'row'}}>
							<Text style={{paddingLeft: 10, marginRight: 'auto', color: 'white'}}>
								Plants
							</Text>
							<Text style={{paddingRight: 10, marginLeft: 'auto', color: 'white'}}>
								March 18, 2022
							</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</ScrollView>
	);
}
