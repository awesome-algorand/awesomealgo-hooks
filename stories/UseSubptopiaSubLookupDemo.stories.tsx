import type { Meta, StoryObj } from '@storybook/react';
import { UseSubptopiaSubLookupDemo } from './UseSubptopiaSubLookupDemo';
import { SubscriptionExpirationType } from '../src/misc/interfaces';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/UseSubptopiaSubLookupDemo',
  component: UseSubptopiaSubLookupDemo,
  tags: ['autodocs'],
} satisfies Meta<typeof UseSubptopiaSubLookupDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const CustomAddress: Story = {
  args: {
    address: 'NOINQPKI24M66NFKQOKBAMECPIFMTPI72E3SJRTARN7TTDNPEEGJ2Y2ZGI',
    smiId: 190521162,
    expirationType: SubscriptionExpirationType.MONTHLY,
  },
};
