import Image from "next/image";
import Container from "./Container";
import React from "react";
import ContentCards from "./ContentCards";
import HorizentalContentCards from "./HorizentalContentCards";

function BlogPosts() {
  return (
    <Container className="px-10" maxWidth="lg">
      <div className="py-20">
        <div className="mb-20 space-y-3 text-center">
          <small className="font-bold text-primary-color">
            Patcices Advice
          </small>
          <h3 className="text-4xl font-bold text-text-color">Feature Posts</h3>
        </div>

        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-7 lg:flex-nowrap">
          <div className="flex w-full justify-center md:hidden">
            <ContentCards
              src="/julia-rekamie-Z72YujnOrlY-unsplash.jpg"
              headers="Koudetat à la Maison #1 (L'intégrale)"
              tags={["google", "new"]}
              date={`22 April 2021`}
              url={`#`}
              discriptions={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
              rounded="lg"
              shadow="sm"
              // padding
            />
          </div>
          <div className="hidden w-full justify-center md:flex lg:w-1/2">
            <HorizentalContentCards
              src="/julia-rekamie-Z72YujnOrlY-unsplash.jpg"
              headers="Koudetat à la Maison #1 (L'intégrale)"
              tags={["google", "new"]}
              date={`22 April 2021`}
              url={`#`}
              discriptions={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
              rounded="lg"
              shadow="sm"
              // padding
            />
          </div>
          <div className="flex w-full justify-center md:hidden">
            <ContentCards
              src="/card1.jpg"
              headers="Koudetat à la Maison #1 (L'intégrale)"
              tags={["google", "new"]}
              date={`22 April 2021`}
              url={`#`}
              discriptions={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
              rounded="lg"
              shadow="sm"
              // padding
            />
          </div>
          <div className="hidden w-full justify-center md:flex lg:w-1/2">
            <HorizentalContentCards
              src="/card1.jpg"
              headers="Koudetat à la Maison #1 (L'intégrale)"
              tags={["google", "new"]}
              date={`22 April 2021`}
              url={`#`}
              discriptions={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
              rounded="lg"
              shadow="sm"
              // padding
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BlogPosts;
