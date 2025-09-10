import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Share2 } from "lucide-react";

export default function SocialMediaLauncher() {
  return (
    <Link href="/social-media">
      <Button 
        className="fixed bottom-24 left-6 z-50 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        data-testid="button-social-media-launcher"
      >
        <Share2 className="h-6 w-6" />
      </Button>
    </Link>
  );
}