import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Comment from "../components/comment";

test("Comment gets displayed after submitting", async () => {
  render(<Comment />);
  const input = screen.getByRole("textbox");
  const checkbox = screen.getByLabelText("i agree terms and conditions", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });

  await userEvent.type(input, "hello");
  await userEvent.click(checkbox);
  await userEvent.click(submitButton);

  // const commentLi = await screen.findByText("hello", { exact: false });
  const commentLi = await screen.findByText("hello", { exact: false });
  // screen.debug();
  expect(commentLi).toBeInTheDocument();
});

test("2 Comment gets displayed after submitting", async () => {
  render(<Comment />);
  const input = screen.getByRole("textbox");
  const checkbox = screen.getByLabelText("i agree terms and conditions", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });

  await userEvent.type(input, "hello");
  await userEvent.click(checkbox);
  await userEvent.click(submitButton);

  await userEvent.type(input, "awesome");
  await userEvent.click(submitButton);

  await waitFor(() => {
    const commentLi = screen.getAllByRole("listitem");
    expect(commentLi.length).toBe(2);
  });
  //  screen.debug();
});
