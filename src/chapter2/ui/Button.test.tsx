import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./Button";

describe("Button", () => {
  // react-test-rendererを利用した、スナップショットテスト
  it("renders correctly with react-test-renderer", () => {
    const button = renderer.create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
