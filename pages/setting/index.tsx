import { Button } from "../../src/components/Button";
import { Input } from "../../src/components/Input";
import { FormContainer } from "../../src/styles/style";
import { useState } from 'react'

const Index = () => {

    const [reviews, setReviews] = useState(null)

    const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.js`.
    fetch('/reviews')
      .then((res) => res.json())
      .then(setReviews)
  }
  return (
    <FormContainer>
      <Input placeholder="hi" />
      <Button width="30%" text="hiss" />
      {reviews}
    </FormContainer>
  );
};

export default Index;
