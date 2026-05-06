import { StyleSheet, Text, View } from 'react-native';




interface RatingBadgeProps {
    label: string;
    value: string;
    subLabel: string;
}


export default function RatingBadge({ label, value, subLabel }: RatingBadgeProps) {
    return (
        <View>
            <Text>{label}</Text>
            <Text>{value}</Text>
            <Text>{subLabel}</Text>
        </View>
    );
}




const styles = StyleSheet.create ({

})