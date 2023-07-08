import { StyleSheet } from "react-native"
export default function GoalItem() {
    return (
        <View style = {styles.goalStyle}>
            <Text style = {styles.goalCh1}>{itemData.item.text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    goalStyle : {
        margin : 6,
        padding : 10,
        borderRadius : 6,
        backgroundColor : '#468CF9'
    },
    goalCh1 : {
        color : '#fff'
    }
})