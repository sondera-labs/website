import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";

const DemoScreen = () => {
  const handleAuthBtn = () => {
    try {
      const url = "sondera://quick-login";
      window.open(url, "_self");
    } catch (error) {
      console.error("Error opening deep link:", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-full p-8 bg-background gap-4">
      <TypographyP>Sondera QuickLogin Demo</TypographyP>
      <Button onClick={handleAuthBtn}>Sondera QuickLogin</Button>
    </div>
  );
};

export default DemoScreen;
