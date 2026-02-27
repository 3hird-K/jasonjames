"use client";

import { useState, type FormEvent } from "react";
import { addToast } from "@heroui/toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let errorMessage = "Something went wrong.";
        try {
          const body = await res.json();
          errorMessage = body.error || errorMessage;
        } catch {
          // Response wasn't valid JSON (e.g. Vercel error page)
        }
        throw new Error(errorMessage);
      }

      setStatus("success");
      form.reset();
      addToast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        color: "success",
        timeout: 4000,
      });
    } catch (err) {
      setStatus("error");
      addToast({
        title: "Failed to send message",
        description:
          err instanceof Error ? err.message : "Please try again later.",
        color: "danger",
        timeout: 5000,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          disabled={status === "sending"}
          className="h-11 bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          disabled={status === "sending"}
          className="h-11 bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          placeholder="What would you like to say?"
          required
          disabled={status === "sending"}
          rows={5}
          className={cn(
            "flex w-full rounded-md border border-input bg-background/50 px-3 py-2 text-base shadow-sm transition-colors",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
          )}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all"
      >
        {status === "sending" ? "Sending..." : "Send Message →"}
      </Button>
    </form>
  );
}
