import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

interface ArrayItem { 
    src : string;
    altText : string;
    caption : string;
}

const items: ArrayItem[] = [
  {
    src: '/images/carousel-1.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '/images/carousel-2.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '/images/carousel-3.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

function Slider() {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [animating, setAnimating] = React.useState<boolean>(false);
  const next = () => {
    if (animating) return;

    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;

    setActiveIndex(nextIndex);
  }
  const previous = () => {
    if (animating) return;

    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;

    setActiveIndex(nextIndex);
  }
  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <section className="section-carousel">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </section>
  )
}

export default Slider;