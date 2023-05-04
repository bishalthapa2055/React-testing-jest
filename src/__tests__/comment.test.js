import { fireEvent, render, screen } from "@testing-library/react";
import Comment from "../components/comment";
import userEvent from "@testing-library/user-event";

test("Initial Conditions", () => {
  render(<Comment />);
  const comment = screen.getByRole("textbox");
  expect(comment).toBeInTheDocument();
  const checkBox = screen.getByLabelText("I agree terms and conditions", {
    exact: false,
  });
  expect(checkBox).toBeInTheDocument();
  const submitButton = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });
  expect(submitButton).toBeDisabled();
});

test("Enable button click while selectiong checkbox", async () => {
  render(<Comment />);
  const comment = screen.getByPlaceholderText("write your comment here", {
    exact: false,
  });

  const checkBox = screen.getByLabelText("I agree terms and conditions", {
    exact: false,
  });

  const submitButton = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });
  //   fireEvent.change(comment, { target: { value: "hello there" } });
  await userEvent.type(comment, "hello there");
  await userEvent.click(checkBox);

  expect(submitButton).toBeEnabled();
  await userEvent.click(checkBox);

  expect(submitButton).toBeDisabled();
});
