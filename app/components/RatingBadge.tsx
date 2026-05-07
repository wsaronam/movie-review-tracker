import { StyleSheet, Text, View } from 'react-native';
import { borderRadius, colors, fontSizes, spacing } from '../theme';




interface RatingBadgeProps {
    label: string;
    value: string;
    subLabel: string;
    color: string;
}


export default function RatingBadge({ label, value, subLabel, color }: RatingBadgeProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={[styles.value, {color}]}>{value}</Text>
            <Text style={styles.subLabel}>{subLabel}</Text>
        </View>
    );
}




const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundSecondary,
        borderRadius: borderRadius.md,
        padding: spacing.sm
    },

    label: {
        fontSize: fontSizes.sm,
        color: colors.textSecondary,
        marginBottom: 4
    },

    value: {
        fontSize: fontSizes.lg,
        fontWeight: '600'
    },

    subLabel: {
        fontSize: fontSizes.sm,
        color: colors.textTertiary,
        marginTop: 2
    }
})