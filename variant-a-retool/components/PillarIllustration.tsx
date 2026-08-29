import VisionIllustration from "@/components/illustrations/VisionIllustration";
import IotIllustration from "@/components/illustrations/IotIllustration";
import EnergyIllustration from "@/components/illustrations/EnergyIllustration";
import IntegrationIllustration from "@/components/illustrations/IntegrationIllustration";

const illustrations: Record<string, React.ComponentType> = {
  Eye: VisionIllustration,
  Cpu: IotIllustration,
  Sun: EnergyIllustration,
  Network: IntegrationIllustration,
};

export default function PillarIllustration({ name }: { name: string }) {
  const Illustration = illustrations[name] ?? VisionIllustration;
  return <Illustration />;
}
