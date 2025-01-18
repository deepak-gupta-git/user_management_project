import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";
import { AppProvider } from "../context/AppContext";

test("renders dashboard summary", () => {
  render(
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );

  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});

