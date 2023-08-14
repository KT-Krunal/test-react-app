import type { Meta, StoryObj } from "@storybook/react";

import PageLayout from "./PageLayout";

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
};

type Story = StoryObj<typeof PageLayout>;

export const Primary: Story = {
  render: ({ children, ...props }) => (
    <PageLayout {...props}>
      <p>This is the page content</p>
    </PageLayout>
  ),
};

export const NoChildren: Story = {
  render: ({ children, ...props }) => <PageLayout {...props}></PageLayout>,
};

export default meta;
