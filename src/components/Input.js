import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const Input = (props) => {
	const [text, setText] = useState('');

	return (
		<View>
			<TextInput
				{...props}
				placeholderTextColor="#ddd"
				style={styles.input}
				value={text}
				onChangeText={text => setText(text)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		paddingHorizontal: 5,
		borderWidth: 2,
		borderRadius: 4,
		borderColor: '#f1f1f1',
		color: '#999',
		marginBottom: 8,
		fontSize: 14,
		fontWeight: '600',
	}
});