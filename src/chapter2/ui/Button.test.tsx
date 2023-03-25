/**
 * @jest-environment jsdom
 * */
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  // React Testing Libraryを利用した、動きのあるコンポーネントのテスト
  it("changes the button text upon clicking the button using React Testing Library", () => {
    const button = render(<Button />);
    // ボタンをクリックするとONからOFFにボタンの文字列が変化することを確認
    fireEvent.click(button.getByText("ON"));
    expect(button.getByText(/OFF/i)).toBeTruthy();
    // ボタンをクリックするとOFFからONにボタンの文字列が変化することを確認
    fireEvent.click(button.getByText("OFF"));
    expect(button.getByText(/ON/i)).toBeTruthy();
  });
});
