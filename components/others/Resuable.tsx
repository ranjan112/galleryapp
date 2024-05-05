import React from "react";
import { View } from "react-native";
import { Card, Text, TextInput} from "react-native-paper";
import { useTranslation } from 'react-i18next';

export const CardUI = React.memo((props: any) => {
    const { t } = useTranslation();

    // const theme = useAppTheme()
    return (
        <Card>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Text variant="titleLarge">{`${t(props.title)}`}</Text>
                <Text variant="bodyMedium">{`${t(props.desc)}`}</Text>
            </Card.Content>
        </Card>
    )
})
