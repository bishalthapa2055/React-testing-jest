import { render, screen } from "@testing-library/react";
import CommentLists from "../components/commentLists";

test("comments are not avaliable", () => {
  render(<CommentLists allcomments={[]} />);
  const data = screen.getByText("no comments", { exact: false });
  expect(data).toBeInTheDocument();
});

test("lists all comments", () => {
  render(
    <CommentLists
      allcomments={[
        { id: 1, text: "comment - 1" },
        { id: 2, text: "comment - 2" },
        { id: 3, text: "comment - 3" },
      ]}
    />
  );
  const data = screen.queryByText("comments", { exact: false });
  expect(data).not.toBeInTheDocument();

  expect(screen.getByText("comment - 1")).toBeInTheDocument();
  expect(screen.getByText("comment - 2")).toBeInTheDocument();
  expect(screen.getByText("comment - 3")).toBeInTheDocument();
  const commentsLi = screen.getAllByRole("listitem");
  expect(commentsLi.length).toBe(3);
});
