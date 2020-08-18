import React from 'react';
import { Text } from "react-native";
import { render } from "@testing-library/react-native";

describe('example test', () => {
  it('get by text', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText("Hello World")).not.toBeNull();
  });
});