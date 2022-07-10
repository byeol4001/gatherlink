import { Button } from "../../src/components/Button";
import { Input } from "../../src/components/Input";
import { FormContainer } from "../../src/styles/style";

const Index = () => {
  return (
    <FormContainer>
      <Input placeholder="hi" />
      <Button width="30%" text="hiss" />
    </FormContainer>
  );
};

export default Index;
