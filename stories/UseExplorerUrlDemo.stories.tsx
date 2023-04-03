import type { Meta, StoryObj } from '@storybook/react';
import { UseExplorerUrlDemo } from './UseExplorerUrlDemo';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/UseExplorerUrlDemo',
  component: UseExplorerUrlDemo,
  tags: ['autodocs'],
} satisfies Meta<typeof UseExplorerUrlDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const CustomAddress: Story = {
  args: {
    address: '2ZDXMASNGYLUX6FFSO5PH3BK3DRVOSIR64OL5IH73YZDNZHADORITA3S6E',
  },
};
