import type { Meta, StoryObj } from "@storybook/react";

import FeedPost from "./FeedPost";
import PageLayout from "../PageLayout/PageLayout";

const meta: Meta<typeof FeedPost> = {
  component: FeedPost,
  args: {
    children: "Welcome to the ClickFunnels Forum",
  },
};

type Story = StoryObj<typeof FeedPost>;

export const Primary: Story = {
  render: (props) => <FeedPost {...props} />,
};

export const WithALargeDescription: Story = {
  render: (props) => <FeedPost {...props} />,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus, mauris tincidunt dignissim maximus, mauris leo rutrum lectus, at lobortis diam justo eget purus. Donec et suscipit nulla, at faucibus mi. Morbi vel sem turpis. Mauris sem ante, porttitor rutrum posuere eget, fringilla in magna. Vivamus ac viverra eros, vitae commodo felis. Morbi ultrices tellus vitae mi pellentesque auctor vitae vitae quam. In posuere condimentum nulla faucibus suscipit. Sed faucibus at ligula eget sollicitudin. Sed vestibulum scelerisque mauris vitae consequat. Proin vitae nisi in turpis blandit tincidunt sit amet non sapien. Vestibulum non elementum metus. Praesent fringilla, turpis eget facilisis porttitor, augue diam posuere tortor, vitae placerat felis nisi luctus nisi. Mauris gravida ac sapien a commodo.

    Etiam turpis elit, feugiat sodales pellentesque non, consequat ac ante. Proin eget mattis nibh, quis hendrerit libero. Etiam condimentum lectus arcu, ac ultrices urna sollicitudin sit amet. Sed ut nisl a nisi aliquam suscipit. Sed fringilla ligula et dui hendrerit, a tincidunt urna tincidunt. Nam at urna interdum, aliquet nibh eget, bibendum nunc. Mauris quis tellus sit amet enim finibus scelerisque. Nunc congue semper metus eget tincidunt.

    Mauris mollis id diam ut mollis. Nunc eget nisi quis mauris dictum rutrum. Praesent at porttitor justo. Etiam ornare bibendum mauris, at imperdiet turpis congue sit amet. Nam et erat sit amet libero ornare eleifend ut sit amet metus. Fusce laoreet elementum egestas. Integer quis porttitor massa. Sed vulputate suscipit nisl eget pulvinar. Nulla tincidunt tortor id nibh molestie imperdiet. Quisque fringilla tellus sit amet quam dictum, et ultricies lectus egestas.

    Nullam cursus cursus dignissim. Vestibulum vestibulum ac elit eget sodales. Nulla molestie non dolor sit amet iaculis. Quisque rhoncus porta elementum. Quisque quis dolor non diam cursus ornare lacinia nec justo. Integer eu viverra odio. Nulla erat nunc, euismod eget elit at, elementum venenatis enim. Duis auctor condimentum blandit.

    Cras nunc tortor, lobortis et lectus sed, ultrices ullamcorper leo. Fusce accumsan eros sit amet nisi dictum bibendum. Nam porttitor leo elit, quis dictum ligula faucibus eu. Vivamus ut odio lorem. Quisque sapien eros, porttitor vitae elementum ac, gravida et elit. Cras rhoncus quam in bibendum vehicula. Sed posuere eu felis sed laoreet. Nam pulvinar auctor magna, at elementum est. Praesent convallis ut orci id ultrices. Morbi rhoncus hendrerit ante, et mattis massa ornare id.`,
  },
};

export const InsidePageLayout: Story = {
  render: (props) => <FeedPost {...props} />,
  decorators: [
    (Story) => (
      <PageLayout>
        <Story />
      </PageLayout>
    ),
  ],
};

export default meta;
