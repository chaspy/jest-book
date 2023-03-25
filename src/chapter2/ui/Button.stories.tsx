import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./Button";

export default { component: Button } as ComponentMeta<typeof Button>; // コンポーネントを指定
export const Primary: ComponentStoryObj<typeof Button> = {}; // パラメータを設定
export const Secondary: ComponentStoryObj<typeof Button> = {
  args: { primary: false },
};
