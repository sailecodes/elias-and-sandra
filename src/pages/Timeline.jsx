import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const Timeline = () => {
  const { setHeroText, setHeroBg } = useOutletContext();

  useEffect(() => {
    setHeroText("Timeline");
    setHeroBg(null);
  });

  return (
    <section className="timeline">
      <div>
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
      </div>
    </section>
  );
};
export default Timeline;
