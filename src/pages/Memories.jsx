import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Memories = () => {
  const { setHeroText, setHeroBg } = useOutletContext();

  useEffect(() => {
    setHeroText("Memories");
    setHeroBg(null);
  });

  return (
    <section className="memories">
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

export default Memories;
