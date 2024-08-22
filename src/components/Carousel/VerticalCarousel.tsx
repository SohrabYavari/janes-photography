// ShadcnUI Imports
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  images: string[];
}

const VerticalCarousel = ({ images }: Props) => {
  return (
    <div className="flex flex-col py-10">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full"
      >
        <CarouselContent className="h-[250px]">
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="">
                <Card>
                  <CardContent className="flex items-center justify-center p-1">
                    <figure className="flex w-full">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="h-[220px] w-full object-cover rounded-sm"
                      />
                    </figure>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default VerticalCarousel;
