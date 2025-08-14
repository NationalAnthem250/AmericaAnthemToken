import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function HowToParticipate() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const joinWaitlistMutation = useMutation({
    mutationFn: async (data: { email: string; name: string; phone?: string }) => {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to the 250STAR launch waitlist!",
      });
      setEmail("");
      setPhone("");
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      joinWaitlistMutation.mutate({ 
        email: email, 
        name: "Patriotic American", // Default name for email signups
        phone: phone || undefined
      });
    }
  };

  return (
    <section id="participate" className="py-20 bg-gradient-to-b from-patriot-navy to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            HOW TO <span className="text-patriot-red">PARTICIPATE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of patriotic Americans in owning a piece of digital history
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-patriot-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Join Waitlist</h3>
                <p className="text-gray-300">
                  Sign up to get notified when the 250STAR token launches and secure your priority access.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-patriot-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Connect Wallet</h3>
                <p className="text-gray-300">
                  Connect your crypto wallet when the token launches to participate in the historic offering.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-patriot-gold rounded-full flex items-center justify-center text-patriot-navy font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Own History</h3>
                <p className="text-gray-300">
                  Purchase 250STAR tokens at $17.76 each and own a piece of America's first National Anthem NFT.
                </p>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-gradient-to-br from-patriot-red/20 to-patriot-blue/20 rounded-2xl p-8 border border-patriot-gold/30 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">Get Priority Access</h3>
              <p className="text-gray-300">
                Be among the first to own America's historic National Anthem token
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold"
                required
              />
              <Input
                type="tel"
                placeholder="Enter your phone number (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold"
              />
              <Button
                type="submit"
                disabled={joinWaitlistMutation.isPending}
                className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold py-3 text-lg"
              >
                {joinWaitlistMutation.isPending ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-patriot-navy mr-2"></div>
                    Joining...
                  </div>
                ) : (
                  <>
                    <i className="fas fa-star mr-2"></i>
                    Join Waitlist
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                🇺🇸 Join <span className="text-patriot-gold font-semibold">12,847</span> patriotic Americans
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}