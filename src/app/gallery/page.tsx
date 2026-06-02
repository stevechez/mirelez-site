import { ArrowLeft, Images } from "lucide-react"

import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const galleryItems = [
  {
    title: "Kitchen Remodel",
    category: "Residential",
    description: "A transformation-focused remodel designed around finish quality, function, and visual trust.",
  },
  {
    title: "Custom Home Detail",
    category: "Custom Homes",
    description: "Craftsmanship details that help prospects understand the standard of work before they call.",
  },
  {
    title: "Commercial Improvement",
    category: "Commercial",
    description: "Professional project presentation for business owners evaluating capability and reliability.",
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 noise-overlay" />

        <div className="showroom-shell relative py-20 md:py-28">
          <Button variant="outline" className="rounded-full bg-background/70" asChild>
            <a href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </a>
          </Button>

          <div className="mt-12 max-w-4xl">
            <div className="hero-kicker">Project Gallery</div>

            <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              A showroom for craftsmanship, transformation, and trust.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              This gallery will become the visual proof engine for Mirelez Construction:
              project photos, before-and-after stories, service categories, and case
              studies that help clients feel confident before reaching out.
            </p>
          </div>
        </div>
      </section>

      <section className="showroom-shell py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <Card key={item.title} className="premium-card overflow-hidden">
              <div className="flex aspect-[4/3] items-center justify-center bg-muted">
                <Images className="size-10 text-muted-foreground" />
              </div>

              <CardContent className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  {item.category}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
