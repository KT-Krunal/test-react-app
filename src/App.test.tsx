import { fireEvent, render, waitFor } from "./lib/testing";
import { it } from "vitest";
import App from "./App";
import { store } from "./lib/store";
import { addPost, clearPosts } from "./lib/store/slices/postsSlice";

// ----- Running the test suite -----
// Running `npm run dev` should have automatically opened the testing UI
// You can run the test suite using `npm run test` or `npm run test:ui` (https://vitest.dev/guide/ui.html#vitest-ui)
// to see a dedicated UI to view and interact with your tests and your test results.

const testPostTitle = "My test post";
const testPostContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus, mauris tincidunt dignissim maximus, mauris leo rutrum lectus, at lobortis diam justo eget purus. Donec et suscipit nulla, at faucibus mi. Morbi vel sem turpis. Mauris sem ante, porttitor rutrum posuere eget, fringilla in magna. Vivamus ac viverra eros, vitae commodo felis. Morbi ultrices tellus vitae mi pellentesque auctor vitae vitae quam. In posuere condimentum nulla faucibus suscipit. Sed faucibus at ligula eget sollicitudin. Sed vestibulum scelerisque mauris vitae consequat. Proin vitae nisi in turpis blandit tincidunt sit amet non sapien. Vestibulum non elementum metus. Praesent fringilla, turpis eget facilisis porttitor, augue diam posuere tortor, vitae placerat felis nisi luctus nisi. Mauris gravida ac sapien a commodo.`;

describe("Feed Page", () => {
  it("should render successfully", () => {
    expect(() => render(<App />)).not.toThrowError();
  });

  // TODO: Ensure all required tests are passing
  describe("REQUIRED TESTS", () => {
    it("should allow the user to create new posts", () => {
      const { getByText, getByTestId } = render(<App />);

      expect(store.getState().postsSlice.posts.length).toBe(0);

      fireEvent.click(getByText("Add Post"));

      // Fill out the "New Post" form
      expect(getByText("New Post")).toBeInTheDocument();

      // data-testid="titleInput"
      fireEvent.change(getByTestId("titleInput"), {
        target: { value: testPostTitle },
      });
      // data-testid="contentInput"
      fireEvent.change(getByTestId("contentInput"), {
        target: {
          value: testPostContent,
        },
      });

      // Submit the form
      fireEvent.click(getByText("Submit"));

      expect(store.getState().postsSlice.posts.length).toBe(1);

      const newPost = store.getState().postsSlice.posts[0];
      expect(newPost.title).toBe(testPostTitle);
      expect(newPost.content).toBe(testPostContent);
      expect(newPost.id).toEqual(expect.any(String));
      expect(newPost.kudosCount).toBe(0);
      expect(newPost.publishedAt).toEqual(expect.any(Date));
    });

    describe("feed posts (route: '/')", () => {
      beforeEach(() => {
        store.dispatch(clearPosts());

        store.dispatch(
          addPost({
            id: "1",
            title: testPostTitle,
            content: testPostContent,
            publishedAt: new Date(),
            kudosCount: 0,
          })
        );
        store.dispatch(
          addPost({
            id: "2",
            title: "My second test post",
            content: testPostContent,
            publishedAt: new Date(),
            kudosCount: 0,
          })
        );
      }, []);

      it("should render a feed post for each item", () => {
        const { getAllByTestId } = render(<App />);

        // data-testid="feedPost"
        expect(getAllByTestId("feedPost").length).toBe(2);
      });

      it("should render a title for each post", () => {
        const { getByText } = render(<App />);

        expect(getByText(testPostTitle)).toBeInTheDocument();
        expect(getByText("My second test post")).toBeInTheDocument();
      });

      it("should render a human readable published date for each post", () => {
        const format = "MMMM D, YYYY";
        // TODO: Complete this test case
      });

      it("should render a snippet of the post content with a max of 200 characters", () => {
        const { getAllByTestId } = render(<App />);

        // data-testid="feedPostContent"
        const feedPostContent = getAllByTestId("feedPostContent");
        feedPostContent.map((content) => {
          // Add 3 to account for the ellipsis
          expect(content.textContent?.length).toBeLessThanOrEqual(203);
        });
      });

      it("should render a 'Read more' link for each post that navigates to the post page (/posts/:id)", async () => {
        const { getAllByTestId, getByTestId } = render(<App />);

        // data-testid="feedPostReadMore"
        fireEvent.click(getAllByTestId("feedPostReadMore")[0]);

        await waitFor(() => {
          // data-testid="PostShowPage"
          expect(getByTestId("PostShowPage")).toBeInTheDocument();
        });
      });
    });

    describe("post show page (/posts/:id)", () => {
      it("should render the posts title and published date (human readable) as a heading", () => {
        const format = "MMMM D, YYYY";
        // TODO: Complete this test case
      });

      it("should display the full post content, while preserving new lines", () => {
        // TODO: Complete this test case
      });

      it("should display a 👍🏻 kudos button in the header", () => {
        // TODO: Complete this test case
      });

      it("should display a kudos count next to the kudos button", () => {
        // TODO: Complete this test case
      });

      it("should add a kudos to the post when the kudos button is clicked", () => {
        // TODO: Complete this test case
      });
    });
  });

  describe("stretch goal tests", () => {
    it("should render a 404 page when visiting a post route that doesn't exist", () => {
      // TODO: Complete this test case
    });

    it("should allow users to add comments to a post on the post show page", () => {
      // TODO: Complete this test case
    });

    it("should allow users see the number of comments for each post on the feed page", () => {
      // TODO: Complete this test case
    });
  });
});
