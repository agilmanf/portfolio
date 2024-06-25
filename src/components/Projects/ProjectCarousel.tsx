import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/components/ui/carousel";

type ProjectCarouselType = {
  images: string[];
};

export function ProjectCarousel({ images }: ProjectCarouselType) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      className="m-auto w-full h-full max-w-3xl"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="aspect-video">
            <img
              className="border p-2 object-cover w-full h-full"
              src={image}
              alt={"image-" + index}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
