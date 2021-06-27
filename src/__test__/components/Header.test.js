import { render, screen, cleanup } from "@testing-library/react";
import Header from "../../components/Header/Header"

test('should render header component', () => {
    render(<Header />);
    const headerLabel = screen.getByText("Find & track the best free-to-play games!");
    const searchLabel = screen.getByText("Search for what to play next!");
    expect(headerLabel).toBeInTheDocument();
    expect(searchLabel).toBeInTheDocument();
});