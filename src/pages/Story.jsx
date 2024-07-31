import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import storyBg from "../assets/vids/storyBg.mp4";

const Story = () => {
  const { setHeroText, setHeroBg } = useOutletContext();

  useEffect(() => {
    setHeroText("Story");
    setHeroBg(storyBg);
  });

  return (
    <section className="story">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas sequi rerum unde, dolorum similique minus
        inventore quia ut debitis molestiae quasi? Inventore facere, esse perferendis fuga natus maiores doloribus?
      </p>
    </section>
  );
};

export default Story;
