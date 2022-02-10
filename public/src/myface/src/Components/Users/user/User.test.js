import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { User } from "./User";


test("renders user's name", () => {
  // Arrange
  const user = {
    id: "1",
    name: "user name",
    profileImageUrl: "profile picture",
    username: "username",
    email: "email",
  };

  // Act
  render(<BrowserRouter><User user={user} /></BrowserRouter>
  );
  const messageElement = screen.getByText(/user name/i);

  // Assert
  expect(messageElement).toBeInTheDocument();
});

test("matches snapshot", () => {
    // Arrange
    const user = {
        id: "1",
        name: "user name",
        profileImageUrl: "profile picture",
        username: "username",
        email: "email",
      };
  
    // Act
    const tree = renderer
      .create(<BrowserRouter><User user={user} /></BrowserRouter>)
      .toJSON();
  
    // Assert
    expect(tree).toMatchSnapshot();
  });