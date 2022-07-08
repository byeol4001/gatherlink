import { Button } from "../src/components/Button";
import { Input } from "../src/components/Input";
import { MainContent } from "../src/styles/style";

const Index = () => {
  return (
    <MainContent>
      <div>
        <Button text="test button" />
        <Input placeholder="test Input" />
      </div>
    </MainContent>
  );
};

export default Index;
