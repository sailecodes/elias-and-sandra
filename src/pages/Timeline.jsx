import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import timelineBg from "../assets/vids/timelineBg.mp4";

const Timeline = () => {
  const { setHeroText, setHeroBg } = useOutletContext();

  useEffect(() => {
    setHeroText("Timeline");
    setHeroBg(timelineBg);
  });

  return (
    <section className="timeline">
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
export default Timeline;
