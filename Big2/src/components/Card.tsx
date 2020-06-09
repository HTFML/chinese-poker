import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
    title: string;
    onDragStart: () => void;
    onDragOverForbideDrop: () => void;
}

const styles = StyleSheet.create({
    draggable: {
      width: 100,
      height: 100,
      backgroundColor: 'yellow',
      shadowOffset: {
        width: -10,
        height: 10,
      }
    }})

const Card = (props: Props) => {

    const { title, onDragOverForbideDrop, onDragStart } = props;

    return(
        <View>
            <Text
                id={title}
                draggable='true'
                style={styles.draggable}
                onDragStart={(e) => onDragStart(e, title)}
                onDragOver={(e) => onDragOverForbideDrop(e)}
                >
                    I'm card: {title}
            </Text>
        </View>
    )
}

export default Card