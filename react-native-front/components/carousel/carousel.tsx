import Carousel from "react-native-snap-carousel";
import { useState } from "react";

const Items = () => {
  const [carouselItems, setCarouselItems] = useState([
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ]);

  return (
    <Carousel
      layout={"default"}
      ref={(ref) => (this.carousel = ref)}
      data={this.state.carouselItems}
      sliderWidth={300}
      itemWidth={300}
      renderItem={this._renderItem}
      onSnapToItem={(index) => this.setState({ activeIndex: index })}
    />
  );
};
