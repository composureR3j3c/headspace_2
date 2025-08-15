import { Text,View,FlatList } from "react-native";
import { meditations } from '@/app/data';
import { MeditationListItem } from "@/app/components/MeditationListItem";

const meditation=meditations[0]; 



export default function HomeScreen() {
  return (
    <FlatList data={meditations} 
    className="bg-gray-100"
    contentContainerClassName="gap-8 p-3 " renderItem={({item})=><MeditationListItem meditation={item}/>} /> 
  );
}

