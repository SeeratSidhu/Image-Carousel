import { cleanup, fireEvent, getByAltText, render, waitForElement, screen, getByText } from '@testing-library/react';
import App from './App';

describe("App", () => {
  afterEach(cleanup);

  it("shows no photos on intial render", () => {
    const { getByText } = render(<App/>);
    expect(getByText("no photos")).toBeInTheDocument();
  });

  it("shows a loading state ", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText("Cats"));
    expect(getByText("Loading...")).toBeInTheDocument();
  });
})