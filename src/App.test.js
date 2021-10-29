import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./components/Home";
import categoryItems from "./dataSource/categories";
test("renders header in main screen", () => {
  render(<App />);
  const headerElement = screen.getByText(/stories feed/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders categories in main screen", () => {
  render(<Home />);
  categoryItems.map((item) => {
    const categories = screen.getAllByText(
      new RegExp(item.name.toLowerCase(), "i")
    );
    categories.map((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
