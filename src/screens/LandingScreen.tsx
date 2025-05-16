import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import Gradient from "@/assets/gradient-3.png";
import Logo from "@/assets/logos/word-white-tbg.png";

const LandingScreen = () => {
  return (
    <div className="w-screen h-screen overflow-auto">
      <div className=" w-full min-h-full flex flex-col bg-primary p-6 sm:p-12 items-center">
        <div className="flex flex-col gap-8 mb-8 sm:gap-12 max-w-[1100px] ">
          <div className="w-full h-36 sm:h-64 rounded-lg overflow-hidden relative">
            <img src={Gradient} alt="gradient" className="w-full h-full object-fill" />
            <img src={Logo} alt="logo" className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-34 sm:w-48" />
          </div>
          <div className="flex flex-col gap-6">
            <TypographyH1 className="text-primary-foreground !text-[24px] italic">
              Passwords and federated logins are a thing of the <i>past</i>.
            </TypographyH1>
            <TypographyP className="text-primary-foreground opacity-85">
              Every time you hit "Sign in with Google", you hand off pieces of your identity — where you are, what you do, who you are — to yet another company.
              No clarity on what's shared. No control over how long. No say in where it ends up.
            </TypographyP>
            <TypographyP className="text-primary-foreground opacity-85">
              But your identity isn't a product.
              <br />
              It's personal. And it should be yours to control.
            </TypographyP>
            <TypographyP className="text-primary-foreground opacity-85">
              Sondera Labs is about building toward that future — one where you own your digital identity. We're embracing the vision of Web 3.0, and we're
              starting with authentication.
            </TypographyP>
            <TypographyP className="text-primary-foreground opacity-85">
              Imagine a world where one digital ID unlocks everything.
              <br />
              One identity for every app, service, and platform.
              <br />
              No more juggling logins. No more forgotten passwords.
            </TypographyP>
            <TypographyP className="text-primary-foreground opacity-85">Just one click. Every time.</TypographyP>
            <div className="text-primary-foreground opacity-85">
              <TypographyP className="text-primary-foreground">And that's just the beginning:</TypographyP>
              <ul className="pl-4.25 list-disc list-outside font-lausanne font-[200] text-[18px] leading-[1.5]">
                <li>Create unique aliases to protect your privacy</li>
                <li>See exactly where and when you've signed in</li>
                <li>Share only what you want — and revoke access anytime</li>
              </ul>
            </div>
            <TypographyP className="text-primary-foreground opacity-85">
              All powered by decentralized, tamper-proof infrastructure. No middlemen. No tracking. No compromise.
            </TypographyP>
            <TypographyP className="text-primary-foreground opacity-85">
              This isn't just a better login.
              <br />
              It's the foundation of a digital world where you're finally in control.
            </TypographyP>
            <TypographyH2 className="text-primary-foreground !text-[24px] italic">Welcome to the next era of the Internet.</TypographyH2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
