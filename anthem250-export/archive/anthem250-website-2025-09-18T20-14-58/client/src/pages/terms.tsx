import Navigation from "@/components/navigation";
import TermsConditions from "@/components/terms-conditions";
import Footer from "@/components/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <TermsConditions />
      </main>
      <Footer />
    </div>
  );
}