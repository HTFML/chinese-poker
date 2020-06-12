import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
    title: string;
    onDragStart: () => void;
    onDragOverForbideDrop: () => void;
}

const styles = StyleSheet.create({
    draggable: {
      position: 'fixed',
      backgroundImage: `url(https://lh3.googleusercontent.com/proxy/dS34eS7y1IklbDuZLnj6R75860ofvNSJoUkF6pJIBLTpMM247rN_QljsVed4lpJQXl6UA3CC_JswhiZFYWvJ9KySd2syF-4)`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      paddingLeft: 20,
      minHeight: 200,
      width: 100,
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