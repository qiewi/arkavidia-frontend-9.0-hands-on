import { Faq } from "@/components/competitive-programming/faq";
import { PageHeader } from "@/components/competitive-programming/page-header";
import { PrizeReward } from "@/components/competitive-programming/prize-reward";
import { RegistrationCountdown } from "@/components/competitive-programming/registration-countdown";

export default function Home() {
  return (
    <main>
      <PageHeader />
      <RegistrationCountdown />
      <PrizeReward />
      <Faq />
    </main>
  );
}
